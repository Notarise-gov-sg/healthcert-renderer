import React from "react";
import { R4 } from "@ahryman40k/ts-fhir-types";
import { v2 } from "@govtechsg/decentralized-renderer-react-components";
import { notarise } from "@govtechsg/oa-schemata";
import { PDTHealthCertV2 } from "./types";
import fhirHelper from "../../../../models/fhirHelper";
import { MemoSection } from "../../memo/memoSection";

type NotarisedUnwrappedPDTHealthCert = v2.OpenAttestationDocument & PDTHealthCertV2 & notarise.NotarisationMetadata;

export const generateMemoSections = (document: NotarisedUnwrappedPDTHealthCert) => {
  const { patient, observations, organization } = fhirHelper.parse(document.fhirBundle as R4.IBundle);

  return observations.map(({ observation, organization, practitioner, specimen, device }, i) => (
    <MemoSection
      key={i}
      patientName={patient.fullName}
      patientNricIdentifier={patientNricIdentifier}
      patientNationalityCode={patientNationalityCode}
      passportNumber={passportNumber}
      patient={patient}
      observation={observation}
      provider={organization.lhp}
      lab={organization.al}
      swabType={specimen.swabType}
      swabCollectionDate={specimen.collectionDateTime}
      performerName={practitioner.fullName}
      performerMcr={practitioner.mcr}
      observationDate={observation.effectiveDateTime}
      testType={testType}
      testResult={testResult}
      birthdate={birthdate}
    />
  ));
};
