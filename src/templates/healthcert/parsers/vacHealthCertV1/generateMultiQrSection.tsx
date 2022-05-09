import React from "react";
import { QrCode } from "../../../../components/qrcode";
import { get } from "lodash";
import { NotarisedHealthCert } from "../../types";
import {
  Bold,
  EUDCCOfflineQrCodeContainer,
  EUDCCTag,
  EUDCCDoseType,
  ResultSection,
  QrRowCenter,
  EDUCCQrColCenter,
  StyledMemoSection,
} from "../../styled-components";
import sddInformations from "../../../../../static/SDD.mapping.json";

const generateOfflineQrSection = (
  document: NotarisedHealthCert
): JSX.Element => {
  const signedEuHealthCerts =
    document.notarisationMetadata.signedEuHealthCerts || [];
  return (
    <StyledMemoSection>
      <QrRowCenter>
        {signedEuHealthCerts.map((signedEuHealthCert, i) => {
          const sddInfo = signedEuHealthCert.vaccineCode
            ? get(sddInformations, signedEuHealthCert.vaccineCode)
            : { short_name: "" };
          return (
            <EDUCCQrColCenter key={i}>
              <EUDCCOfflineQrCodeContainer key={i}>
                <EUDCCTag>OFFLINE QR (EU DCC)</EUDCCTag>
                <QrCode value={signedEuHealthCert.qr} scale={2.5} />
                <EUDCCDoseType>
                  {sddInfo.short_name} (DOSE {signedEuHealthCert.dose})
                </EUDCCDoseType>
              </EUDCCOfflineQrCodeContainer>
            </EDUCCQrColCenter>
          );
        })}
      </QrRowCenter>
      <br />
    </StyledMemoSection>
  );
};

export const generateMultiQrSection = (
  document: NotarisedHealthCert
): JSX.Element => {
  const offlineQrSection = generateOfflineQrSection(document);
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
      </ResultSection>
      <br />
      {offlineQrSection}
    </>
  );
};
