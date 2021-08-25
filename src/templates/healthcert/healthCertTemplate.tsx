// TODO: remove ts-ignore after the healthcert schema is updated to include it
import QRCode from "qrcode.react";
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { Page, Background, Logo, QrCodeContainer } from "./styled-components";
import { NotarisedHealthCert } from "./types";

import { generateMemoSections as generateMemoSectionsV1 } from "./parsers/pdtHealthCertV1";

export const HealthCertTemplate: FunctionComponent<TemplateProps<NotarisedHealthCert> & {
  className?: string;
}> = ({ document, className = "" }) => {
  const url = (document.notarisationMetadata as any)?.url;
  const memoSections = generateMemoSectionsV1(document);

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
};
