import React from "react";
import ReactDOM from "react-dom";
import { FramedDocumentRenderer } from "@govtechsg/decentralized-renderer-react-components";
import { registry } from "./templates";

// installed the forked decentralised renderer instead
ReactDOM.render(<FramedDocumentRenderer templateRegistry={registry} />, document.getElementById("root"));
