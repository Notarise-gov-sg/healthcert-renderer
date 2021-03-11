import React from "react";
import {
    Coding,
    Extension,
    Identifier,
    Patient
  } from "@govtechsg/oa-schemata/dist/types/__generated__/sg/gov/moh/healthcert/1.0/schema";
import { healthcert } from "@govtechsg/oa-schemata";
import { Title, SubTitle, PatientDetails, Row, FirstCol, SecondCol, ResultSection, Negative, Doctor, Bold } from "./styled-components";
import countries from "i18n-iso-countries";
import englishCountries from "i18n-iso-countries/langs/en.json";
countries.registerLocale(englishCountries);

interface Props {
  observation: any,
  specimen: any,
  provider: any,
  lab: any,
  swabType: Coding | undefined,
  patientName: string,
  swabCollectionDate: string,
  performerName: string | undefined,
  performerMcr: string | undefined,
  observationDate: string,
  patientNricIdentifier: Identifier | undefined,
  patientNationality: Extension | undefined,
  passportNumber: string,
  patient: Patient | undefined,
  testType: string | undefined
}

export const MemoSection: React.FC<Props> = ({
    observation, specimen, provider, lab, 
    swabType, swabCollectionDate, testType,
    performerName, performerMcr,     
    observationDate, 
    patientName, patientNationality, passportNumber, patient, patientNricIdentifier    
}) => {
    return <div>
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
        <SecondCol>{countries.getName(patientNationality?.code?.text ?? "", "en")}</SecondCol>
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
        testing for COVID-19 using a {swabType?.display} on {swabCollectionDate} by {provider?.name} and has tested{" "}
        <Negative>negative</Negative>. This test result was reported by {lab?.name} on {observationDate}.
      </p>
      <p>
        {patient?.gender === healthcert.Gender.Female ? "She" : "He"} is fit for travel, based solely on the negative
        COVID-19 test.
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
}