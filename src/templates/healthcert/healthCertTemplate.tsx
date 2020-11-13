import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { HealthCertDocument } from "./types";
import styled from "@emotion/styled";
import { Gender, Identifier } from "../../@types/healthcert";
import mohBackground from "./moh-logo-transparent.png";

const Background = styled.div`
  &::after {
    content: "";
    background-image: url(${mohBackground});
    background-size: 90%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.05;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
const Page = styled.div`
  margin: auto;
  width: 21cm;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 10mm 15mm 10mm 15mm;
  position: relative;
  @media print {
    padding: 30mm 45mm 30mm 45mm;
    height: 29.7cm;
  }
`;
const Logo = styled.img`
  max-width: 300px;
  max-height: 80x;
`;

const Title = styled.h2`
  text-align: center;
`;
const Row = styled.div`
  display: flex;
`;
const FirstCol = styled.div`
  flex-basis: 30%;
`;
const SecondCol = styled.div`
  flex-basis: 70%;
`;
const Negative = styled.span`
  font-weight: bold;
`;

const isNric = (value: any): value is Identifier => value?.type?.text === "NRIC";
const DATE_LOCALE = "en-sg"; // let's force the display of dates using sg local

export const HealthCertTemplate: FunctionComponent<TemplateProps<HealthCertDocument> & {
  className?: string;
}> = ({ document, className = "" }) => {
  const patient = document.fhirBundle.entry.find(entry => entry.resourceType === "Patient");
  const observation = document.fhirBundle.entry.find(entry => entry.resourceType === "Observation");
  const specimen = document.fhirBundle.entry.find(entry => entry.resourceType === "Specimen");
  const provider = document.fhirBundle.entry.find(
    entry => entry.resourceType === "Organization" && entry.type === "Licensed Healthcare Provider"
  );
  const lab = document.fhirBundle.entry.find(
    entry => entry.resourceType === "Organization" && entry.type === "Accredited Laboratory"
  );

  const patientName = typeof patient?.name?.[0] === "object" ? patient?.name?.[0].text : "";
  const patientNricIdentifier = patient?.identifier?.find(isNric);
  const patientNationality = patient?.extension?.find(
    extension => extension.url === "http://hl7.org/fhir/StructureDefinition/patient-nationality"
  );

  const swabType =
    typeof specimen?.type === "object" ? specimen?.type.coding?.find(({ code }) => code === "258500001") : undefined;
  const swabCollectionDate = specimen?.collection?.collectedDateTime
    ? new Date(specimen.collection.collectedDateTime).toLocaleDateString(DATE_LOCALE)
    : "";

  const performerName = observation?.performer?.name?.[0]?.text;
  const performerMcr = observation?.qualification?.[0]?.identifier;
  const observationDate = observation?.effectiveDateTime
    ? new Date(observation.effectiveDateTime).toLocaleDateString(DATE_LOCALE)
    : "";

  return (
    <Page className={className}>
      <Background />
      <Logo src={document.logo} alt="healthcare provider logo" />
      <Title>MEMO ON COVID-19 REAL TIME</Title>
      <Title>RT-PCR SWAB TEST RESULT</Title>
      <section>
        <Row>
          <FirstCol>Name of Person:</FirstCol>
          <SecondCol>{patientName}</SecondCol>
        </Row>
        <Row>
          <FirstCol>NRIC/FIN Number:</FirstCol>
          <SecondCol>{patientNricIdentifier?.value}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Passport Number:</FirstCol>
          <SecondCol>{document.notarisationMetadata?.passportNumber}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Nationality:</FirstCol>
          <SecondCol>{patientNationality?.code?.text}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Date of Birth:</FirstCol>
          <SecondCol>{patient?.birthDate}</SecondCol>
        </Row>
      </section>
      <section>
        <p>To whom it may concern:</p>
        <p>
          The abovementioned has undergone RT-PCR testing for COVID-19 using a {swabType?.display} on{" "}
          {swabCollectionDate} by {provider?.name} and has tested <Negative>negative</Negative>. This test result was
          reported by {lab?.name} on {observationDate}.
        </p>
        <p>
          {patient?.gender === Gender.Female ? "She" : "He"} is fit for travel, based solely on the negative COVID-19
          test.
        </p>
        <p>Thank you.</p>
        <p>Name of Doctor: {performerName}</p>
        <p>MCR No.: {performerMcr}</p>
      </section>
    </Page>
  );
};
