import QRCode from "qrcode.react";
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { NotarisedHealthCert, Immunization, ImmunizationRecommendation } from "./types";
import { healthcert } from "@govtechsg/oa-schemata";
import { VaccinationMemoSection } from "./memo/memoSection";
import { Page, Background, Logo, QrCodeContainer } from "./styled-components";

const isNric = (value: any): value is healthcert.Identifier => value?.type?.text === "NRIC";

export const VaccinationCertTemplate: FunctionComponent<TemplateProps<NotarisedHealthCert> & {
  className?: string;
}> = ({ document, className = "" }) => {
  const patient = document.fhirBundle.entry.find(entry => entry.resourceType === "Patient") as healthcert.Patient;
  const immunizations = document.fhirBundle.entry.filter(
    entry => entry.resourceType === "Immunization"
  ) as Immunization[];
  const recommendation = document.fhirBundle.entry.find(
    entry => entry.resourceType === "ImmunizationRecommendation"
  ) as ImmunizationRecommendation;

  const passportNumber = document.notarisationMetadata?.passportNumber;
  const patientName = typeof patient?.name?.[0] === "object" ? patient?.name?.[0].text : "";
  const patientNricIdentifier = patient?.identifier?.find(isNric);
  const patientNationality = patient?.extension?.find(
    extension => extension.url === "http://hl7.org/fhir/StructureDefinition/patient-nationality"
  );
  const effectiveDate = recommendation?.recommendation?.[0]?.dateCriterion?.[0]?.value;

  const url = (document.notarisationMetadata as any)?.url;
  const memoSections: JSX.Element[] = [];

  memoSections.push(
    <VaccinationMemoSection
      immunizations={immunizations}
      effectiveDate={effectiveDate}
      patientName={patientName}
      patientNricIdentifier={patientNricIdentifier}
      patientNationality={patientNationality}
      passportNumber={passportNumber}
      patient={patient}
    />
  );

  return (
    <Page className={className}>
      <Background />
      <Logo src={document.logo} alt="healthcare provider logo" />
      {memoSections}
      {url && (
        <QrCodeContainer>
          <QRCode value={url} level={"M"} size={200} />
        </QrCodeContainer>
      )}
    </Page>
  );
};
