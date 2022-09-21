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

  // Date that transient storage was increased to 60 days: https://github.com/Notarise-gov-sg/api-transient-storage/actions/runs/3087216953
  const DATE_OF_INCREASE = new Date("2022-09-20T11:45:00.000+08:00");

  const endorsedDate = new Date(document.notarisationMetadata.notarisedOn);
  let qrExpiryDateString = "";

  // FIXME: Find a better way to obtain QR TTL instead of hardcoded endorsement date + 60 days
  if (endorsedDate > DATE_OF_INCREASE) {
    const expiryDate = new Date(endorsedDate);
    expiryDate.setDate(expiryDate.getDate() + 60);
    qrExpiryDateString = isoToDateOnlyString(expiryDate.toISOString(), {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } else if (signedEuHealthCert?.expiryDateTime) {
    qrExpiryDateString = isoToDateOnlyString(
      signedEuHealthCert.expiryDateTime,
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
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
        {qrExpiryDateString && (
          <>
            <br />
            <br />
            The <u>QR codes</u> in the PDT HealthCert are active until{" "}
            <b>{qrExpiryDateString}</b>. Please note this is not the expiry date
            of your PDT records or PDT status.
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
