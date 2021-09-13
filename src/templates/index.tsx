import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates as healthCertTemplates } from "./healthcert";
import { vaccinationCertTemplates } from "./healthcert";

export const registry: TemplateRegistry<any> = {
  HEALTH_CERT: healthCertTemplates,
  VACCINATION_CERT: vaccinationCertTemplates,
};
