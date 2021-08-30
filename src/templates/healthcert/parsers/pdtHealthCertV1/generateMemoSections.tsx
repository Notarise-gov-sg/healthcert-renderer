import React from "react";
import { pdtHealthCertV1 as pdtHealthcert } from "@govtechsg/oa-schemata";
import { NotarisedHealthCert } from "../../types";
import { MemoSection } from "../../memo/pdtV1Memo";
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

    const memoInfo = {
      observation,
      provider,
      lab,
      swabType,
      patientName,
      swabCollectionDate,
      performerName,
      performerMcr,
      observationDate,
      patientNricIdentifier,
      patientNationalityCode,
      passportNumber,
      patient,
      testType,
      testResult,
      birthdate
    };
    memoSections.push(<MemoSection key={i} memoInfo={memoInfo} multiQr={multiQr} />);
  }

  return memoSections;
};
