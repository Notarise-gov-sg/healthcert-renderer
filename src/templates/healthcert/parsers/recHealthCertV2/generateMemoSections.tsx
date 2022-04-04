import React from "react";
import { R4 } from "@ahryman40k/ts-fhir-types";

import { NotarisedRECHealthCertUnwrappedV2 } from "../../types";
import fhirHelper from "../../../../models/fhirHelper";
import { MemoSection } from "../../memo/recV2Memo";
import { isoToDateOnlyString } from "../../../../util/datetime";

export const generateMemoSections = (
  document: NotarisedRECHealthCertUnwrappedV2
): JSX.Element[] => {
  const { patient, observations } = fhirHelper.recParse(
    document.fhirBundle as R4.IBundle
  );

  return observations.map(({ observation, specimen }, i) => {
    const memoInfo = {
      patientName: patient.fullName,
      patientNricFin: patient.nricFin,
      patientPassportNumber: patient.passportNumber,
      patientNationalityCode: String(patient.nationality.code),
      patientBirthDate: isoToDateOnlyString(patient.birthDate),
      observationTestTypeDisplay: observation.testType.display || "",
      observationEffectiveDateTime: isoToDateOnlyString(
        observation.effectiveDateTime,
        {
          day: "numeric",
          month: "short",
          year: "numeric",
        }
      ),
      observationResultDisplay: observation.result.display || "",
      specimenSwabTypeDisplay: specimen.swabType.display || "",
      specimenCollectionDateTime: isoToDateOnlyString(
        specimen.collectionDateTime,
        {
          day: "numeric",
          month: "short",
          year: "numeric",
        }
      ),
    };

    return <MemoSection key={i} memoInfo={memoInfo} />;
  });
};
