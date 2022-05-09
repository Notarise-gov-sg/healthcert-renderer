import React from "react";
import { QrCode } from "../../../../components/qrcode";
import { NotarisedPDTHealthCertUnwrappedV2 } from "../../types";
import {
  Bold,
  QrBreakLine,
  ResultSection,
  TravellerInfoSection,
  EUDCCOfflineQrCodeContainer,
  EUDCCTag,
  QrRowCenter,
} from "../../styled-components";
import fhirHelper from "../../../../models/fhirHelper";
import {
  isoToDateOnlyString,
  isoToLocaleString,
} from "../../../../util/datetime";

import { R4 } from "@ahryman40k/ts-fhir-types";

export const generateMultiQrSection = (
  document: NotarisedPDTHealthCertUnwrappedV2
): JSX.Element => {
  const { patient, observations } = fhirHelper.pdtParse(
    document.fhirBundle as R4.IBundle
  );
  const patientName = patient.fullName || "";
  const observationTestTypeDisplay =
    observations[0]?.observation?.testType?.display || "";
  const specimenSwabTypeDisplay =
    observations[0]?.specimen.swabType.display || "";
  const specimenCollectionDateTime = isoToLocaleString(
    observations[0]?.specimen.collectionDateTime
  );
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
          <Bold>Online QR verification</Bold>
          <p>This QR Code requires an internet connection to verify.</p>
          <QrRowCenter>
            <QrCode value={url} hasBorder />
          </QrRowCenter>
          <QrBreakLine />
        </>
      )}
      <Bold>Offline QR Verification (EU DCC-compatible)</Bold>
      <p>
        This QR Code does not require an internet connection to verify. Some EU
        countries may only support this form of verification.
      </p>
      <p>
        This may also be used for public health measures beyond travel within
        the EU and should be produced to authorities when required.
      </p>
      {signedEuHealthCert && (
        <QrRowCenter>
          <EUDCCOfflineQrCodeContainer>
            <EUDCCTag>OFFLINE QR (EU DCC)</EUDCCTag>
            <QrCode value={signedEuHealthCert.qr} />
          </EUDCCOfflineQrCodeContainer>
        </QrRowCenter>
      )}
    </>
  );
};
