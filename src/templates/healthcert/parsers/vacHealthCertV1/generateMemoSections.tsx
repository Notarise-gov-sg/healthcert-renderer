import React from "react";
import { pdtHealthCertV1 as pdtHealthcert } from "@govtechsg/oa-schemata";
import {
  NotarisedHealthCert,
  Patient,
  Immunization,
  ImmunizationRecommendation,
  Location,
} from "../../types";
import { MemoSection } from "../../memo/vacV1Memo";
import { simplifyImmunizationObjectWithLocation } from "./parseInfo";
import { isoToDateOnlyString } from "../../../../util/datetime";

const isNric = (value: pdtHealthcert.Identifier): boolean =>
  typeof value.type !== "string" && value.type.text === "NRIC";

export const generateMemoSections = (
  document: NotarisedHealthCert,
  multiQr = false
): JSX.Element[] => {
  const patient = document.fhirBundle.entry.find(
    (entry) => entry.resourceType === "Patient"
  ) as Patient;
  const locations = document.fhirBundle.entry.filter(
    (entry) => entry.resourceType === "Location"
  ) as Location[];
  const immunizations = document.fhirBundle.entry.filter(
    (entry) => entry.resourceType === "Immunization"
  ) as Immunization[];
  const recommendation = document.fhirBundle.entry.find(
    (entry) => entry.resourceType === "ImmunizationRecommendation"
  ) as ImmunizationRecommendation;

  const passportNumber = document.notarisationMetadata?.passportNumber;
  const onlineUrl = document.notarisationMetadata?.url;
  const patientName =
    typeof patient?.name?.[0] === "object" ? patient?.name[0]?.text : "";
  const patientNric = patient?.identifier?.find(isNric)?.value || "";
  const patientNationalityCode =
    patient?.extension?.find(
      (extension) =>
        extension.url ===
        "http://hl7.org/fhir/StructureDefinition/patient-nationality"
    )?.code.text || "";
  const patientBirthDate = isoToDateOnlyString(patient?.birthDate || "");
  const effectiveDate = isoToDateOnlyString(
    recommendation?.recommendation[0].dateCriterion[0].value
  );

  const mappedImmunizations = immunizations.map(
    simplifyImmunizationObjectWithLocation(locations)
  );
  const memoSections: JSX.Element[] = [];

  const vaccinationMemoInfo = {
    immunizations: mappedImmunizations,
    effectiveDate,
    patientName,
    patientNric,
    patientNationalityCode,
    patientBirthDate,
    passportNumber,
    onlineUrl,
  };

  memoSections.push(
    <MemoSection vaccinationMemoInfo={vaccinationMemoInfo} multiQr={multiQr} />
  );

  return memoSections;
};
