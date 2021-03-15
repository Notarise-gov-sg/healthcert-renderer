import { healthcert } from "@govtechsg/oa-schemata";
import { HealthCertDocument } from "../types";
import { MemoInfo } from "./memoSection";

const isLegacy = (document: HealthCertDocument): boolean => {
  const observations = document.fhirBundle.entry.filter(entry => entry.resourceType === "Observation");
  return observations.length === 1;
};

type ParsedInfo = Pick<
  MemoInfo,
  | "specimen"
  | "provider"
  | "lab"
  | "testType"
  | "swabType"
  | "swabCollectionDate"
  | "swabCollectionTime"
  | "performerName"
  | "performerMcr"
  | "observationDate"
  | "observationTime"
>;

const DATE_LOCALE = "en-sg"; // let's force the display of dates using sg locals
const extractInfoFromLegacyCert = (document: HealthCertDocument): Pick<MemoInfo, "provider" | "lab" | "specimen"> => {
  const specimen = document.fhirBundle.entry.find(entry => entry.resourceType === "Specimen");
  const provider = document.fhirBundle.entry.find(
    entry => entry.resourceType === "Organization" && entry.type === "Licensed Healthcare Provider"
  );
  const lab = document.fhirBundle.entry.find(
    entry => entry.resourceType === "Organization" && entry.type === "Accredited Laboratory"
  );

  return {
    specimen,
    provider,
    lab
  };
};

const extractInfoFromCert = (
  observation: healthcert.Patient,
  document: HealthCertDocument
): Pick<MemoInfo, "provider" | "lab" | "specimen"> => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const specimenReference = observation?.specimen?.reference;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const organisationReferences = observation?.performerReference?.map(organisation => organisation?.reference);

  const specimen = document.fhirBundle.entry.find(
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    entry => entry.resourceType === "Specimen" && entry?.fullUrl === specimenReference
  );
  const provider = document.fhirBundle.entry.find(
    entry =>
      entry.resourceType === "Organization" &&
      entry.type === "Licensed Healthcare Provider" &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      organisationReferences.includes(entry?.fullUrl)
  );
  const lab = document.fhirBundle.entry.find(
    entry =>
      entry.resourceType === "Organization" &&
      entry.type === "Accredited Laboratory" &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      organisationReferences.includes(entry?.fullUrl)
  );

  return {
    specimen,
    provider,
    lab
  };
};

export const extractInfo = (observation: healthcert.Patient, document: HealthCertDocument): ParsedInfo => {
  const { specimen, provider, lab } = isLegacy(document)
    ? extractInfoFromLegacyCert(document)
    : extractInfoFromCert(observation, document);

  const testType = observation?.code?.coding?.[0]?.code;
  const swabType = typeof specimen?.type === "object" ? specimen?.type.coding?.[0] : undefined;
  const swabCollectionDate = specimen?.collection?.collectedDateTime
    ? new Date(specimen.collection.collectedDateTime).toLocaleDateString(DATE_LOCALE)
    : "";

  const swabCollectionTime = specimen?.collection?.collectedDateTime
    ? new Date(specimen.collection.collectedDateTime).toLocaleTimeString(DATE_LOCALE)
    : "";

  const performerName = observation?.performer?.name?.[0]?.text;
  const performerMcr = observation?.qualification?.[0]?.identifier;
  const observationDate = observation?.effectiveDateTime
    ? new Date(observation.effectiveDateTime).toLocaleDateString(DATE_LOCALE)
    : "";
  const observationTime = observation?.effectiveDateTime
    ? new Date(observation.effectiveDateTime).toLocaleTimeString(DATE_LOCALE)
    : "";

  return {
    specimen,
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
  };
};
