// TODO: remove ts-ignore after the healthcert schema is updated to include it
import QRCode from "qrcode.react";
import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { Page, Background, Logo, QrCodeContainer } from "./styled-components";
import { NotarisedHealthCert, NotarisedPDTHealthCertUnwrappedV2 } from "./types";

import {
  generateMemoSections as generateMemoSectionsV1,
  generateMultiQrSection as generateMultiQrSectionV1
} from "./parsers/pdtHealthCertV1";
import {
  generateMemoSections as generateMemoSectionsV2,
  generateMultiQrSection as generateMultiQrSectionV2
} from "./parsers/pdtHealthCertV2";

const isV2 = (i: any): i is NotarisedPDTHealthCertUnwrappedV2 => i.version === "pdt-healthcert-v2.0";

type HC = NotarisedHealthCert | NotarisedPDTHealthCertUnwrappedV2;
export const HealthCertTemplate: FunctionComponent<TemplateProps<HC> & {
  className?: string;
}> = ({ document, className = "" }) => {
  const url = (document.notarisationMetadata as any)?.url;
  const signedEuHealthCerts = (document.notarisationMetadata as any)?.signedEuHealthCerts || [];
  const multiQr = signedEuHealthCerts.length > 0 ? true : false;

  const memoSections = isV2(document)
    ? generateMemoSectionsV2(document, multiQr)
    : generateMemoSectionsV1(document, multiQr);
  const multiQrSection = isV2(document) ? generateMultiQrSectionV2(document) : generateMultiQrSectionV1(document);

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
      {multiQr && <Page className={className}>{multiQrSection}</Page>}
    </>
  );
};
