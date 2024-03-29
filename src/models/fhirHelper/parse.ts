import { R4 } from "@ahryman40k/ts-fhir-types";
import {
  Patient,
  Specimen,
  Observation,
  Practitioner,
  Organization,
  Device,
  PdtBundle,
  PdtGroupedObservation,
  RecBundle,
  RecGroupedObservation,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Fhir } = require("fhir");

const fhir = new Fhir();

/**
 * The mapping definition of each FHIR resource.
 *
 * Note: This function will ONLY validate a resource against FHIR base spec.
 * @param resource Raw FHIR resource
 * @returns Parsed FHIR resource (simplified)
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export const parsers = (resource: R4.IResourceList | undefined) => {
  if (!resource) return undefined; // Skip parsing an undefined resource

  const validator = fhir.validate(resource, { errorOnUnexpected: true });
  if (!validator.valid) {
    throw new Error(
      `Validation against FHIR base spec has failed for ${
        resource.resourceType
      }: ${JSON.stringify(validator.messages)}`
    );
  }

  switch (resource.resourceType) {
    case "Bundle":
      return resource;

    case "Patient":
      return {
        fullName: resource.name?.[0].text,
        gender: resource.gender,
        birthDate: resource.birthDate,
        nationality: resource.extension?.[0].extension?.find(
          (e) => e.url === "code"
        )?.valueCodeableConcept?.coding?.[0],
        passportNumber: resource.identifier?.find((i) => i.id === "PPN")?.value,
        nricFin: resource.identifier?.find((i) => i.id === "NRIC-FIN")?.value,
      } as Patient;

    case "Specimen":
      return {
        swabType: resource.type?.coding?.[0],
        collectionDateTime: resource.collection?.collectedDateTime,
        deviceResourceUuid: resource.subject?.reference, // Only for ART
      } as Specimen;

    case "Observation":
      return {
        specimenResourceUuid: resource.specimen?.reference,
        practitionerResourceUuid: resource.performer?.find(
          (p) => p.type === "Practitioner"
        )?.reference,
        organizationLhpResourceUuid: resource.performer?.find(
          (p) => p.type === "Organization" && p.id === "LHP"
        )?.reference,
        organizationAlResourceUuid: resource.performer?.find(
          (p) => p.type === "Organization" && p.id === "AL"
        )?.reference,
        acsn: resource.identifier?.find((i) => i.id === "ACSN")?.value,
        targetDisease: resource.category?.[0].coding?.[0],
        testType: resource.code?.coding?.[0],
        result: resource.valueCodeableConcept?.coding?.[0],
        effectiveDateTime: resource.effectiveDateTime,
        status: resource.status,
        modality: resource.note?.find((item) => item.id === "MODALITY")?.text,
      } as Observation;

    case "Practitioner":
      return {
        fullName: resource.name?.[0].text,
        mcr: resource.qualification?.[0].identifier?.find((i) => i.id === "MCR")
          ?.value,
        organizationMohResourceUuid:
          resource.qualification?.[0].issuer?.reference,
      } as Practitioner;

    case "Organization":
      return {
        fullName: resource.name,
        type: resource.type?.[0].coding?.[0],
        url: resource.contact?.[0].telecom?.find((t) => t.system === "url")
          ?.value,
        phone: resource.contact?.[0].telecom?.find((t) => t.system === "phone")
          ?.value,
        address: resource.contact?.[0].address,
      } as Organization;

    case "Device":
      return {
        type: resource.type?.coding?.[0],
      } as Device;

    default:
      throw new Error(`Unable to find an appropriate parser for: ${resource}`);
  }
};

/**
 * Parses a Pdt Bundle of resources into a simplified format.
 *
 * @param fhirBundle Raw Pdt FHIR Bundle resource
 * @returns An object containing all the parsed resources in the bundle (simplified)
 */
