import { HealthCertTemplate } from "../healthCertTemplate";
import { healthCertSample } from "../fixtures/sampleWithNric";
import { render } from "@testing-library/react";
import React from "react";
import { multiMemoSample } from "../fixtures/multiMemo";
import cloneDeep from "lodash.clonedeep";
import { Coding } from "@govtechsg/oa-schemata/dist/types/__generated__/sg/gov/moh/healthcert/1.0/schema";

describe("customTemplate", () => {
  it("should render with title provided by the document", () => {
    const { queryByText } = render(<HealthCertTemplate document={healthCertSample} handleObfuscation={() => void 0} />);
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("MEMO ON COVID-19 REAL TIME")).toBeTruthy();
  });
  it("should render with title provided by the multi result document", () => {
    const { queryByText } = render(<HealthCertTemplate document={multiMemoSample} handleObfuscation={() => void 0} />);
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("MEMO ON COVID-19")).toBeTruthy();
  });
  it("should render testresult as 'Negative' based on the valueCodeableConcept code", () => {
    const certCopy = cloneDeep(healthCertSample);
    const observationEntry = certCopy.fhirBundle.entry.find(ent => ent.valueCodeableConcept);
    const coding = observationEntry?.valueCodeableConcept?.coding[0] as Coding;
    coding.code = "260385009";
    coding.display = "Not Detected";

    const { queryByText } = render(<HealthCertTemplate document={certCopy} handleObfuscation={() => void 0} />);
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("Negative")).toBeTruthy();
  });
  it("should render testresult as 'Positive' based on the valueCodeableConcept code", () => {
    const certCopy = cloneDeep(healthCertSample);
    const observationEntry = certCopy.fhirBundle.entry.find(ent => ent.valueCodeableConcept);
    const coding = observationEntry?.valueCodeableConcept?.coding[0] as Coding;
    coding.code = "10828004";
    coding.display = "Not Detected";

    const { queryByText } = render(<HealthCertTemplate document={certCopy} handleObfuscation={() => void 0} />);
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("Positive")).toBeTruthy();
  });
});
