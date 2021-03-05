import QRCode from "qrcode.react";
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { HealthCertDocument } from "./types";
import styled from "@emotion/styled";
import { healthcert } from "@govtechsg/oa-schemata";
import mohBackground from "./moh-logo-transparent.png";
import countries from "i18n-iso-countries";
import englishCountries from "i18n-iso-countries/langs/en.json";
import {
  Coding,
  EntryResourceType,
  Extension,
  Identifier
} from "@govtechsg/oa-schemata/dist/types/__generated__/sg/gov/moh/healthcert/1.0/schema";
countries.registerLocale(englishCountries);

const mediaQueries: Record<string, string> = {
  sm: `@media (min-width: ${640}px)`,
  md: `@media (min-width: ${768}px)`,
  lg: `@media (min-width: ${1024}px)`,
  xl: `@media (min-width: ${1280}px)`,
  "2xl": `@media (min-width: ${1536}px)`,
  print: `@media print`
};

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
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 10px 10px;
  position: relative;
  font-size: 18px;
  line-height: 30px;

  ${mediaQueries["sm"]} {
    padding: 15mm 20mm;
  }
  ${mediaQueries["lg"]} {
    width: 21cm;
  }

  ${mediaQueries["print"]} {
    width: 21cm;
    padding-bottom: 2mm;
  }
`;
const Logo = styled.img`
  width: 80%;
  height: auto;
  ${mediaQueries["md"]} {
    max-width: 300px;
    max-height: 80px;
  }
`;

const Title = styled.h1`
  margin-bottom: 0;
  margin-top: 40px;
  text-align: center;
  font-size: 22px;
`;
const SubTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
  font-size: 22px;
`;
const Patient = styled.section``;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  ${mediaQueries["md"]} {
    flex-basis: 30%;
    justify-content: initial;
  }
`;
const FirstCol = styled.div`
  font-weight: bold;

  ${mediaQueries["md"]} {
    flex-basis: 30%;
  }
`;
const SecondCol = styled.div`
  ${mediaQueries["md"]} {
    flex-basis: 70%;
  }
`;

const ResultSection = styled.section`
  text-align: justify;

  ${mediaQueries["md"]} {
    margin-top: 40px;
    text-align: left;
  }
`;
const Negative = styled.span`
  font-weight: bold;
`;

const Doctor = styled.section`
  margin-bottom: 10px;
  ${mediaQueries["md"]} {
    margin-top: 40px;
  }
`;
const Bold = styled.span`
  font-weight: bold;
`;
const QrCodeContainer = styled.div`
  margin-top: auto;
  text-align: center;
