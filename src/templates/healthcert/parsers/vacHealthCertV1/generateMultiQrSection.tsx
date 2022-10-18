import React from "react";
import { QrCode } from "../../../../components/qrcode";
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
import sddMapping from "../../../../../static/SDD.mapping.json";

const generateOfflineQrSection = (
  document: NotarisedHealthCert
): JSX.Element => {
  const signedEuHealthCerts =
    document.notarisationMetadata.signedEuHealthCerts || [];
  return (
    <StyledMemoSection>
      <QrRowCenter>
        {signedEuHealthCerts.map((signedEuHealthCert, i) => {
          const totalIterator = i + 1;
          const vaccineShortName =
            signedEuHealthCert.vaccineCode || "" in sddMapping
              ? sddMapping[
                  signedEuHealthCert.vaccineCode as keyof typeof sddMapping
                ].short_name
              : signedEuHealthCert.vaccineCode;
          const doseIterator =
            signedEuHealthCerts
              .slice(0, i)
              .filter(
                ({ vaccineCode }) =>
                  vaccineCode === signedEuHealthCert.vaccineCode
              ).length + 1;
          return (
            <EDUCCQrColCenter key={i}>
              <EUDCCOfflineQrCodeContainer>
                <EUDCCTag>OFFLINE QR (EU DCC)</EUDCCTag>
                <QrCode value={signedEuHealthCert.qr} scale={2.5} />
                <EUDCCDoseType>
                  {totalIterator}. {vaccineShortName} (DOSE {doseIterator})
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
