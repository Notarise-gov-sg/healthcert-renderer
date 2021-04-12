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
  print: `@media print`
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
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 10px 10px;
  position: relative;
  font-size: 18px;
  line-height: 30px;

  ${mediaQueries["sm"]} {
    padding: 15mm 20mm;
  }
  ${mediaQueries["lg"]} {
    width: 21cm;
  }

  ${mediaQueries["print"]} {
    width: 21cm;
    max-height: 27cm;
    padding-bottom: 2mm;
  }
`;
export const Logo = styled.img`
  width: 80%;
  height: auto;
  ${mediaQueries["md"]} {
    max-width: 300px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0;
  margin-top: 40px;
  text-align: center;
  font-size: 22px;
`;
export const SubTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
  font-size: 22px;
`;
export const PatientDetails = styled.section``;
export const ImmunizationDetails = styled.section``;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  ${mediaQueries["md"]} {
    flex-basis: 30%;
    justify-content: initial;
  }
`;
export const FirstCol = styled.div`
  font-weight: bold;

  ${mediaQueries["md"]} {
    flex-basis: 30%;
  }
`;
export const SecondCol = styled.div`
  text-align: right;
  ${mediaQueries["md"]} {
    flex-basis: 70%;
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
`;
