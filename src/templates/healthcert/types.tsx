import { v2 } from "@govtechsg/open-attestation";
import {
  recHealthCertV2,
  pdtHealthCertV2,
  notarise,
} from "@govtechsg/oa-schemata";

/**
 * @deprecated Please use types generated from `@govtechsg/oa-schemata` (e.g. `PDTHealthCertV2`) or `@govtechsg/decentralized-renderer-react-components` (e.g. `OpenAttestationDocument`).
 *
 * Retained for backwards compatibility.
 */
export interface Identifier {
  type:
    | {
        text: string;
      }
    | string;
  value: string;
}

/**
 * @deprecated Please use types generated from `@govtechsg/oa-schemata` (e.g. `PDTHealthCertV2`) or `@govtechsg/decentralized-renderer-react-components` (e.g. `OpenAttestationDocument`).
 *
 * Retained for backwards compatibility.
 */
export interface Coding {
  code: string;
  display: string;
  system: string;
}

/**
 * @deprecated Please use types generated from `@govtechsg/oa-schemata` (e.g. `PDTHealthCertV2`) or `@govtechsg/decentralized-renderer-react-components` (e.g. `OpenAttestationDocument`).
 *
 * Retained for backwards compatibility.
 */
export interface PdtPatient {
  birthDate?: string;
  extension?: Array<{
    url: string;
    code: {
      text: string;
    };
  }>;
  fullUrl?: string;
  gender?: string;
  identifier?: Identifier[];
  name?: Array<{
    text: string;
  }>;
  resourceType: string;
  collection?: {
    collectedDateTime: string;
  };
  type?: {
    coding?: Array<Coding>;
    "coding:"?: Array<Coding>;
  };
  code?: {
    coding: Array<Coding>;
  };
  effectiveDateTime?: string;
  performer?: {
    name: Array<{
      text: string;
    }>;
  };
  performerReference?: Array<{
    reference: string;
  }>;
  qualification?: Array<{
    identifier: string;
    issuer: string;
  }>;
  specimen?: {
    reference: string;
  };
  status?: string;
  valueCodeableConcept?: {
    coding: Array<Coding>;
  };
  contact?: {
    address: {
      text: string;
      type: string;
      use: string;
    };
    telecom: Array<{
      system: string;
      value: string;
    }>;
  };
  endpoint?: {
    address: string;
  };
}

export interface VacPatient {
  fullUrl?: string;
  resourceType: string;
  extension: Array<{
    url: string;
    code: {
      text: string;
    };
  }>;
  identifier: Array<{
    type: "PPN" | { text: "NRIC" };
    value: string;
  }>;
  name: Array<{
    text: string;
  }>;
  gender: string;
  birthDate: string;
}

/**
 * @deprecated Please use types generated from `@govtechsg/oa-schemata` (e.g. `PDTHealthCertV2`) or `@govtechsg/decentralized-renderer-react-components` (e.g. `OpenAttestationDocument`).
 *
 * Retained for backwards compatibility.
 */
export interface CodeableConcept {
  coding: Array<{ system: string; code: string; display: string }>;
}

export interface Location {
  fullUrl: string;
  resourceType: "Location";
  id: string;
  name: string;
  address: {
    country: string;
  };
}

export interface ImmunizationPerformer {
  actor: {
    display: string;
  };
}

export interface Immunization {
  fullUrl?: string;
  resourceType: "Immunization"; // healthcert.ResourceType.Immunization;
  vaccineCode: CodeableConcept;
  lotNumber: string;
  occurrenceDateTime: string;
  patient: {
    reference: string;
  };
  location: {
    reference: string;
  };
  performer: Array<ImmunizationPerformer>;
}

export interface ImmunizationRecommendation {
  fullUrl?: string;
  resourceType: "ImmunizationRecommendation";
  recommendation: Array<{
    targetDisease: CodeableConcept;
    forecastStatus: CodeableConcept;
    dateCriterion: Array<{
      code: CodeableConcept;
      value: string;
    }>;
  }>;
  patient: {
    reference: string;
  };
}

/**
 * @deprecated Please use types generated from `@govtechsg/oa-schemata` (e.g. `PDTHealthCertV2`) or `@govtechsg/decentralized-renderer-react-components` (e.g. `OpenAttestationDocument`).
 *
 * Retained for backwards compatibility.
 */
export interface HealthCertDocument extends v2.OpenAttestationDocument {
  name: string;
  validFrom: string;
  fhirVersion: string;
  logo: string;
  fhirBundle: {
    resourceType: "Bundle";
    type: "collection";
    entry: Array<any>;
  };
}

/**
 * @deprecated Please use types generated from `@govtechsg/oa-schemata` (e.g. `PDTHealthCertV2`) or `@govtechsg/decentralized-renderer-react-components` (e.g. `OpenAttestationDocument`).
 *
 * Retained for backwards compatibility.
 */
export interface NotarisedHealthCert extends HealthCertDocument {
  notarisationMetadata: notarise.NotarisationMetadata;
}

export type NotarisedPDTHealthCertUnwrappedV2 = v2.OpenAttestationDocument &
  pdtHealthCertV2.PDTHealthCertV2 &
  notarise.Notarise;

export type NotarisedRECHealthCertUnwrappedV2 = v2.OpenAttestationDocument &
  recHealthCertV2.RECHealthCertV2 &
  notarise.Notarise;

// TODO: Add NotarisedVaccinationHealthCertUnwrappedV2 type and deprecate the above manually defined types
// export type NotarisedVaccinationHealthCertUnwrappedV2 = v2.OpenAttestationDocument & VaccinationHealthCertV2 & notarise.Notarise;
