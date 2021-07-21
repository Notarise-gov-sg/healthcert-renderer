import QRCode from "qrcode.react";
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { NotarisedHealthCert, Immunization, ImmunizationRecommendation, Location } from "./types";
import { healthcert } from "@govtechsg/oa-schemata";
import { VaccinationMemoSection, SimpleImmunizationObject } from "./memo/memoSection";
import {
  Page,
  Background,
  Logo,
  Row,
  Bold,
  QrCodeContainer,
  TravellerInfoSection,
  QrCol,
  QrInfoCol,
  QrBreakLine
} from "./styled-components";

const dateFormatter = new Intl.DateTimeFormat("en-SG", {
  /**
   * Should not respect browser timezone but rather,
   * force "UTC" timezone because dates in vacc certs do not have time
   **/
  timeZone: "UTC",
  month: "long",
  day: "numeric",
  year: "numeric"
});
const formatDate = (iso?: string): string => (iso ? dateFormatter.format(new Date(iso)) : "N/A");
const isNric = (value: healthcert.Identifier): boolean => typeof value.type !== "string" && value.type.text === "NRIC";

const simplifyImmunizationObjectWithLocation: (
  locations: Location[]
) => (i: Immunization) => SimpleImmunizationObject = locations => {
  return (immunization: Immunization): SimpleImmunizationObject => ({
    vaccineName: immunization.vaccineCode.coding[0].display,
    vaccineLot: immunization.lotNumber,
    vaccinationDate: formatDate(immunization.occurrenceDateTime),
    vaccinationLocation: locations.find(l => l.fullUrl === immunization.location.reference)?.name || "",
    vaccinationCountry: locations.find(l => l.fullUrl === immunization.location.reference)?.address.country || "",
    performer: immunization.performer?.[0].actor.display || ""
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
  const patientName = typeof patient?.name?.[0] === "object" ? patient.name[0].text : "";
  const patientNric = patient?.identifier?.find(isNric)?.value || "";
  const patientNationalityCode =
    patient?.extension?.find(
      extension => extension.url === "http://hl7.org/fhir/StructureDefinition/patient-nationality"
    )?.code.text || "";
  const patientBirthDate = formatDate(patient.birthDate || "");
  const effectiveDate = formatDate(recommendation?.recommendation[0].dateCriterion[0].value);

  const url = (document.notarisationMetadata as any)?.url;
  const encryptedEuHealthCert = (document.notarisationMetadata as any)?.encryptedEuHealthCert;
  const memoSections: JSX.Element[] = [];

  memoSections.push(
    <VaccinationMemoSection
      immunizations={immunizations.map(simplifyImmunizationObjectWithLocation(locations))}
      effectiveDate={effectiveDate}
      patientName={patientName}
      patientNric={patientNric}
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
      <TravellerInfoSection>
        Note: Travellers are subject to the country or region&apos;s requirements prior to travel.
        <br />
        The QR code used for verification is based on your <u>destination country</u>.
      </TravellerInfoSection>
      <br />
      {encryptedEuHealthCert && (
        <>
          <Row>
            <QrInfoCol>
              <Bold>Offline QR Verification</Bold>
              <br />
              This QR Code does not require an internet connection to verify. Currently only the European Union (EU)
              supports this option of verification.
              <br />
              <br />
              This may also be used for public health measures beyond travel within the EU and should be produced to
              authorities when required.
            </QrInfoCol>
            <QrCol>
              <QrCodeContainer>
                <QRCode value={encryptedEuHealthCert} level={"M"} size={200} />
              </QrCodeContainer>
            </QrCol>
          </Row>
          <QrBreakLine />
        </>
      )}
      {url && (
        <Row>
          <QrCol>
            <QrCodeContainer>
              <QRCode value={url} level={"M"} size={200} />
            </QrCodeContainer>
          </QrCol>
          <QrInfoCol>
            <br />
            <br />
            <br />
            <Bold>Online QR verification</Bold>
            <br />
            This QR Code requires an internet connection to verify.
          </QrInfoCol>
        </Row>
      )}
    </Page>
  );
};
