import React from "react";
import { getNationalityCitizenship } from "../../../util/nationalityCitizenship";
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
  StyledMemoSection,
} from "../styled-components";

interface MemoInfo {
  patientName: string;
  patientNricFin?: string;
  patientPassportNumber: string;
  patientNationalityCode: string;
  patientBirthDate: string;
  observationTestTypeDisplay: string;
  observationEffectiveDateTime: string; // Optional?
  observationResultDisplay: string;
  modality?: string;
  specimenSwabTypeDisplay: string;
  specimenCollectionDateTime: string;
  organizationLhpName: string;
  organizationAlName?: string;
  practitionerName: string;
  practitionerMcr: string;
}

const MemoResultSection: React.FC<{
  memoInfo: MemoInfo;
  multiQr?: boolean;
}> = ({ memoInfo, multiQr = false }) => {
  return (
    <ResultSection>
      <p>To whom it may concern:</p>
      <p>
        The above-mentioned has undergone {memoInfo.observationTestTypeDisplay}{" "}
        for COVID-19 using a {memoInfo.specimenSwabTypeDisplay} on{" "}
        {memoInfo.specimenCollectionDateTime}, {memoInfo.modality ?? ""} by{" "}
        {memoInfo.organizationLhpName} and has tested{" "}
        <TestResult>{memoInfo.observationResultDisplay}</TestResult>.
        {memoInfo.organizationAlName &&
          ` This test result was reported by ${memoInfo.organizationAlName} on ${memoInfo.observationEffectiveDateTime}.`}
      </p>
      {!multiQr && (
        <p>
          Travellers should note that they are subject to the country or
          region&apos;s requirements prior to travel.
        </p>
      )}
      <p>Thank you.</p>
    </ResultSection>
  );
};

const SingleQrMemoDoctorSection: React.FC<MemoInfo> = ({
  practitionerName,
  practitionerMcr,
}) => {
  return (
    <Doctor>
      <p>
        <Bold>Name of Doctor:</Bold> {practitionerName}
        <br />
        <Bold>MCR No.:</Bold> {practitionerMcr}
      </p>
    </Doctor>
  );
};

const MultiQrMemoDoctorSection: React.FC<MemoInfo> = ({
  practitionerName,
  practitionerMcr,
}) => {
  return (
    <Row>
      <SecondCol>
        <Bold>Name of Doctor:</Bold> {practitionerName}
      </SecondCol>
      <SecondCol>
        <Bold>MCR No.:</Bold> {practitionerMcr}
      </SecondCol>
    </Row>
  );
};

export const MemoSection: React.FC<{
  memoInfo: MemoInfo;
  multiQr?: boolean;
}> = ({ memoInfo, multiQr = false }) => {
  const memoDoctorSection = multiQr
    ? MultiQrMemoDoctorSection(memoInfo)
    : SingleQrMemoDoctorSection(memoInfo);
  const memoResultSection = MemoResultSection({ memoInfo, multiQr });
  return (
    <StyledMemoSection>
      <Title data-testid="memo-title">
        MEMO ON
        <br />
        {memoInfo.observationTestTypeDisplay.toUpperCase()} RESULT
      </Title>
      <PatientDetails>
        <Row>
          <FirstCol>Name of Person:</FirstCol>
          <SecondCol>{memoInfo.patientName}</SecondCol>
        </Row>
        {memoInfo.patientNricFin && (
          <Row>
            <FirstCol>NRIC/FIN Number:</FirstCol>
            <SecondCol>{memoInfo.patientNricFin}</SecondCol>
          </Row>
        )}
        <Row>
          <FirstCol>Passport/Travel Document Number:</FirstCol>
          <SecondCol>{memoInfo.patientPassportNumber}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Nationality/Citizenship:</FirstCol>
          <SecondCol>
            {getNationalityCitizenship(memoInfo.patientNationalityCode)}
          </SecondCol>
        </Row>
        <Row>
          <FirstCol>Date of Birth:</FirstCol>
          <SecondCol>{memoInfo.patientBirthDate}</SecondCol>
        </Row>
      </PatientDetails>
      {memoResultSection}
      {memoDoctorSection}
    </StyledMemoSection>
  );
};
