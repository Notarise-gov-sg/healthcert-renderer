import ReactDOM from "react-dom";
import { multiMemoSample } from "../src/templates/healthcert/fixtures/multiMemo";
import { healthCertSample } from "../src/templates/healthcert/fixtures/sampleWithNric";
import { vaccinationCertSample } from "../src/templates/healthcert/fixtures/vaccSampleMultiDose";
import React from "react";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Multi Memo document", document: multiMemoSample },
      { name: "Single Memo document", document: healthCertSample },
      { name: "Vaccination document", document: vaccinationCertSample }
    ]}
  />,
  document.getElementById("root")
);
