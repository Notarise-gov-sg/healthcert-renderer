import { pdtHealthCertV2 } from "@govtechsg/oa-schemata";
import { HealthCertTemplate } from "../healthCertTemplate";
import { healthCertSample } from "../fixtures/sampleWithNric";
import { render } from "@testing-library/react";
import React from "react";
import { multiMemoSample } from "../fixtures/multiMemo";
import cloneDeep from "lodash.clonedeep";
import "jest-canvas-mock";

describe("customTemplate", () => {
  it("should render with title provided by the document", () => {
    const { getByTestId } = render(
      <HealthCertTemplate
        document={healthCertSample}
        handleObfuscation={() => void 0}
      />
    );
    const title = getByTestId("memo-title");
    expect(title.textContent).toContain("MEMO ON");
    expect(title.textContent).toContain(
      "REVERSE TRANSCRIPTION POLYMERASE CHAIN REACTION (RRT-PCR) TEST RESULT"
    );
  });
  it("should render with title provided by the multi result document", () => {
    const { getAllByTestId } = render(
      <HealthCertTemplate
        document={multiMemoSample}
        handleObfuscation={() => void 0}
      />
    );

    const titles = getAllByTestId("memo-title");
    expect(titles).toHaveLength(2);
    titles.forEach((title) => expect(title.textContent).toContain("MEMO ON"));
    expect(titles[0].textContent).toContain(
      "REVERSE TRANSCRIPTION POLYMERASE CHAIN REACTION (RRT-PCR) TEST RESULT"
    );
    expect(titles[1].textContent).toContain(
      "SARS-COV-2 (COVID-19) AB [INTERPRETATION] IN SERUM OR PLASMA RESULT"
    );
  });
  it("should render testresult as 'Negative' based on the valueCodeableConcept code", () => {
    const certCopy = cloneDeep(healthCertSample);
    const observationEntry = certCopy.fhirBundle.entry.find(
      (ent) => ent.valueCodeableConcept
    );
    const coding = observationEntry?.valueCodeableConcept
      ?.coding[0] as pdtHealthCertV2.CodingClass;
    coding.code = "260385009";
    coding.display = "Not Detected";

    const { queryByText } = render(
      <HealthCertTemplate
        document={certCopy}
        handleObfuscation={() => void 0}
      />
    );

    expect(queryByText("Negative")).toBeTruthy();
  });
  it("should render testresult as 'Positive' based on the valueCodeableConcept code", () => {
    const certCopy = cloneDeep(healthCertSample);
    const observationEntry = certCopy.fhirBundle.entry.find(
      (ent) => ent.valueCodeableConcept
    );
    const coding = observationEntry?.valueCodeableConcept
      ?.coding[0] as pdtHealthCertV2.CodingClass;
    coding.code = "10828004";
    coding.display = "Not Detected";

    const { queryByText } = render(
      <HealthCertTemplate
        document={certCopy}
        handleObfuscation={() => void 0}
      />
    );

    expect(queryByText("Positive")).toBeTruthy();
  });
});
