import React from "react";
import { NotarisedPDTHealthCertUnwrappedV2 } from "../../types";
import { ResultSection } from "../../styled-components";
import fhirHelper from "../../../../models/fhirHelper";
import { isoToLocaleString } from "../../../../util/datetime";

import { R4 } from "@ahryman40k/ts-fhir-types";

export const generateResultSection = (document: NotarisedPDTHealthCertUnwrappedV2): JSX.Element => {
  const { patient, observations } = fhirHelper.parse(document.fhirBundle as R4.IBundle);
  const patientName = patient.fullName || "";
  const observationTestTypeDisplay = observations[0]?.observation?.testType?.display || "";
  const specimenSwabTypeDisplay = observations[0]?.specimen.swabType.display || "";
  const specimenCollectionDateTime = isoToLocaleString(observations[0]?.specimen.collectionDateTime);

  return (
    <ResultSection>
      <p>
        {patientName} has undergone {observationTestTypeDisplay} for COVID-19 using a {specimenSwabTypeDisplay} on{" "}
        {specimenCollectionDateTime}
      </p>
    </ResultSection>
  );
};
