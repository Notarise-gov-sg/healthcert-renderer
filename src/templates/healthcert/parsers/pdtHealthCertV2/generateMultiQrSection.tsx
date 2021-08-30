import React from "react";
import QRCode from "qrcode.react";
import { NotarisedPDTHealthCertUnwrappedV2 } from "../../types";
import {
  Bold,
  QrBreakLine,
  QrCodeContainerWithBorder,
  QrCol,
  QrInfoCol,
  ResultSection,
  Row,
  TravellerInfoSection
} from "../../styled-components";
import fhirHelper from "../../../../models/fhirHelper";
import { isoToLocaleString } from "../../../../util/datetime";

import { R4 } from "@ahryman40k/ts-fhir-types";

export const generateMultiQrSection = (document: NotarisedPDTHealthCertUnwrappedV2): JSX.Element => {
  const { patient, observations } = fhirHelper.parse(document.fhirBundle as R4.IBundle);
  const patientName = patient.fullName || "";
  const observationTestTypeDisplay = observations[0]?.observation?.testType?.display || "";
  const specimenSwabTypeDisplay = observations[0]?.specimen.swabType.display || "";
  const specimenCollectionDateTime = isoToLocaleString(observations[0]?.specimen.collectionDateTime);
  const url = (document.notarisationMetadata as any)?.url;
  const signedEuHealthCert = (document.notarisationMetadata as any)?.signedEuHealthCert;

  return (
    <>
      <ResultSection>
        {patientName} has undergone {observationTestTypeDisplay} for COVID-19 using a {specimenSwabTypeDisplay} on{" "}
        {specimenCollectionDateTime}
      </ResultSection>
      <TravellerInfoSection>
        Note: Travellers are subject to the country or region&apos;s requirements prior to travel.
        <br />
        The QR code used for verification is based on your <u>destination country</u>.
      </TravellerInfoSection>
      <br />
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
          <QrCodeContainerWithBorder>
            <QRCode value={signedEuHealthCert} level={"M"} size={200} />
          </QrCodeContainerWithBorder>
        </QrCol>
      </Row>
      <QrBreakLine />
      {url && (
        <Row>
          <QrCol>
            <QrCodeContainerWithBorder>
              <QRCode value={url} level={"M"} size={200} />
            </QrCodeContainerWithBorder>
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
    </>
  );
};
