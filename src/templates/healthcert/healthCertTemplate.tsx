import QRCode from "qrcode.react";
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { HealthCertDocument } from "./types";
import styled from "@emotion/styled";
import { healthcert } from "@govtechsg/oa-schemata";
import mohBackground from "./moh-logo-transparent.png";
import countries from "i18n-iso-countries";
import englishCountries from "i18n-iso-countries/langs/en.json";
countries.registerLocale(englishCountries);

const mediaQueries: Record<string, string> = {
  sm: `@media (min-width: ${640}px)`,
  md: `@media (min-width: ${768}px)`,
  lg: `@media (min-width: ${1024}px)`,
  xl: `@media (min-width: ${1280}px)`,
  "2xl": `@media (min-width: ${1536}px)`
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
    height: 29.7cm;
  }
`;
const Logo = styled.img`
  width: 80%;
  height: auto;
  ${mediaQueries["md"]} {
    max-width: 300px;
    max-height: 80x;
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

  const swabType = typeof specimen?.type === "object" ? specimen?.type.coding?.[0] : undefined;
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
      <SubTitle>RT-PCR SWAB TEST RESULT</SubTitle>
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
          <FirstCol>Passport Number:</FirstCol>
          <SecondCol>{document.notarisationMetadata?.passportNumber}</SecondCol>
        </Row>
        <Row>
          <FirstCol>Nationality:</FirstCol>
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
          The abovementioned has undergone RT-PCR testing for COVID-19 using a {swabType?.display} on{" "}
          {swabCollectionDate} by {provider?.name} and has tested <Negative>negative</Negative>. This test result was
          reported by {lab?.name} on {observationDate}.
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
      <QrCodeContainer>
        <QRCode value={document.notarisationMetadata?.url} level={"H"} size={200} />
      </QrCodeContainer>
    </Page>
  );
};
