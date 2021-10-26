import React from "react";
import QRCode from "qrcode.react";
import { groupBy } from "lodash";
import {
  Title,
  PatientDetails,
  ImmunizationDetails,
  Row,
  UnderlinedFirstCol,
  FirstCol,
  SecondCol,
  ResultSection,
  StyledMemoSection,
  TravellerInfoSection,
  Bold,
  QrCodeContainerWithBorder,
  QrRowCenter,
} from "../styled-components";
import { getNationality } from "../../../util/nationality";
import countries from "i18n-iso-countries";
import englishCountries from "i18n-iso-countries/langs/en.json";
countries.registerLocale(englishCountries);

export interface SimpleImmunizationObject {
  vaccineCode: string;
  vaccineName: string;
  vaccineLot: string;
  vaccinationDate: string;
  vaccinationLocation: string;
  vaccinationCountry: string;
  performer: string;
}

export interface VaccinationMemoInfo {
  patientName: string;
  patientNric?: string;
  patientNationalityCode: string;
  patientBirthDate: string;
  passportNumber: string;
  immunizations: SimpleImmunizationObject[];
  effectiveDate?: string;
  onlineUrl: string;
}

const MemoResultSection: React.FC<{
  vaccinationMemoInfo: VaccinationMemoInfo;
  multiQr?: boolean;
}> = ({ vaccinationMemoInfo, multiQr = false }) => {
  return (
    <>
      <ResultSection>
        <p>
          Based on Singapore&apos;s requirement,{" "}
          {vaccinationMemoInfo.patientName} has been fully vaccinated against
          COVID-19.
        </p>
        {!multiQr && <p>Thank you.</p>}
        {multiQr && (
          <TravellerInfoSection>
            Note: Travellers are subject to the country or region&apos;s
            requirements prior to travel. The QR code used for verification is
            based on your <u>destination country</u>.
          </TravellerInfoSection>
        )}
      </ResultSection>
      {multiQr && (
        <>
          <ResultSection>
            <Bold>Online QR verification</Bold>
            <p>This QR Code requires an internet connection to verify.</p>
          </ResultSection>
          <br />
          <QrRowCenter>
            <QrCodeContainerWithBorder>
              <QRCode
                value={vaccinationMemoInfo.onlineUrl}
                level={"M"}
                size={200}
              />
            </QrCodeContainerWithBorder>
          </QrRowCenter>
        </>
      )}
    </>
  );
};

export const MemoSection: React.FC<{
  vaccinationMemoInfo: VaccinationMemoInfo;
  multiQr?: boolean;
}> = ({ vaccinationMemoInfo, multiQr = false }) => {
  const memoResultSection = MemoResultSection({ vaccinationMemoInfo, multiQr });
  const groupedImmunizations = groupBy(
    vaccinationMemoInfo.immunizations,
    "vaccineCode"
  );
  const groupedVaccineCode = Object.keys(groupedImmunizations);
  return (
    <StyledMemoSection>
      <Title>Vaccination Certificate</Title>
      <PatientDetails>
        <Row>
          <FirstCol>Name of Person:</FirstCol>
          <SecondCol>{vaccinationMemoInfo.patientName}</SecondCol>
        </Row>
        {vaccinationMemoInfo.patientNric && (
          <Row>
            <FirstCol>NRIC/FIN Number:</FirstCol>
            <SecondCol>{vaccinationMemoInfo.patientNric}</SecondCol>
          </Row>
        )}
        <Row>
          <FirstCol>Passport/Travel Document Number:</FirstCol>
          <SecondCol>{vaccinationMemoInfo.passportNumber}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Nationality/Citizenship:</FirstCol>
          <SecondCol>
            {getNationality(vaccinationMemoInfo.patientNationalityCode)}
          </SecondCol>
        </Row>
        <Row>
          <FirstCol>Date of Birth:</FirstCol>
          <SecondCol>{vaccinationMemoInfo.patientBirthDate}</SecondCol>
        </Row>
      </PatientDetails>
      {groupedVaccineCode.map((vaccineCode) =>
        groupedImmunizations[vaccineCode].map((immunization, i) => (
          <ImmunizationDetails key={i}>
            <Row>
              <UnderlinedFirstCol>Dose {i + 1}</UnderlinedFirstCol>
            </Row>
            <Row>
              <FirstCol>Manufacturer/Vaccination Name/Brand/Type:</FirstCol>
              <SecondCol>{immunization.vaccineName}</SecondCol>
            </Row>
            <Row>
              <FirstCol>Clinic/Vaccination Centre:</FirstCol>
              <SecondCol>{immunization.vaccinationLocation}</SecondCol>
            </Row>
            <Row>
              <FirstCol>Date of Vaccination:</FirstCol>
              <SecondCol>{immunization.vaccinationDate}</SecondCol>
            </Row>
            <Row>
              <FirstCol>Batch Number:</FirstCol>
              <SecondCol>{immunization.vaccineLot}</SecondCol>
            </Row>
            <Row>
              <FirstCol>Country/Region of Vaccination:</FirstCol>
              <SecondCol>
                {countries.getName(immunization.vaccinationCountry, "en")}
              </SecondCol>
            </Row>
            <Row>
              <FirstCol>Health Worker:</FirstCol>
              <SecondCol>{immunization.performer}</SecondCol>
            </Row>
          </ImmunizationDetails>
        ))
      )}
      {memoResultSection}
    </StyledMemoSection>
  );
};
