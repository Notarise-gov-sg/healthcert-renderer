import React from "react";
import QRCode from "qrcode.react";
import { groupBy } from "lodash";
import { notarise } from "@govtechsg/oa-schemata";
import { Immunization, NotarisedHealthCert } from "../../types";
import {
  Bold,
  QrCodeContainerWithBorder,
  ResultSection,
  QrRowCenter,
  QrColCenter,
  QrTitle,
  StyledMemoSection,
} from "../../styled-components";
import EULogo from "../../eu-dcc-tag-big.png";

interface GroupedOfflineQr {
  manufacturer: string;
  signedEuHealthCerts: notarise.SignedEuHealthCert[];
}

const OfflineQrGroup: React.FC<{
  groupedOfflineQr: GroupedOfflineQr;
}> = ({ groupedOfflineQr }) => {
  const logoWidth = 130;
  const logoHeight = logoWidth / 5;
  return (
    <StyledMemoSection>
      <QrTitle>{groupedOfflineQr.manufacturer}</QrTitle>
      <QrRowCenter>
        {groupedOfflineQr.signedEuHealthCerts.map((signedEuHealthCert, i) => (
          <QrColCenter key={i}>
            <QrCodeContainerWithBorder key={i}>
              <QRCode
                value={signedEuHealthCert.qr}
                level={"M"}
                size={200}
                imageSettings={{
                  src: EULogo,
                  width: logoWidth,
                  height: logoHeight,
                }}
              />
            </QrCodeContainerWithBorder>
            DOSE {signedEuHealthCert.dose}
          </QrColCenter>
        ))}
      </QrRowCenter>
      <br />
    </StyledMemoSection>
  );
};

const generateOfflineQrSection = (
  document: NotarisedHealthCert
): JSX.Element[] => {
  const signedEuHealthCerts =
    document.notarisationMetadata.signedEuHealthCerts || [];
  const groupedEuHealthCerts = groupBy(signedEuHealthCerts, "vaccineCode");
  const groupedEuHealthCertKeys = Object.keys(groupedEuHealthCerts);

  return groupedEuHealthCertKeys.map((vaccineCode, i) => {
    const immunization = document.fhirBundle.entry.find(
      (entry) =>
        entry.resourceType === "Immunization" &&
        entry.vaccineCode.coding[0]?.code === vaccineCode
    ) as Immunization;
    const groupedOfflineQr = {
      manufacturer: immunization?.vaccineCode?.coding[0]?.display || "",
      signedEuHealthCerts: groupedEuHealthCerts[vaccineCode],
    };
    return <OfflineQrGroup key={i} groupedOfflineQr={groupedOfflineQr} />;
  });
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
