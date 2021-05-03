import React from "react";
import ReactDOM from "react-dom";
import { FramedDocumentRenderer } from "@govtechsg/decentralized-renderer-react-components";
import { registry } from "./templates";
import { Helmet } from "react-helmet";

const Root: React.FC = () => (
  <>
    <Helmet>
      {/* To allow verify.gov.sg to access the dom rendered through iframe */}
      <meta httpEquiv="Access-Control-Allow-Origin" content="https://www.verify.gov.sg/" />
    </Helmet>
    <FramedDocumentRenderer templateRegistry={registry} />
  </>
);

ReactDOM.render(<Root />, document.getElementById("root"));
