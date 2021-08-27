import React from "react";
import { pdtHealthCertV1 as healthcert } from "@govtechsg/oa-schemata";
import {
  Title,
  PatientDetails,
  Row,
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
          <FirstCol>Passport/Travel Document Number:</FirstCol>
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
          The above-mentioned has undergone {observation?.code?.coding?.[0]?.display} for COVID-19 using a{" "}
          {swabType?.display} on {swabCollectionDate}, by {provider?.name} and has tested{" "}
          <TestResult>{testResult}</TestResult>.
          {lab && ` This test result was reported by ${lab?.name} on ${observationDate}.`}
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

export const MultiQrMemoSection: React.FC<MemoInfo> = ({
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
          <FirstCol>Passport/Travel Document Number:</FirstCol>
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
          The above-mentioned has undergone {observation?.code?.coding?.[0]?.display} for COVID-19 using a{" "}
          {swabType?.display} on {swabCollectionDate}, by {provider?.name} and has tested{" "}
          <TestResult>{testResult}</TestResult>.
          {lab && ` This test result was reported by ${lab?.name} on ${observationDate}.`}
        </p>
        <p>Thank you.</p>
      </ResultSection>
      <Row>
        <SecondCol>
          <Bold>Name of Doctor:</Bold> {performerName}
        </SecondCol>
        <SecondCol>
          <Bold>MCR No.:</Bold> {performerMcr}
        </SecondCol>
      </Row>
    </StyledMemoSection>
  );
};
