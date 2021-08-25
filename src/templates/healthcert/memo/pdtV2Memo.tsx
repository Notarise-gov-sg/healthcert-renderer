import React from "react";
import { getNationality } from "../../../util/nationality";
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

interface MemoInfo {
  patientName: string;
  patientNricFin?: string;
  patientPassportNumber: string;
  patientNationalityCode: string;
  patientBirthDate: string;
  observationTestTypeDisplay: string;
  observationEffectiveDateTime: string; // Optional?
  observationResultDisplay: string;
  specimenSwabTypeDisplay: string;
  specimenCollectionDateTime: string;
  organizationLhpName: string;
  organizationAlName?: string;
  practitionerName: string;
  practitionerMcr: string;
}

export const MemoSection: React.FC<MemoInfo> = ({
  patientName,
  patientNricFin,
  patientPassportNumber,
  patientNationalityCode,
  patientBirthDate,
  observationTestTypeDisplay,
  observationEffectiveDateTime,
  observationResultDisplay,
  specimenSwabTypeDisplay,
  specimenCollectionDateTime,
  organizationLhpName,
  organizationAlName,
  practitionerName,
  practitionerMcr
}) => {
  return (
    <StyledMemoSection>
      <Title data-testid="memo-title">
        MEMO ON
        <br />
        {observationTestTypeDisplay.toUpperCase()} RESULT
      </Title>
      <PatientDetails>
        <Row>
          <FirstCol>Name of Person:</FirstCol>
          <SecondCol>{patientName}</SecondCol>
        </Row>
        {patientNricFin && (
          <Row>
            <FirstCol>NRIC/FIN Number:</FirstCol>
            <SecondCol>{patientNricFin}</SecondCol>
          </Row>
        )}
        <Row>
          <FirstCol style={{ lineHeight: 1 }}>Passport/Travel Document Number:</FirstCol>
          <SecondCol>{patientPassportNumber}</SecondCol>
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
      <ResultSection>
        <p>To whom it may concern:</p>
        <p>
          The above-mentioned has undergone {observationTestTypeDisplay} for COVID-19 using a {specimenSwabTypeDisplay}{" "}
          on {specimenCollectionDateTime}, by {organizationLhpName} and has tested{" "}
          <TestResult>{observationResultDisplay}</TestResult>.
          {organizationAlName &&
            ` This test result was reported by ${organizationAlName} on ${observationEffectiveDateTime}.`}
        </p>
        <p>
          Travellers should note that they are subject to the country or region&apos;s requirements prior to travel.
        </p>
        <p>Thank you.</p>
      </ResultSection>
      <Doctor>
        <p>
          <Bold>Name of Doctor:</Bold> {practitionerName}
          <br />
          <Bold>MCR No.:</Bold> {practitionerMcr}
        </p>
      </Doctor>
    </StyledMemoSection>
  );
};
