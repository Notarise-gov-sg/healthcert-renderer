import React from "react";
import { R4 } from "@ahryman40k/ts-fhir-types";

import { NotarisedPDTHealthCertUnwrappedV2 } from "../../types";
import fhirHelper from "../../../../models/fhirHelper";
import { MemoSection } from "../../memo/pdtV2Memo";
import {
  isoToDateOnlyString,
  isoToLocaleString,
} from "../../../../util/datetime";

export const generateMemoSections = (
  document: NotarisedPDTHealthCertUnwrappedV2,
  multiQr = false
): JSX.Element[] => {
  const { patient, observations } = fhirHelper.pdtParse(
    document.fhirBundle as R4.IBundle
  );

  return observations.map(
    ({ observation, organization, practitioner, specimen }, i) => {
      const memoInfo = {
        patientName: patient.fullName,
        patientNricFin: patient.nricFin,
        patientPassportNumber: patient.passportNumber,
        patientNationalityCode: String(patient.nationality.code),
        patientBirthDate: isoToDateOnlyString(patient.birthDate),
        observationTestTypeDisplay: observation.testType.display || "",
        observationEffectiveDateTime: isoToLocaleString(
          observation.effectiveDateTime
        ),
        observationResultDisplay: observation.result.display || "",
        modality: observation.modality?.toLowerCase() || "",
        specimenSwabTypeDisplay: specimen.swabType.display || "",
        specimenCollectionDateTime: isoToLocaleString(
          specimen.collectionDateTime
        ),
        organizationLhpName: organization.lhp.fullName,
        organizationAlName: organization.al?.fullName,
        practitionerName: practitioner.fullName,
        practitionerMcr: practitioner.mcr,
      };

      return <MemoSection key={i} memoInfo={memoInfo} multiQr={multiQr} />;
    }
  );
};
