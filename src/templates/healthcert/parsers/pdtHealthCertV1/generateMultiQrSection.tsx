import React from "react";
import QRCode from "qrcode.react";
import { PdtPatient, NotarisedHealthCert } from "../../types";
import { extractInfo } from "./parseInfo";
import {
  Bold,
  QrBreakLine,
  QrCodeContainerWithBorder,
  QrRow,
  QrCol,
  ResultSection,
  TravellerInfoSection,
} from "../../styled-components";
import { isoToDateOnlyString } from "../../../../util/datetime";
import EULogo from "../../eu-dcc-tag-big.png";

export const generateMultiQrSection = (
  document: NotarisedHealthCert
): JSX.Element => {
  const patient = document.fhirBundle.entry.find(
    (entry) => entry.resourceType === "Patient"
  ) as PdtPatient;
  const observations = document.fhirBundle.entry.filter(
    (entry) => entry.resourceType === "Observation"
  );
  const { swabType, swabCollectionDate } = extractInfo(
    observations[0],
    document
  );
  const patientName =
    typeof patient?.name?.[0] === "object" ? patient?.name?.[0].text : "";
  const observationTestTypeDisplay =
    observations[0]?.code?.coding?.[0]?.display || "";
  const specimenSwabTypeDisplay = swabType?.display || "";
  const specimenCollectionDateTime = swabCollectionDate;
  const url = (document.notarisationMetadata as any)?.url;
  const signedEuHealthCert =
    document.notarisationMetadata.signedEuHealthCerts?.[0];

  let expiryDateTime = "";
  if (signedEuHealthCert?.expiryDateTime) {
    expiryDateTime = isoToDateOnlyString(signedEuHealthCert.expiryDateTime, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  const logoWidth = 130;
  const logoHeight = logoWidth / 5;

  return (
    <>
      <ResultSection>
        {patientName} has undergone {observationTestTypeDisplay} for COVID-19
        using a {specimenSwabTypeDisplay} on {specimenCollectionDateTime}
      </ResultSection>
      <TravellerInfoSection>
        Note: Travellers are subject to the country or region&apos;s
        requirements prior to travel.
        <br />
        The QR code used for verification is based on your{" "}
        <u>destination country</u>.
        {expiryDateTime && (
          <>
            <br />
            <br />
            The QR codes in this PDT HealthCert is valid until{" "}
            <b>{expiryDateTime}</b>. You may visit{" "}
            <a
              className="hyperlink"
              target="_blank"
              href="https://notarise.gov.sg/"
              rel="noreferrer"
            >
              Notαrise.gov.sg
            </a>{" "}
            at any time to obtain a new PDT HealthCert to extend the cert expiry
            date. Please note that expiry of your PDT HealthCert does not
            constitute the expiry of your PDT records or PDT status in
            Singapore.
          </>
        )}
      </TravellerInfoSection>
      <br />
      {url && (
        <>
          <QrRow>
            <QrCol info rightAlign>
              <Bold>Online QR verification</Bold>
              <p>This QR Code requires an internet connection to verify.</p>
            </QrCol>
            <QrCol>
              <QrCodeContainerWithBorder>
                <QRCode value={url} level={"M"} size={200} />
              </QrCodeContainerWithBorder>
            </QrCol>
          </QrRow>
          <QrBreakLine />
        </>
      )}
      <QrRow>
        <QrCol info>
          <Bold>Offline QR Verification (EU DCC-compatible)</Bold>
          <p>
            This QR Code does not require an internet connection to verify. Some
            EU countries may only support this form of verification.
          </p>
          <p>
            This may also be used for public health measures beyond travel
            within the EU and should be produced to authorities when required.
          </p>
        </QrCol>
        <QrCol>
          {signedEuHealthCert && (
            <QrCodeContainerWithBorder>
              <QRCode
                value={signedEuHealthCert?.qr}
                level={"M"}
                size={200}
                imageSettings={{
                  src: EULogo,
                  width: logoWidth,
                  height: logoHeight,
                }}
              />
            </QrCodeContainerWithBorder>
          )}
        </QrCol>
      </QrRow>
    </>
  );
};
