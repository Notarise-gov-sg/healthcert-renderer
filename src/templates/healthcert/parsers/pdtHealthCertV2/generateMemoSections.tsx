import React from "react";
import { R4 } from "@ahryman40k/ts-fhir-types";

import { NotarisedPDTHealthCertUnwrappedV2 } from "../../types";
import fhirHelper from "../../../../models/fhirHelper";
import { MemoSection } from "../../memo/pdtV2Memo";

export const generateMemoSections = (document: NotarisedPDTHealthCertUnwrappedV2): JSX.Element[] => {
  const { patient, observations } = fhirHelper.parse(document.fhirBundle as R4.IBundle);

  return observations.map(({ observation, organization, practitioner, specimen }, i) => (
    <MemoSection
      key={i}
      patientName={patient.fullName}
      patientNricFin={patient.nricFin}
      patientPassportNumber={patient.passportNumber}
      patientNationalityCode={String(patient.nationality.code)}
      patientBirthDate={patient.birthDate}
      observationTestTypeDisplay={observation.testType.display || ""}
      observationEffectiveDateTime={observation.effectiveDateTime}
      observationResultDisplay={observation.result.display || ""}
      specimenSwabTypeDisplay={specimen.swabType.display || ""}
      specimenCollectionDateTime={specimen.collectionDateTime}
      organizationLhpName={organization.lhp.fullName}
      organizationAlName={organization.al?.fullName}
      practitionerName={practitioner.fullName}
      practitionerMcr={practitioner.mcr}
    />
  ));
};
