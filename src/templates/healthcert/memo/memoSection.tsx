import React from "react";
import { healthcert } from "@govtechsg/oa-schemata";
import {
  Title,
  SubTitle,
  PatientDetails,
  ImmunizationDetails,
  Row,
  FirstCol,
  SecondCol,
  ResultSection,
  TestResult,
  Doctor,
  Bold
} from "../styled-components";
import nationalities from "i18n-nationality";
import englishNationalities from "i18n-nationality/langs/en.json";
import countries from "i18n-iso-countries";
import englishCountries from "i18n-iso-countries/langs/en.json";
nationalities.registerLocale(englishNationalities);
countries.registerLocale(englishCountries);

type Coding = healthcert.Coding;
type Extension = healthcert.Extension;
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
  patientNationality: Extension | undefined;
  passportNumber: string;
  patient: Patient | undefined;
  testType: string | undefined;
  testResult: string;
}

export const MemoSection: React.FC<MemoInfo> = ({
  observation,
  provider,
  lab,
  swabType,
  swabCollectionDate,
  testType,
  performerName,
  performerMcr,
  observationDate,
  patientName,
  patientNationality,
  passportNumber,
  patient,
  patientNricIdentifier,
  testResult
}) => {
  return (
    <div>
      <Title>MEMO ON COVID-19 {testType === "94531-1" ? "REAL TIME" : ""}</Title>
      <SubTitle>
        {testType === "94531-1"
          ? "RT-PCR SWAB"
          : testType === "94661-6"
          ? "SEROLOGY"
          : observation?.code?.coding?.[0]?.display}{" "}
        TEST RESULT
      </SubTitle>
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
          <SecondCol>{nationalities.getName(patientNationality?.code?.text ?? "", "en")}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Date of Birth:</FirstCol>
          <SecondCol>
            {patient?.birthDate
              ?.split("-")
              .reverse()
              .join("/")}
          </SecondCol>
        </Row>
      </PatientDetails>
      <ResultSection>
        <p>To whom it may concern:</p>
        <p>
          The abovementioned has undergone{" "}
          {testType === "94531-1"
            ? "RT-PCR"
            : testType === "94661-6"
            ? "SEROLOGY"
            : observation?.code?.coding?.[0]?.display}{" "}
          testing for COVID-19 using a {swabType?.display} on {swabCollectionDate}, by {provider?.name} and has tested{" "}
          <TestResult>{testResult}</TestResult>. This test result was reported by {lab?.name} on {observationDate}.
        </p>
        <p>
          {patient?.gender?.toLowerCase() === healthcert.Gender.Female.toLowerCase() ? "She" : "He"} is fit for travel,
          based solely on the negative COVID-19 test.
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
    </div>
  );
};

export interface SimpleImmunizationObject {
  vaccineName: string;
  vaccineLot: string;
  vaccinationDate: string;
  vaccinationLocation: string;
  vaccinationCountry: string;
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

const dateFormatter = new Intl.DateTimeFormat("en-SG", { day: "numeric", month: "short", year: "numeric" });
const formatDate = (iso?: string): string => (iso ? dateFormatter.format(new Date(iso)) : "N//A");

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
    <div>
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
          <FirstCol style={{ lineHeight: 1, flexBasis: "70%" }}>Passport/Travel Document Number:</FirstCol>
          <SecondCol>{passportNumber}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Nationality/Citizenship:</FirstCol>
          <SecondCol>{nationalities.getName(patientNationalityCode, "en")}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Date of Birth:</FirstCol>
          <SecondCol>{formatDate(patientBirthDate)}</SecondCol>
        </Row>
      </PatientDetails>
      {immunizations.map((immunization, i) => (
        <ImmunizationDetails key={i}>
          <p>
            <Row>
              <FirstCol style={{ lineHeight: 1, flexBasis: "50%" }}>Vaccination Name/Brand/Type:</FirstCol>
              <SecondCol style={{ lineHeight: 1 }}>{immunization.vaccineName}</SecondCol>
            </Row>
            <Row>
              <FirstCol style={{ lineHeight: 1, flexBasis: "50%" }}>Clinic/Vaccination Centre:</FirstCol>
              <SecondCol style={{ lineHeight: 1 }}>{immunization.vaccinationLocation}</SecondCol>
            </Row>
            <Row>
              <FirstCol>Date of Vaccination:</FirstCol>
              <SecondCol>{formatDate(immunization.vaccinationDate)}</SecondCol>
            </Row>
            <Row>
              <FirstCol>Batch Number:</FirstCol>
              <SecondCol>{immunization.vaccineLot}</SecondCol>
            </Row>
            <Row>
              <FirstCol>Country of Vaccination:</FirstCol>
              <SecondCol>{countries.getName(immunization.vaccinationCountry, "en")}</SecondCol>
            </Row>
          </p>
        </ImmunizationDetails>
      ))}
      <ResultSection>
        <p>To whom it may concern:</p>
        <p>
          The abovementioned have been vaccinated with {immunizations[0].vaccineName} effective from{" "}
          {formatDate(effectiveDate)}.
        </p>
        <p>Thank you.</p>
      </ResultSection>
    </div>
  );
};
