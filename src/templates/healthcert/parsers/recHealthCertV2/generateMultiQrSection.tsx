import React from "react";
import QRCode from "qrcode.react";
import { NotarisedRECHealthCertUnwrappedV2 } from "../../types";
import { Bold, ResultSection, QrCodeContainer } from "../../styled-components";
import { isoToDateOnlyString } from "../../../../util/datetime";
import EULogo from "../../eu-dcc-tag-big.png";

export const generateMultiQrSection = (
  document: NotarisedRECHealthCertUnwrappedV2
): JSX.Element => {
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

  const logoWidth = 130;
  const logoHeight = logoWidth / 5;

  return (
    <>
      <ResultSection>
        <Bold>Offline QR Verification (EU DCC-compatible)</Bold>
        <p>
          This QR Code does not require an internet connection to verify. Some
          EU countries may only support this form of verification.
        </p>
        <p>
          This may also be used for public health measures beyond travel within
          the EU and should be produced to authorities when required.
        </p>
        {expiryDateTime && (
          <p>
            The offline QR code is valid till <b>{expiryDateTime}</b>. This is
            based on EU DCC rules which recognise a person as recovered status
            for 180 days after the date of a positive test result.
          </p>
        )}
      </ResultSection>
      {signedEuHealthCert && (
        <QrCodeContainer>
          <QRCode
            value={signedEuHealthCert?.qr}
            level={"M"}
            size={200}
            imageSettings={{
              src: EULogo,
              width: logoWidth,
              height: logoHeight,
            }}
          />
        </QrCodeContainer>
      )}
    </>
  );
};
