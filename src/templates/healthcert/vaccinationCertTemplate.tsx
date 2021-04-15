import QRCode from "qrcode.react";
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { NotarisedHealthCert, Immunization, ImmunizationRecommendation, Location } from "./types";
import { healthcert } from "@govtechsg/oa-schemata";
import { VaccinationMemoSection, SimpleImmunizationObject } from "./memo/memoSection";
import { Page, Background, Logo, QrCodeContainer } from "./styled-components";

const simplifyImmunizationObjectWithLocation: (
  locations: Location[]
) => (i: Immunization) => SimpleImmunizationObject = locations => {
  return (immunization: Immunization): SimpleImmunizationObject => ({
    vaccineName: immunization.vaccineCode.coding[0].display,
    vaccineLot: immunization.lotNumber,
    vaccinationDate: immunization.occurrenceDateTime,
    vaccinationLocation: locations.find(l => l.fullUrl === immunization.location.reference)?.name || "",
    vaccinationCountry: locations.find(l => l.fullUrl === immunization.location.reference)?.address.country || ""
  });
};

export const VaccinationCertTemplate: FunctionComponent<TemplateProps<NotarisedHealthCert> & {
  className?: string;
}> = ({ document, className = "" }) => {
  const patient = document.fhirBundle.entry.find(entry => entry.resourceType === "Patient") as healthcert.Patient;
  const locations = document.fhirBundle.entry.filter(entry => entry.resourceType === "Location") as Location[];
  const immunizations = document.fhirBundle.entry.filter(
    entry => entry.resourceType === "Immunization"
  ) as Immunization[];
  const recommendation = document.fhirBundle.entry.find(
    entry => entry.resourceType === "ImmunizationRecommendation"
  ) as ImmunizationRecommendation;

  const passportNumber = document.notarisationMetadata?.passportNumber;
  const patientName = typeof patient?.name?.[0] === "object" ? patient?.name?.[0].text : "";
  const patientNationalityCode =
    patient?.extension?.find(
      extension => extension.url === "http://hl7.org/fhir/StructureDefinition/patient-nationality"
    )?.code?.text || "";
  const patientBirthDate = patient.birthDate || "";
  const effectiveDate = recommendation?.recommendation?.[0]?.dateCriterion?.[0]?.value;

  const url = (document.notarisationMetadata as any)?.url;
  const memoSections: JSX.Element[] = [];

  memoSections.push(
    <VaccinationMemoSection
      immunizations={immunizations.map(simplifyImmunizationObjectWithLocation(locations))}
      effectiveDate={effectiveDate}
      patientName={patientName}
      patientNationalityCode={patientNationalityCode}
      patientBirthDate={patientBirthDate}
      passportNumber={passportNumber}
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
