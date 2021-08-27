// TODO: remove ts-ignore after the healthcert schema is updated to include it
import QRCode from "qrcode.react";
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import {
  Page,
  Background,
  Logo,
  QrCodeContainer,
  ResultSection,
  TravellerInfoSection,
  Row,
  Bold,
  QrInfoCol,
  QrCol,
  QrCodeContainerWithBorder,
  QrBreakLine
} from "./styled-components";
import { NotarisedHealthCert, NotarisedPDTHealthCertUnwrappedV2 } from "./types";

import { extractInfo, generateMemoSections as generateMemoSectionsV1 } from "./parsers/pdtHealthCertV1";
import { generateMemoSections as generateMemoSectionsV2 } from "./parsers/pdtHealthCertV2";
import fhirHelper from "../../models/fhirHelper";
import { R4 } from "@ahryman40k/ts-fhir-types";
import { isoToLocaleString } from "../../util/datetime";
import { pdtHealthCertV1 } from "@govtechsg/oa-schemata";

const isV2 = (i: any): i is NotarisedPDTHealthCertUnwrappedV2 => i.version === "pdt-healthcert-v2.0";

type HC = NotarisedHealthCert | NotarisedPDTHealthCertUnwrappedV2;
export const HealthCertTemplate: FunctionComponent<TemplateProps<HC> & {
  className?: string;
}> = ({ document, className = "" }) => {
  const url = (document.notarisationMetadata as any)?.url;
  const signedEuHealthCert = (document.notarisationMetadata as any)?.signedEuHealthCert;

  if (signedEuHealthCert) {
    const memoSections = isV2(document)
      ? generateMemoSectionsV2(document, true)
      : generateMemoSectionsV1(document, true);

    let patientName: string,
      observationTestTypeDisplay: string,
      specimenSwabTypeDisplay: string,
      specimenCollectionDateTime: string;
    if (isV2(document)) {
      const { patient, observations } = fhirHelper.parse(document.fhirBundle as R4.IBundle);
      patientName = patient.fullName || "";
      observationTestTypeDisplay = observations[0]?.observation?.testType?.display || "";
      specimenSwabTypeDisplay = observations[0]?.specimen.swabType.display || "";
      specimenCollectionDateTime = isoToLocaleString(observations[0]?.specimen.collectionDateTime);
    } else {
      const patient = document.fhirBundle.entry.find(
        entry => entry.resourceType === "Patient"
      ) as pdtHealthCertV1.Patient;
      const observations = document.fhirBundle.entry.filter(entry => entry.resourceType === "Observation");
      const { swabType, swabCollectionDate } = extractInfo(observations[0], document);
      patientName = typeof patient?.name?.[0] === "object" ? patient?.name?.[0].text : "";
      observationTestTypeDisplay = observations[0]?.code?.coding?.[0]?.display || "";
      specimenSwabTypeDisplay = swabType?.display || "";
      specimenCollectionDateTime = swabCollectionDate;
    }

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
              {patientName} has undergone {observationTestTypeDisplay} for COVID-19 using a {specimenSwabTypeDisplay} on{" "}
              {specimenCollectionDateTime}
            </p>
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
        </Page>
      </>
    );
  } else {
    const memoSections = isV2(document) ? generateMemoSectionsV2(document) : generateMemoSectionsV1(document);
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
