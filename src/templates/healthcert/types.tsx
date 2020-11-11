import { v2 } from "@govtechsg/decentralized-renderer-react-components";
import { HealthCert, Notarise } from "../../@types/healthcert";

export type HealthCertDocument = v2.OpenAttestationDocument & HealthCert & Notarise;
