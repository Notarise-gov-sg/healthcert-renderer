import React from "react";
import { pdtHealthCertV1 as pdtHealthcert } from "@govtechsg/oa-schemata";
import { NotarisedHealthCert } from "../../types";
import { MultiQrMemoSection, MemoSection } from "../../memo/pdtV1Memo";
import { extractInfo } from "./parseInfo";

const SG_LOCALE = "en-sg";
const isNric = (value: any): value is pdtHealthcert.Identifier => value?.type?.text === "NRIC";

export const generateMemoSections = (document: NotarisedHealthCert, multiQr = false): JSX.Element[] => {
  const patient = document.fhirBundle.entry.find(entry => entry.resourceType === "Patient") as pdtHealthcert.Patient;
  const observations = document.fhirBundle.entry.filter(entry => entry.resourceType === "Observation");

  const passportNumber = document.notarisationMetadata?.passportNumber;
  const patientName = typeof patient?.name?.[0] === "object" ? patient?.name?.[0].text : "";
  const patientNricIdentifier = patient?.identifier?.find(isNric);
  const patientNationalityCode =
    patient?.extension?.find(
      extension => extension.url === "http://hl7.org/fhir/StructureDefinition/patient-nationality"
    )?.code?.text || "";
  let birthdate = patient?.birthDate;
  if (birthdate) {
    birthdate = new Date(birthdate).toLocaleString(SG_LOCALE, {
      /**
       * Should not respect browser timezone but rather,
       * force "UTC" timezone because time (in birthdate) is always going to be ...T00:00:00.000Z
       **/
      timeZone: "UTC",
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  }

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

    if (multiQr) {
      memoSections.push(
        <MultiQrMemoSection
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
          patientNationalityCode={patientNationalityCode}
          passportNumber={passportNumber}
          patient={patient}
          testType={testType}
          testResult={testResult}
          birthdate={birthdate}
        />
      );
    } else {
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
          patientNationalityCode={patientNationalityCode}
          passportNumber={passportNumber}
          patient={patient}
          testType={testType}
          testResult={testResult}
          birthdate={birthdate}
        />
      );
    }
  }

  return memoSections;
};
