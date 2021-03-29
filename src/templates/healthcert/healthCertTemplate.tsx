// TODO: remove ts-ignore after the healthcert schema is updated to include it
import QRCode from "qrcode.react";
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { HealthCertDocument } from "./types";
import { healthcert } from "@govtechsg/oa-schemata";

import { MemoSection } from "./memo/memoSection";
import { Page, Background, Logo, QrCodeContainer } from "./styled-components";
import { extractInfo } from "./memo/parseInfo";

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

  for (let i = 0; i < observations.length; i++) {
    const observation = observations[i];

    const {
      provider,
      lab,
      testType,
      swabType,
      swabCollectionDate,
      performerName,
      performerMcr,
      observationDate,
      testResult
    } = extractInfo(observation, document);

    memoSections.push(
      <MemoSection
        key={i}
        observation={observation}
        provider={provider}
        lab={lab}
        swabType={swabType}
        patientName={patientName}
        swabCollectionDate={swabCollectionDate}
        performerName={performerName}
        performerMcr={performerMcr}
        observationDate={observationDate}
        patientNricIdentifier={patientNricIdentifier}
        patientNationality={patientNationality}
        passportNumber={passportNumber}
        patient={patient}
        testType={testType}
        testResult={testResult}
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
