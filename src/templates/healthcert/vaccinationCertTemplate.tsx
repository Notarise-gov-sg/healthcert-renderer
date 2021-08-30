import QRCode from "qrcode.react";
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { Immunization, Location, NotarisedHealthCert, ImmunizationRecommendation, Patient } from "./types";
import { pdtHealthCertV1 as pdtHealthcert } from "@govtechsg/oa-schemata";
import { VaccinationMemoSection, SimpleImmunizationObject, VaccinationV2MemoSection } from "./memo/vaccinationMemo";
import {
  Page,
  Background,
  Logo,
  Bold,
  QrCodeContainer,
  TravellerInfoSection,
  QrRow,
  QrCol,
  QrBreakLine,
  QrCodeContainerWithBorder,
  ResultSection
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
const isNric = (value: pdtHealthcert.Identifier): boolean =>
  typeof value.type !== "string" && value.type.text === "NRIC";

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
  const patient = document.fhirBundle.entry.find(entry => entry.resourceType === "Patient") as Patient;
  const locations = document.fhirBundle.entry.filter(entry => entry.resourceType === "Location") as Location[];
  const immunizations = document.fhirBundle.entry.filter(
    entry => entry.resourceType === "Immunization"
  ) as Immunization[];
  const recommendation = document.fhirBundle.entry.find(
    entry => entry.resourceType === "ImmunizationRecommendation"
  ) as ImmunizationRecommendation;

  const passportNumber = document.notarisationMetadata?.passportNumber;
  const patientName = typeof patient?.name?.[0] === "object" ? patient?.name[0]?.text : "";
  const patientNric = patient?.identifier?.find(isNric)?.value || "";
  const patientNationalityCode =
    patient?.extension?.find(
      extension => extension.url === "http://hl7.org/fhir/StructureDefinition/patient-nationality"
    )?.code.text || "";
  const patientBirthDate = formatDate(patient?.birthDate || "");
  const effectiveDate = formatDate(recommendation?.recommendation[0].dateCriterion[0].value);

  const url = (document.notarisationMetadata as any)?.url;
  const signedEuHealthCert = (document.notarisationMetadata as any)?.signedEuHealthCert;
  const memoSections: JSX.Element[] = [];

  const mappedImmunizations = immunizations.map(simplifyImmunizationObjectWithLocation(locations));
  if (signedEuHealthCert) {
    memoSections.push(
      <VaccinationV2MemoSection
        immunizations={mappedImmunizations}
        patientName={patientName}
        patientNric={patientNric}
        patientNationalityCode={patientNationalityCode}
        patientBirthDate={patientBirthDate}
        passportNumber={passportNumber}
      />
    );

    return (
      <>
        <Page className={className}>
          <Background />
          <Logo src={document.logo} alt="healthcare provider logo" />
          {memoSections}
        </Page>
        <Page className={className}>
          <ResultSection>
            <p>
              {patientName} has been vaccinated with {mappedImmunizations[0]?.vaccineName} effective from{" "}
              {effectiveDate}.
            </p>
          </ResultSection>
          <TravellerInfoSection>
            Note: Travellers are subject to the country or region&apos;s requirements prior to travel.
            <br />
            The QR code used for verification is based on your <u>destination country</u>.
          </TravellerInfoSection>
          <br />
          <QrRow>
            <QrCol info>
              <Bold>Offline QR Verification</Bold>
              <br />
              This QR Code does not require an internet connection to verify. Currently only the European Union (EU)
              supports this option of verification.
              <br />
              <br />
              This may also be used for public health measures beyond travel within the EU and should be produced to
              authorities when required.
            </QrCol>
            <QrCol>
              <QrCodeContainerWithBorder>
                <QRCode value={signedEuHealthCert} level={"M"} size={200} />
              </QrCodeContainerWithBorder>
            </QrCol>
          </QrRow>
          <QrBreakLine />
          {url && (
            <QrRow>
              <QrCol info rightAlign>
                <Bold>Online QR verification</Bold>
                <br />
                This QR Code requires an internet connection to verify.
              </QrCol>
              <QrCol>
                <QrCodeContainerWithBorder>
                  <QRCode value={url} level={"M"} size={200} />
                </QrCodeContainerWithBorder>
              </QrCol>
            </QrRow>
          )}
        </Page>
      </>
    );
  } else {
    memoSections.push(
      <VaccinationMemoSection
        immunizations={mappedImmunizations}
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
        {url && (
          <QrCodeContainer>
            <QRCode value={url} level={"M"} size={200} />
          </QrCodeContainer>
        )}
      </Page>
    );
  }
};
