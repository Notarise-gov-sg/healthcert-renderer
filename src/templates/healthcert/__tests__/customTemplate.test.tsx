import { HealthCertTemplate } from "../healthCertTemplate";
import { healthCertSample } from "../fixtures/sample";
import { render } from "@testing-library/react";
import React from "react";

describe("customTemplate", () => {
  it("should render with title provided by the document", () => {
    const { queryByText } = render(<HealthCertTemplate document={healthCertSample} handleObfuscation={() => void 0} />);
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("MEMO ON COVID-19 REAL TIME")).toBeTruthy();
  });
});
