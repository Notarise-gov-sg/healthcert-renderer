// TODO: remove ts-ignore after the healthcert schema is updated to include it
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { QrCode } from "../../components/qrcode";
import {
  Page,
  Background,
  Logo,
  QrCodeContainer,
  TravellerInfoSection,
} from "./styled-components";
import { NotarisedRECHealthCertUnwrappedV2 } from "./types";

import {
  generateMemoSections as generateMemoSectionsV2,
  generateMultiQrSection as generateMultiQrSectionV2,
} from "./parsers/recHealthCertV2";

export const RecoveryCertTemplate: FunctionComponent<
  TemplateProps<NotarisedRECHealthCertUnwrappedV2> & {
    className?: string;
  }
> = ({ document, className = "" }) => {
  const url = (document.notarisationMetadata as any)?.url;
  const signedEuHealthCerts =
    (document.notarisationMetadata as any)?.signedEuHealthCerts || [];
  const multiQr = signedEuHealthCerts.length > 0 ? true : false;

  const memoSections = generateMemoSectionsV2(document);
  const multiQrSection = generateMultiQrSectionV2(document);

  return (
    <>
      <Page className={className}>
        <Background />
        <Logo src={document.logo} alt="healthcare provider logo" />
        {memoSections}
        <TravellerInfoSection>
          Travellers should note that they are subject to the country or
          region&apos;s requirements prior to travel.
          {!multiQr && (
            <>
              This HealthCert is <u>not</u> compatible with the EU Digital Covid
              Certificate.
            </>
          )}
          {multiQr && (
            <>
              The QR code used for verification is based on your{" "}
              <u>destination country</u>. <br /> Please note the validity date
              associated with your offline QR code.
            </>
          )}
        </TravellerInfoSection>
        {url && (
          <QrCodeContainer>
            <QrCode value={url} hasBorder />
          </QrCodeContainer>
        )}
      </Page>
      {multiQr && <Page className={className}>{multiQrSection}</Page>}
    </>
  );
};