`;

const isNric = (value: any): value is healthcert.Identifier => value?.type?.text === "NRIC";
const DATE_LOCALE = "en-sg"; // let's force the display of dates using sg local

const generateMemoSection = (
  memoSection: JSX.Element[],
  observation: EntryResourceType.Observation,
  specimen: EntryResourceType.Specimen,
  provider: EntryResourceType.Organization,
  lab: EntryResourceType.Organization,
  swabType: Coding,
  patientName: string,
  swabCollectionDate: string,
  performerName: string,
  performerMcr: string,
  observationDate: string,
  patientNricIdentifier: Identifier,
  patientNationality: Extension,
  passportNumber: string,
  patient: EntryResourceType.Patient,
  testType: string
): void => {
  memoSection.push(
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
      <Patient>
        <Row>
          <FirstCol>Name of Person:</FirstCol>
          <SecondCol>{patientName}</SecondCol>
        </Row>
        <Row>
          <FirstCol>NRIC/FIN Number:</FirstCol>
          <SecondCol>{patientNricIdentifier?.value}</SecondCol>
        </Row>
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
      </Patient>
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
  );
};

export const HealthCertTemplate: FunctionComponent<TemplateProps<HealthCertDocument> & {
  className?: string;
}> = ({ document, className = "" }) => {
  const patient = document.fhirBundle.entry.find(entry => entry.resourceType === "Patient");
  const observations = document.fhirBundle.entry.filter(entry => entry.resourceType === "Observation");
  const passportNumber = document.notarisationMetadata?.passportNumber;

  const patientName = typeof patient?.name?.[0] === "object" ? patient?.name?.[0].text : "";
  const patientNricIdentifier = patient?.identifier?.find(isNric);
  const patientNationality = patient?.extension?.find(
    extension => extension.url === "http://hl7.org/fhir/StructureDefinition/patient-nationality"
  );

  const url = document.notarisationMetadata?.url;
  const memoSection = [];

  // backward compatibility for healthcerts with no full url and only one test. auto resolve to first match instead
  if (observations.length === 1) {
    const observation = observations[0];
    const specimen = document.fhirBundle.entry.find(entry => entry.resourceType === "Specimen");
    const provider = document.fhirBundle.entry.find(
      entry => entry.resourceType === "Organization" && entry.type === "Licensed Healthcare Provider"
    );
    const lab = document.fhirBundle.entry.find(
      entry => entry.resourceType === "Organization" && entry.type === "Accredited Laboratory"
    );

    const testType = observation?.code?.coding?.[0]?.code;
    const swabType = typeof specimen?.type === "object" ? specimen?.type.coding?.[0] : undefined;
    const swabCollectionDate = specimen?.collection?.collectedDateTime
      ? new Date(specimen.collection.collectedDateTime).toLocaleDateString(DATE_LOCALE)
      : "";

    const performerName = observation?.performer?.name?.[0]?.text;
    const performerMcr = observation?.qualification?.[0]?.identifier;
    const observationDate = observation?.effectiveDateTime
      ? new Date(observation.effectiveDateTime).toLocaleDateString(DATE_LOCALE)
      : "";

    generateMemoSection(
      memoSection,
      observation,
      specimen,
      provider,
      lab,
      swabType,
      patientName,
      swabCollectionDate,
      performerName,
      performerMcr,
      observationDate,
      patientNricIdentifier,
      patientNationality,
      passportNumber,
      patient,
      testType
    );
  } else {
    observations.forEach(observation => {
      const specimenReference = observation?.specimen?.reference;
      const organisationReferences = observation?.performerReference?.map(organisation => organisation?.reference);

      const specimen = document.fhirBundle.entry.find(
        entry => entry.resourceType === "Specimen" && entry?.fullUrl === specimenReference
      );
      const provider = document.fhirBundle.entry.find(
        entry =>
          entry.resourceType === "Organization" &&
          entry.type === "Licensed Healthcare Provider" &&
          entry?.fullUrl in organisationReferences
      );
      const lab = document.fhirBundle.entry.find(
        entry =>
          entry.resourceType === "Organization" &&
          entry.type === "Accredited Laboratory" &&
          entry?.fullUrl in organisationReferences
      );
      const testType = observation?.code?.coding?.[0]?.code;
      const swabType = typeof specimen?.type === "object" ? specimen?.type.coding?.[0] : undefined;
      const swabCollectionDate = specimen?.collection?.collectedDateTime
        ? new Date(specimen.collection.collectedDateTime).toLocaleDateString(DATE_LOCALE)
        : "";

      const performerName = observation?.performer?.name?.[0]?.text;
      const performerMcr = observation?.qualification?.[0]?.identifier;
      const observationDate = observation?.effectiveDateTime
        ? new Date(observation.effectiveDateTime).toLocaleDateString(DATE_LOCALE)
        : "";

      generateMemoSection(
        memoSection,
        observation,
        specimen,
        provider,
        lab,
        swabType,
        patientName,
        swabCollectionDate,
        performerName,
        performerMcr,
        observationDate,
        patientNricIdentifier,
        patientNationality,
        passportNumber,
        patient,
        testType
      );
    });
  }

  return (
    <Page className={className}>
      <Background />
      <Logo src={document.logo} alt="healthcare provider logo" />
      {memoSection}
      {url && (
        <QrCodeContainer>
          <QRCode value={url} level={"M"} size={200} />
        </QrCodeContainer>
      )}
    </Page>
  );
};
