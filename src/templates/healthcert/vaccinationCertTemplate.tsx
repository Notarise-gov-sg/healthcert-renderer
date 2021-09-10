import QRCode from "qrcode.react";
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { NotarisedHealthCert } from "./types";
import { Page, Background, Logo, QrCodeContainer } from "./styled-components";
import { generateMemoSections, generateMultiQrSection } from "./parsers/vacHealthCertV1";

export const VaccinationCertTemplate: FunctionComponent<
  TemplateProps<NotarisedHealthCert> & {
    className?: string;
  }
> = ({ document, className = "" }) => {
  const url = (document.notarisationMetadata as any)?.url;
  const signedEuHealthCerts = (document.notarisationMetadata as any)?.signedEuHealthCerts || [];
  const multiQr = signedEuHealthCerts.length > 0 ? true : false;
  const memoSections = generateMemoSections(document, multiQr);

  return (
    <>
      <Page className={className}>
        <Background />
        <Logo src={document.logo} alt="healthcare provider logo" />
        {memoSections}
        {!multiQr && url && (
          <QrCodeContainer>
            <QRCode value={url} level={"M"} size={200} />
          </QrCodeContainer>
        )}
      </Page>
      {multiQr && <Page className={className}>{generateMultiQrSection(document)}</Page>}
    </>
  );
};
