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
        Travellers are subject to the country or region&apos;s requirements
        prior to travel.
        <br />
        The QR code used for verification is based on your{" "}
        <u>destination country</u>.
        {expiryDateTime && (
          <>
            <br />
            <br />
            The <u>QR codes</u> in the PDT HealthCert are active until{" "}
            <b>{expiryDateTime}</b>. Please note this is not the expiry date of
            your PDT records or PDT status.
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
