import React from "react";
import QRCode from "qrcode.react";
import { NotarisedPDTHealthCertUnwrappedV2 } from "../../types";
import {
  Bold,
  QrBreakLine,
  QrCodeContainerWithBorder,
  QrRow,
  QrCol,
  ResultSection,
  TravellerInfoSection,
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
  const { patient, observations } = fhirHelper.parse(
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
            {/* This message will be update after the confirmation */}
            {/* <br />
            <br />
            The QR codes in this HealthCert is valid until{" "}
            <b>{expiryDateTime}</b>. */}
          </>
        )}
      </TravellerInfoSection>
      <br />
      <QrRow>
        <QrCol info>
          <Bold>Offline QR Verification (EU DCC-compatible)</Bold>
          <p>
            This QR Code does not require an internet connection to verify.
            Currently only the European Union (EU) supports this option of
            verification.
          </p>
          <p>
            This may also be used for public health measures beyond travel
            within the EU and should be produced to authorities when required.
          </p>
        </QrCol>
        <QrCol>
          {signedEuHealthCert && (
            <QrCodeContainerWithBorder>
              <QRCode value={signedEuHealthCert?.qr} level={"M"} size={200} />
            </QrCodeContainerWithBorder>
          )}
        </QrCol>
      </QrRow>
      <QrBreakLine />
      {url && (
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
      )}
    </>
  );
};
