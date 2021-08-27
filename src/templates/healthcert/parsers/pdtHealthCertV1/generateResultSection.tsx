import React from "react";
import { pdtHealthCertV1 } from "@govtechsg/oa-schemata";
import { NotarisedHealthCert } from "../../types";
import { extractInfo } from "./parseInfo";
import { ResultSection } from "../../styled-components";

export const generateResultSection = (document: NotarisedHealthCert): JSX.Element => {
  const patient = document.fhirBundle.entry.find(entry => entry.resourceType === "Patient") as pdtHealthCertV1.Patient;
  const observations = document.fhirBundle.entry.filter(entry => entry.resourceType === "Observation");
  const { swabType, swabCollectionDate } = extractInfo(observations[0], document);
  const patientName = typeof patient?.name?.[0] === "object" ? patient?.name?.[0].text : "";
  const observationTestTypeDisplay = observations[0]?.code?.coding?.[0]?.display || "";
  const specimenSwabTypeDisplay = swabType?.display || "";
  const specimenCollectionDateTime = swabCollectionDate;

  return (
    <ResultSection>
      <p>
        {patientName} has undergone {observationTestTypeDisplay} for COVID-19 using a {specimenSwabTypeDisplay} on{" "}
        {specimenCollectionDateTime}
      </p>
    </ResultSection>
  );
};
