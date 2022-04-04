import React from "react";
import { getNationalityCitizenship } from "../../../util/nationalityCitizenship";
import {
  Title,
  PatientDetails,
  Row,
  FirstCol,
  SecondCol,
  ResultSection,
  StyledMemoSection,
  TitleInfo,
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
}

const MemoResultSection: React.FC<{
  memoInfo: MemoInfo;
}> = ({ memoInfo }) => {
  return (
    <ResultSection>
      <p>To whom it may concern:</p>
      <p>
        {memoInfo.patientName} has been diagnosed with SARS-CoV-2 (COVID-19) on{" "}
        {memoInfo.observationEffectiveDateTime} using{" "}
        {memoInfo.observationTestTypeDisplay.replace(
          "SARS-CoV-2 (COVID-19) ",
          ""
        )}{" "}
        test.
      </p>
      <p>Thank you.</p>
    </ResultSection>
  );
};

export const MemoSection: React.FC<{
  memoInfo: MemoInfo;
}> = ({ memoInfo }) => {
  const memoResultSection = MemoResultSection({ memoInfo });
  return (
    <StyledMemoSection>
      <Title data-testid="memo-title">Recovery Certificate</Title>
      <TitleInfo>
        A recovery certificate is provided to individuals who had tested
        positive for COVID-19 in Singapore.
      </TitleInfo>
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
    </StyledMemoSection>
  );
};
