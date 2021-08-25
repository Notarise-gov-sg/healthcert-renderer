import { v2 } from "@govtechsg/decentralized-renderer-react-components";
import { pdtHealthcert as healthcert, notarise } from "@govtechsg/oa-schemata";
import { PDTHealthCertV2 } from "./tempTypes";

export interface Patient {
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

export interface HealthCertDocument extends v2.OpenAttestationDocument {
  name: string;
  validFrom: string;
  fhirVersion: string;
  logo: string;
  fhirBundle: {
    resourceType: healthcert.FhirBundleResourceType.Bundle;
    type: healthcert.FhirBundleType.Collection;
    entry: Array<any>;
  };
}

export interface NotarisedHealthCert extends HealthCertDocument {
  notarisationMetadata: notarise.NotarisationMetadata;
}

export type NotarisedPDTHealthCertUnwrappedV2 = v2.OpenAttestationDocument & PDTHealthCertV2 & notarise.Notarise;
