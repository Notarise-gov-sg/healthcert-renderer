import styled from "@emotion/styled";
import mohBackground from "./moh-logo-transparent.png";

// extracted styled components to common file to prevent circular dependency between healthCertTemplate and child components
// that share styled components

export const mediaQueries: Record<string, string> = {
  sm: `@media (min-width: ${640}px)`,
  md: `@media (min-width: ${768}px)`,
  lg: `@media (min-width: ${1024}px)`,
  xl: `@media (min-width: ${1280}px)`,
  "2xl": `@media (min-width: ${1536}px)`,
  print: `@media print`,
};

export const Background = styled.div`
  &::after {
    content: "";
    background-image: url(${mohBackground});
    background-size: 90%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.05;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
export const Page = styled.div`
  margin: auto;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 10px 10px;
  position: relative;
  font-size: 16px;
  line-height: 1.5;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;

  ${mediaQueries["sm"]} {
    padding: 15mm;
  }
  ${mediaQueries["lg"]} {
    width: 21cm;
  }

  ${mediaQueries["print"]} {
    width: 21cm;
    min-height: 27cm;
    padding-bottom: 2mm;
    border: none;
    page-break-before: always;
  }
`;
export const Logo = styled.img`
  max-width: 260px;
`;

export const Title = styled.h1`
  padding: 40px 0;
  margin: 0;
  text-align: center;
  font-size: 22px;
  line-height: 1.2;
`;

export const TitleInfo = styled.p`
  padding-bottom: 15px;
  text-align: center;
  font-size: 14px;
  font-style: italic;
`;

export const PatientDetails = styled.section``;
export const ImmunizationDetails = styled.section`
  padding-top: 20px;
  page-break-inside: avoid;
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const UnderlinedFirstCol = styled.div`
  text-decoration: underline;
  font-weight: bold;
  flex-basis: 100%;
  ${mediaQueries["print"]} {
    flex-basis: 50%;
  }
  ${mediaQueries["md"]} {
    flex-basis: 50%;
  }
`;
export const FirstCol = styled.div`
  font-weight: bold;
  flex-basis: 100%;
  ${mediaQueries["print"]} {
    flex-basis: 50%;
  }
  ${mediaQueries["md"]} {
    flex-basis: 50%;
  }
`;
export const SecondCol = styled.div`
  flex-basis: 100%;
  ${mediaQueries["md"]} {
    flex-basis: 50%;
  }
  ${mediaQueries["print"]} {
    flex-basis: 50%;
  }
`;

export const ResultSection = styled.section`
  text-align: justify;

  ${mediaQueries["md"]} {
    margin-top: 40px;
    text-align: left;
  }
`;
export const TestResult = styled.span`
  font-weight: bold;
`;

export const Doctor = styled.section`
  margin-bottom: 10px;
  ${mediaQueries["md"]} {
    margin-top: 40px;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const QrCodeContainer = styled.div`
  margin-top: auto;
  text-align: center;
  font-weight: bold;
  page-break-inside: avoid;
`;

export const StyledMemoSection = styled.div`
  page-break-inside: avoid;
`;

export const QrCodeContainerWithBorder = styled.div`
  margin-top: auto;
  text-align: center;
  font-weight: bold;
  page-break-inside: avoid;
  border: 1px solid #e2e8f0;
  padding: 10px;
`;

export const EUDCCOfflineQrCodeContainer = styled.div`
  margin-top: auto;
  text-align: center;
  page-break-inside: avoid;
  border: 4px solid #a3bffa;
  border-radius: 12px;
  padding: 8px;
  width: 250px;
`;

export const EUDCCTag = styled.p`
  font-weight: bold;
  text-align: center;
  page-break-inside: avoid;
  color: #4c51bf;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  padding-bottom: 4px;
`;

export const EUDCCDoseType = styled.p`
  text-align: center;
  page-break-inside: avoid;
  color: #000000;
  font-size: 12px;
  padding: 12px 0 0 0;
  line-height: 1.25;
  margin: 0;
`;

export const TravellerInfoSection = styled.section`
  text-align: justify;
  background-color: #f1f5f9;
  margin: 24px 0px;
  padding: 8px 16px;
`;

export const QrBreakLine = styled.hr`
  border: 1px solid #cfd8e3;
  margin: 20px 0px;
`;

export const QrRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${mediaQueries["md"]} {
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  ${mediaQueries["print"]} {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;

export const QrCol = styled.div<{ rightAlign?: boolean; info?: boolean }>`
  margin: 10px;
  flex-grow: ${(props) => (props.info ? 1 : 0)};

  ${mediaQueries["md"]} {
    order: ${(props) => (props.rightAlign ? 1 : 0)};
  }

  ${mediaQueries["print"]} {
    order: ${(props) => (props.rightAlign ? 1 : 0)};
  }
`;

export const QrRowCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const QrColCenter = styled.div`
  text-align: center;
  margin: 10px;
  padding: 0px 30px;
`;

export const EDUCCQrColCenter = styled.div`
  text-align: center;
  margin: 20px 20px;
`;
