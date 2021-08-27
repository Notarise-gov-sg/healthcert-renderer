// TODO: remove ts-ignore after the healthcert schema is updated to include it
import QRCode from "qrcode.react";
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import {
  Page,
  Background,
  Logo,
  QrCodeContainer,
  TravellerInfoSection,
  Row,
  Bold,
  QrInfoCol,
  QrCol,
  QrCodeContainerWithBorder,
  QrBreakLine
} from "./styled-components";
import { NotarisedHealthCert, NotarisedPDTHealthCertUnwrappedV2 } from "./types";

import {
  generateMemoSections as generateMemoSectionsV1,
  generateResultSection as generateResultSectionV1
} from "./parsers/pdtHealthCertV1";
import {
  generateMemoSections as generateMemoSectionsV2,
  generateResultSection as generateResultSectionV2
} from "./parsers/pdtHealthCertV2";

const isV2 = (i: any): i is NotarisedPDTHealthCertUnwrappedV2 => i.version === "pdt-healthcert-v2.0";

type HC = NotarisedHealthCert | NotarisedPDTHealthCertUnwrappedV2;
export const HealthCertTemplate: FunctionComponent<TemplateProps<HC> & {
  className?: string;
}> = ({ document, className = "" }) => {
  const url = (document.notarisationMetadata as any)?.url;
  const signedEuHealthCert = (document.notarisationMetadata as any)?.signedEuHealthCert;
  const multiQr = signedEuHealthCert ? true : false;
  const memoSections = isV2(document)
    ? generateMemoSectionsV2(document, multiQr)
    : generateMemoSectionsV1(document, multiQr);
  const headerAndMemoSection = (
    <>
      <Background />
      <Logo src={document.logo} alt="healthcare provider logo" />
      {memoSections}
    </>
  );

  if (multiQr) {
    const resultSection = isV2(document) ? generateResultSectionV2(document) : generateResultSectionV1(document);
    return (
      <>
        <Page className={className}>{headerAndMemoSection}</Page>
        <Page className={className}>
          {resultSection}
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
    return (
      <Page className={className}>
        {headerAndMemoSection}
        {url && (
          <QrCodeContainer>
            <QRCode value={url} level={"M"} size={200} />
          </QrCodeContainer>
        )}
      </Page>
    );
  }
};
