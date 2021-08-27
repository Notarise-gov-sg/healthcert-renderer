import React from "react";
import { R4 } from "@ahryman40k/ts-fhir-types";

import { NotarisedPDTHealthCertUnwrappedV2 } from "../../types";
import fhirHelper from "../../../../models/fhirHelper";
import { MemoSection } from "../../memo/pdtV2Memo";
import { isoToDateOnlyString, isoToLocaleString } from "../../../../util/datetime";

export const generateMemoSections = (document: NotarisedPDTHealthCertUnwrappedV2): JSX.Element[] => {
  const { patient, observations } = fhirHelper.parse(document.fhirBundle as R4.IBundle);

  return observations.map(({ observation, organization, practitioner, specimen }, i) => (
    <MemoSection
      key={i}
      patientName={patient.fullName}
      patientNricFin={patient.nricFin}
      patientPassportNumber={patient.passportNumber}
      patientNationalityCode={String(patient.nationality.code)}
      patientBirthDate={isoToDateOnlyString(patient.birthDate)}
      observationTestTypeDisplay={observation.testType.display || ""}
      observationEffectiveDateTime={isoToLocaleString(observation.effectiveDateTime)}
      observationResultDisplay={observation.result.display || ""}
      specimenSwabTypeDisplay={specimen.swabType.display || ""}
      specimenCollectionDateTime={isoToLocaleString(specimen.collectionDateTime)}
      organizationLhpName={organization.lhp.fullName}
      organizationAlName={organization.al?.fullName}
      practitionerName={practitioner.fullName}
      practitionerMcr={practitioner.mcr}
    />
  ));
};
