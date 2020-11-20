import { v2 } from "@govtechsg/decentralized-renderer-react-components";
import { healthcert, notarise } from "@govtechsg/oa-schemata";

export type HealthCertDocument = v2.OpenAttestationDocument & healthcert.HealthCert & notarise.Notarise;
