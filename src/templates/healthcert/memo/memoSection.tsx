import React from "react";
import { healthcert } from "@govtechsg/oa-schemata";
import {
  Title,
  PatientDetails,
  ImmunizationDetails,
  Row,
  UnderlinedFirstCol,
  FirstCol,
  SecondCol,
  ResultSection,
  TestResult,
  Doctor,
  Bold,
  StyledMemoSection
} from "../styled-components";
import { getNationality } from "../../../util/nationality";
import countries from "i18n-iso-countries";
import englishCountries from "i18n-iso-countries/langs/en.json";
countries.registerLocale(englishCountries);

type Coding = healthcert.Coding;
type Identifier = healthcert.Identifier;
type Patient = healthcert.Patient;

export interface MemoInfo {
  specimen?: healthcert.Patient | undefined;
  observation: any;
  provider: any;
  lab: any;
  swabType: Coding | undefined;
  patientName: string;
  swabCollectionDate: string;
  performerName: string | undefined;
  performerMcr: string | undefined;
  observationDate: string;
  patientNricIdentifier: Identifier | undefined;
  patientNationalityCode: string;
  passportNumber: string;
  patient: Patient | undefined;
  testType: string | undefined;
  testResult: string;
  birthdate: string | undefined;
}

export const MemoSection: React.FC<MemoInfo> = ({
  observation,
  provider,
  lab,
  swabType,
  swabCollectionDate,
  performerName,
  performerMcr,
  observationDate,
  patientName,
  patientNationalityCode,
  passportNumber,
  patientNricIdentifier,
  testResult,
  birthdate
}) => {
  return (
    <StyledMemoSection>
      <Title data-testid="memo-title">
        MEMO ON
        <br />
        {observation?.code?.coding?.[0]?.display.toUpperCase()} RESULT
      </Title>
      <PatientDetails>
        <Row>
          <FirstCol>Name of Person:</FirstCol>
          <SecondCol>{patientName}</SecondCol>
        </Row>
        {patientNricIdentifier?.value && (
          <Row>
            <FirstCol>NRIC/FIN Number:</FirstCol>
            <SecondCol>{patientNricIdentifier?.value}</SecondCol>
          </Row>
        )}
        <Row>
          <FirstCol style={{ lineHeight: 1 }}>Passport/Travel Document Number:</FirstCol>
          <SecondCol>{passportNumber}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Nationality/Citizenship:</FirstCol>
          <SecondCol>{getNationality(patientNationalityCode)}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Date of Birth:</FirstCol>
          <SecondCol>{birthdate}</SecondCol>
        </Row>
      </PatientDetails>
      <ResultSection>
        <p>To whom it may concern:</p>
        <p>
          The abovementioned has undergone {observation?.code?.coding?.[0]?.display} for COVID-19 using a{" "}
          {swabType?.display} on {swabCollectionDate}, by {provider?.name} and has tested{" "}
          <TestResult>{testResult}</TestResult>. This test result was reported by {lab?.name} on {observationDate}.
        </p>
        <p>
          Travellers should note that they are subject to the country or region&apos;s requirements prior to travel.
        </p>
        <p>Thank you.</p>
      </ResultSection>
      <Doctor>
        <p>
          <Bold>Name of Doctor:</Bold> {performerName}
          <br />
          <Bold>MCR No.:</Bold> {performerMcr}
        </p>
      </Doctor>
    </StyledMemoSection>
  );
};

export interface SimpleImmunizationObject {
  vaccineName: string;
  vaccineLot: string;
  vaccinationDate: string;
  vaccinationLocation: string;
  vaccinationCountry: string;
  performer: string;
}

export interface VaccinationMemoInfo {
  patientName: string;
  patientNric: string;
  patientNationalityCode: string;
  patientBirthDate: string;
  passportNumber: string;
  immunizations: SimpleImmunizationObject[];
  effectiveDate: string;
}

export const VaccinationMemoSection: React.FC<VaccinationMemoInfo> = ({
  patientName,
  patientNric,
  patientNationalityCode,
  patientBirthDate,
  passportNumber,
  immunizations,
  effectiveDate
}) => {
  return (
    <StyledMemoSection>
      <Title>Vaccination Certificate</Title>
      <PatientDetails>
        <Row>
          <FirstCol>Name of Person:</FirstCol>
          <SecondCol>{patientName}</SecondCol>
        </Row>
        <Row>
          <FirstCol>NRIC/FIN Number:</FirstCol>
          <SecondCol>{patientNric}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Passport/Travel Document Number:</FirstCol>
          <SecondCol>{passportNumber}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Nationality/Citizenship:</FirstCol>
          <SecondCol>{getNationality(patientNationalityCode)}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Date of Birth:</FirstCol>
          <SecondCol>{patientBirthDate}</SecondCol>
        </Row>
      </PatientDetails>
      {immunizations.map((immunization, i) => (
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
            <SecondCol>{countries.getName(immunization.vaccinationCountry, "en")}</SecondCol>
          </Row>
          <Row>
            <FirstCol>Health Worker:</FirstCol>
            <SecondCol>{immunization.performer}</SecondCol>
          </Row>
        </ImmunizationDetails>
      ))}
      <ResultSection>
        <p>
          To whom it may concern:
          <br />
          The abovementioned has been vaccinated with {immunizations[0].vaccineName} effective from {effectiveDate}.
          <br />
          <br />
          Thank you.
        </p>
      </ResultSection>
    </StyledMemoSection>
  );
};
