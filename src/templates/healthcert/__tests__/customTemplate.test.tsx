import { HealthCertTemplate } from "../healthCertTemplate";
import { healthCertSample } from "../fixtures/sampleWithNric";
import { render } from "@testing-library/react";
import React from "react";
import { multiMemoSample } from "../fixtures/multiMemo";

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
});