export const pdtParse = (fhirBundle: R4.IBundle): PdtBundle => {
  //  0. Bundle resource
  parsers(fhirBundle);

  // 1. Patient resource
  const fhirPatient = fhirBundle.entry?.find(
    (entry) => entry.resource?.resourceType === "Patient"
  )?.resource;
  const patient = parsers(fhirPatient) as Patient;

  // 2. Observation resource(s)
  const observations = fhirBundle.entry
    ?.filter((entry) => entry.resource?.resourceType === "Observation")
    ?.map((o) => {
      const observation = parsers(o.resource) as Observation;

      // 2a. Specimen resource
      const fhirSpecimen = fhirBundle.entry?.find(
        (entry) => entry.fullUrl === observation.specimenResourceUuid
      )?.resource;
      const specimen = parsers(fhirSpecimen) as Specimen;

      // 2b. Practitioner resource
      const fhirPractitioner = fhirBundle.entry?.find(
        (entry) => entry.fullUrl === observation.practitionerResourceUuid
      )?.resource;
      const practitioner = parsers(fhirPractitioner) as Practitioner;

      // 2c. Organization (Licensed Healthcare Provider) resource
      const fhirOrganizationLhp = fhirBundle.entry?.find(
        (entry) => entry.fullUrl === observation.organizationLhpResourceUuid
      )?.resource;
      const lhp = parsers(fhirOrganizationLhp) as Organization;

      // 2d. Organization (Accredited Laboratory) resource [Only for PCR]
      const fhirOrganizationAl = fhirBundle.entry?.find(
        (entry) => entry.fullUrl === observation.organizationAlResourceUuid
      )?.resource;
      const al = parsers(fhirOrganizationAl) as Organization;

      // 2e. Device resource [Only for ART]
      const fhirDevice = fhirBundle.entry?.find(
        (entry) => entry.fullUrl === specimen.deviceResourceUuid
      )?.resource;
      const device = parsers(fhirDevice) as Device;

      return {
        observation,
        specimen,
        device,
        practitioner,
        organization: { lhp, al },
      };
    }) as PdtGroupedObservation[];

  // 3. Organization (MOH) resource
  const fhirOrganizationMoh = fhirBundle.entry?.find(
    (entry) =>
      entry.fullUrl ===
      observations?.[0].practitioner.organizationMohResourceUuid
  )?.resource;
  const moh = parsers(fhirOrganizationMoh) as Organization;

  return {
    patient,
    observations,
    organization: { moh },
  };
};

/**
 * Parses a Rec Bundle of resources into a simplified format.
 *
 * @param fhirBundle Raw Rec FHIR Bundle resource
 * @returns An object containing all the parsed resources in the bundle (simplified)
 */
export const recParse = (fhirBundle: R4.IBundle): RecBundle => {
  //  0. Bundle resource
  parsers(fhirBundle);

  // 1. Patient resource
  const fhirPatient = fhirBundle.entry?.find(
    (entry) => entry.resource?.resourceType === "Patient"
  )?.resource;
  const patient = parsers(fhirPatient) as Patient;

  // 2. Observation resource(s)
  const observations = fhirBundle.entry
    ?.filter((entry) => entry.resource?.resourceType === "Observation")
    ?.map((o) => {
      const observation = parsers(o.resource) as Observation;

      // 2a. Specimen resource
      const fhirSpecimen = fhirBundle.entry?.find(
        (entry) => entry.fullUrl === observation.specimenResourceUuid
      )?.resource;
      const specimen = parsers(fhirSpecimen) as Specimen;

      return {
        observation,
        specimen,
      };
    }) as RecGroupedObservation[];

  // 3. Organization (MOH) resource
  const fhirOrganizationMoh = fhirBundle.entry?.filter(
    (entry) => entry.resource?.resourceType === "Organization"
  )[0]?.resource;
  const moh = parsers(fhirOrganizationMoh) as Organization;

  return {
    patient,
    observations,
    organization: { moh },
  };
};
