import { HealthCertTemplate } from "./healthCertTemplate";
import { VaccinationCertTemplate } from "./vaccinationCertTemplate";
import { RecoveryCertTemplate } from "./recoveryCertTemplate";

export const templates = [
  {
    id: "main",
    label: "Memo",
    template: HealthCertTemplate,
  },
];

export const recoveryCertTemplates = [
  {
    id: "main",
    label: "Memo",
    template: RecoveryCertTemplate,
  },
];

export const vaccinationCertTemplates = [
  {
    id: "main",
    label: "Memo",
    template: VaccinationCertTemplate,
  },
];
