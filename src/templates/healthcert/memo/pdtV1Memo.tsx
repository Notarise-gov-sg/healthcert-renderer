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
  specimen?: any;
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

const SingleQrMemoResultSection: React.FC<MemoInfo> = ({
  observation,
  provider,
  lab,
  swabType,
  swabCollectionDate,
  observationDate,
  testResult
}) => {
  return (
    <ResultSection>
      <p>To whom it may concern:</p>
      <p>
        The above-mentioned has undergone {observation?.code?.coding?.[0]?.display} for COVID-19 using a{" "}
        {swabType?.display} on {swabCollectionDate}, by {provider?.name} and has tested{" "}
        <TestResult>{testResult}</TestResult>.
        {lab && ` This test result was reported by ${lab?.name} on ${observationDate}.`}
      </p>
      <p>Travellers should note that they are subject to the country or region&apos;s requirements prior to travel.</p>
      <p>Thank you.</p>
    </ResultSection>
  );
};

const SingleQrMemoDoctorSection: React.FC<MemoInfo> = ({ performerName, performerMcr }) => {
  return (
    <Doctor>
      <p>
        <Bold>Name of Doctor:</Bold> {performerName}
        <br />
        <Bold>MCR No.:</Bold> {performerMcr}
      </p>
    </Doctor>
  );
};

const MultiQrMemoResultSection: React.FC<MemoInfo> = ({
  observation,
  provider,
  lab,
  swabType,
  swabCollectionDate,
  observationDate,
  testResult
}) => {
  return (
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
  );
};

const MultiQrMemoDoctorSection: React.FC<MemoInfo> = ({ performerName, performerMcr }) => {
  return (
    <Row>
      <SecondCol>
        <Bold>Name of Doctor:</Bold> {performerName}
      </SecondCol>
      <SecondCol>
        <Bold>MCR No.:</Bold> {performerMcr}
      </SecondCol>
    </Row>
  );
};

export const MemoSection: React.FC<{
  memoInfo: MemoInfo;
  multiQr?: boolean;
}> = ({ memoInfo, multiQr = false }) => {
  const memoDoctorSection = multiQr ? MultiQrMemoDoctorSection(memoInfo) : SingleQrMemoDoctorSection(memoInfo);
  const memoResultSection = multiQr ? MultiQrMemoResultSection(memoInfo) : SingleQrMemoResultSection(memoInfo);

  return (
    <StyledMemoSection>
      <Title data-testid="memo-title">
        MEMO ON
        <br />
        {memoInfo.observation?.code?.coding?.[0]?.display.toUpperCase()} RESULT
      </Title>
      <PatientDetails>
        <Row>
          <FirstCol>Name of Person:</FirstCol>
          <SecondCol>{memoInfo.patientName}</SecondCol>
        </Row>
        {memoInfo.patientNricIdentifier?.value && (
          <Row>
            <FirstCol>NRIC/FIN Number:</FirstCol>
            <SecondCol>{memoInfo.patientNricIdentifier?.value}</SecondCol>
          </Row>
        )}
        <Row>
          <FirstCol>Passport/Travel Document Number:</FirstCol>
          <SecondCol>{memoInfo.passportNumber}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Nationality/Citizenship:</FirstCol>
          <SecondCol>{getNationality(memoInfo.patientNationalityCode)}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Date of Birth:</FirstCol>
          <SecondCol>{memoInfo.birthdate}</SecondCol>
        </Row>
      </PatientDetails>
      {memoResultSection}
      {memoDoctorSection}
    </StyledMemoSection>
  );
};
