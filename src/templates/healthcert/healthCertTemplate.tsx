// TODO: remove ts-ignore after the healthcert schema is updated to include it
import QRCode from "qrcode.react";
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { HealthCertDocument } from "./types";
import { healthcert } from "@govtechsg/oa-schemata";
import countries from "i18n-iso-countries";

import englishCountries from "i18n-iso-countries/langs/en.json";
import { MemoSection } from "./memo/memoSection";
import { Page, Background, Logo, QrCodeContainer } from "./styled-components";
import { extractInfo } from "./memo/parseInfo";
countries.registerLocale(englishCountries);

const isNric = (value: any): value is healthcert.Identifier => value?.type?.text === "NRIC";

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

  const url = (document.notarisationMetadata as any)?.url;
  const memoSections: JSX.Element[] = [];

  for (const observation of observations) {
    const {
      provider,
      lab,
      testType,
      swabType,
      swabCollectionDate,
      swabCollectionTime,
      performerName,
      performerMcr,
      observationDate,
      observationTime
    } = extractInfo(observation, document);
    memoSections.push(
      <MemoSection
        observation={observation}
        provider={provider}
        lab={lab}
        swabType={swabType}
        patientName={patientName}
        swabCollectionDate={swabCollectionDate}
        swabCollectionTime={swabCollectionTime}
        performerName={performerName}
        performerMcr={performerMcr}
        observationDate={observationDate}
        observationTime={observationTime}
        patientNricIdentifier={patientNricIdentifier}
        patientNationality={patientNationality}
        passportNumber={passportNumber}
        patient={patient}
        testType={testType}
      />
    );
  }

  return (
    <Page className={className}>
      <Background />
      <Logo src={document.logo} alt="healthcare provider logo" />
      {memoSections}
      {url && (
        <QrCodeContainer>
          <QRCode value={url} level={"M"} size={200} />
        </QrCodeContainer>
      )}
    </Page>
  );
};
