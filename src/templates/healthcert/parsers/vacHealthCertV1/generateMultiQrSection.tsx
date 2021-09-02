import React from "react";
import QRCode from "qrcode.react";
import { NotarisedHealthCert, Patient, Location, Immunization, ImmunizationRecommendation } from "../../types";
import {
  Bold,
  QrBreakLine,
  QrCodeContainerWithBorder,
  QrRow,
  QrCol,
  ResultSection,
  TravellerInfoSection
} from "../../styled-components";
import { simplifyImmunizationObjectWithLocation } from "./parseInfo";
import { isoToDateOnlyString } from "../../../../util/datetime";

export const generateMultiQrSection = (document: NotarisedHealthCert): JSX.Element => {
  const patient = document.fhirBundle.entry.find(entry => entry.resourceType === "Patient") as Patient;
  const locations = document.fhirBundle.entry.filter(entry => entry.resourceType === "Location") as Location[];
  const immunizations = document.fhirBundle.entry.filter(
    entry => entry.resourceType === "Immunization"
  ) as Immunization[];
  const recommendation = document.fhirBundle.entry.find(
    entry => entry.resourceType === "ImmunizationRecommendation"
  ) as ImmunizationRecommendation;

  const mappedImmunizations = immunizations.map(simplifyImmunizationObjectWithLocation(locations));
  const effectiveDate = isoToDateOnlyString(recommendation?.recommendation[0].dateCriterion[0].value);
  const patientName = typeof patient?.name?.[0] === "object" ? patient?.name[0]?.text : "";
  const url = (document.notarisationMetadata as any)?.url;
  const signedEuHealthCert = (document.notarisationMetadata as any)?.signedEuHealthCert;

  return (
    <>
      <ResultSection>
        <p>
          Based on singapore's requirement, {patientName} has been fully vaccinated against COVID-19.
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
    </>
  );
};
