import { healthcert } from "@govtechsg/oa-schemata";
import { HealthCertDocument } from "../types";

export const isLegacy = (document: HealthCertDocument): boolean  => {
    const observations = document.fhirBundle.entry.filter(entry => entry.resourceType === "Observation");
    return observations.length === 1
}

const DATE_LOCALE = "en-sg"; // let's force the display of dates using sg locals
export const extractInfoFromLegacyCert = (observation: healthcert.Patient, document: HealthCertDocument) => {;

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
    
    return {
        specimen, provider, lab, testType, swabType, swabCollectionDate, performerName, performerMcr, observationDate
    }
}

export const extractInfoFromCert = (observation: healthcert.Patient, document: HealthCertDocument) => {
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

    return {
        specimen, provider, lab, testType, swabType, swabCollectionDate, performerName, performerMcr, observationDate
    }
}

export const extractInfo = (observation: healthcert.Patient, document: HealthCertDocument) => {
    if (isLegacy(document)) {
        return extractInfoFromLegacyCert(observation, document);
    } else {
        return extractInfoFromCert(observation, document);
    }
}