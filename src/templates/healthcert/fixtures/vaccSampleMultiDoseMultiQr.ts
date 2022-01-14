import { pdtHealthCertV1 as healthcert } from "@govtechsg/oa-schemata";
import { v2 } from "@govtechsg/open-attestation";
import { NotarisedHealthCert } from "../types";
import mohHeader from "./moh-header.base64.txt";

const { FhirBundleType, Gender, FhirBundleResourceType, EntryResourceType } =
  healthcert;

export const vaccinationMultiQrCertSample: NotarisedHealthCert = {
  id: "3749314a-0f99-432d-9b9e-4d9446bff38c",
  name: "HealthCert",
  validFrom: "2021-03-30T03:22:06.031Z",
  fhirVersion: "4.0.1",
  fhirBundle: {
    resourceType: FhirBundleResourceType.Bundle,
    type: FhirBundleType.Collection,
    entry: [
      {
        fullUrl: "urn:uuid:824ea5fe-3b1f-4ec2-bde0-40e62d476ef3",
        resourceType: EntryResourceType.Patient,
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/patient-nationality",
            code: {
              text: "SGP",
            },
          },
        ],
        identifier: [
          {
            type: "PPN",
            value: "E123456789A",
          },
          {
            type: {
              text: "NRIC",
            },
            value: "S1234567J",
          },
        ],
        name: [
          {
            text: "Foo Bar Baz",
          },
        ],
        gender: Gender.Female,
        birthDate: "2010-03-18",
      },
      {
        fullUrl: "urn:uuid:a9453181-6682-47f6-afef-8faa299d6e7f",
        resourceType: "Location",
        id: "HCI000",
        name: "Vaccination site approved by Ministry of Health, Singapore [HCI000]",
        address: {
          country: "SG",
        },
      },
      {
        fullUrl: "urn:uuid:830f6633-4ef5-441d-966d-777ca67af9d7",
        resourceType: "Location",
        id: "HCI111",
        name: "Vaccination site approved by Ministry of Health, Singapore [HCI111]",
        address: {
          country: "SG",
        },
      },
      {
        fullUrl: "urn:uuid:9ad67b44-64b4-41d8-96d4-a3bf7264aba4",
        resourceType: "Immunization",
        vaccineCode: {
          coding: [
            {
              system: "http://standards.ihis.com.sg",
              code: "3440141000133104",
              display:
                "CORONAVAC COVID-19 Vaccine (SINOVAC) [SARS-CoV-2 Virus (inactivated, CZ02 strain)] Injection",
            },
          ],
        },
        lotNumber: "Lot12345",
        occurrenceDateTime: "2021-04-24",
        patient: {
          reference: "urn:uuid:824ea5fe-3b1f-4ec2-bde0-40e62d476ef3",
        },
        location: {
          reference: "urn:uuid:a9453181-6682-47f6-afef-8faa299d6e7f",
        },
        performer: [
          {
            actor: {
              display:
                "Designated vaccinator by MOH-approved vaccination site [HCI000]",
            },
          },
        ],
      },
      {
        fullUrl: "urn:uuid:9ad67b44-64b4-41d8-96d4-a3bf7264aba4",
        resourceType: "Immunization",
        vaccineCode: {
          coding: [
            {
              system: "http://standards.ihis.com.sg",
              code: "3440141000133104",
              display:
                "CORONAVAC COVID-19 Vaccine (SINOVAC) [SARS-CoV-2 Virus (inactivated, CZ02 strain)] Injection",
            },
          ],
        },
        lotNumber: "Lot12345",
        occurrenceDateTime: "2021-05-24",
        patient: {
          reference: "urn:uuid:824ea5fe-3b1f-4ec2-bde0-40e62d476ef3",
        },
        location: {
          reference: "urn:uuid:a9453181-6682-47f6-afef-8faa299d6e7f",
        },
        performer: [
          {
            actor: {
              display:
                "Designated vaccinator by MOH-approved vaccination site [HCI000]",
            },
          },
        ],
      },
      {
        fullUrl: "urn:uuid:6950a14f-3560-456a-92d3-5f4da7d052f0",
        resourceType: "Immunization",
        vaccineCode: {
          coding: [
            {
              system: "http://standards.ihis.com.sg",
              code: "3339641000133109",
              display:
                "PFIZER-BIONTECH COVID-19 Vaccine [Tozinameran] Injection",
            },
          ],
        },
        lotNumber: "Lot97531",
        occurrenceDateTime: "2021-05-30",
        patient: {
          reference: "urn:uuid:824ea5fe-3b1f-4ec2-bde0-40e62d476ef3",
        },
        location: {
          reference: "urn:uuid:830f6633-4ef5-441d-966d-777ca67af9d7",
        },
        performer: [
          {
            actor: {
              display:
                "Designated vaccinator by MOH-approved vaccination site [HCI111]",
            },
          },
        ],
      },
      {
        fullUrl: "urn:uuid:6950a14f-3560-456a-92d3-5f4da7d052f0",
        resourceType: "Immunization",
        vaccineCode: {
          coding: [
            {
              system: "http://standards.ihis.com.sg",
              code: "3339641000133109",
              display:
                "PFIZER-BIONTECH COVID-19 Vaccine [Tozinameran] Injection",
            },
          ],
        },
        lotNumber: "Lot97531",
        occurrenceDateTime: "2021-06-30",
        patient: {
          reference: "urn:uuid:824ea5fe-3b1f-4ec2-bde0-40e62d476ef3",
        },
        location: {
          reference: "urn:uuid:830f6633-4ef5-441d-966d-777ca67af9d7",
        },
        performer: [
          {
            actor: {
              display:
                "Designated vaccinator by MOH-approved vaccination site [HCI111]",
            },
          },
        ],
      },
      {
        fullUrl: "urn:uuid:184fd491-26f4-47bd-aaff-4864dfe0a12c",
        resourceType: "ImmunizationRecommendation",
        recommendation: [
          {
            targetDisease: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "840539006",
                  display: "COVID-19",
                },
              ],
            },
            forecastStatus: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "complete",
                  display: "Complete",
                },
              ],
            },
            dateCriterion: [
              {
                code: {
                  coding: [
                    {
                      system: "",
                      code: "effective",
                      display: "Effective",
                    },
                  ],
                },
                value: "2021-06-21",
              },
            ],
          },
        ],
        patient: {
          reference: "urn:uuid:824ea5fe-3b1f-4ec2-bde0-40e62d476ef3",
        },
      },
    ],
  },
  issuers: [
    {
      name: "SAMPLE ISSUER (DO NOT VERIFY)",
      id: "did:ethr:0xE39479928Cc4EfFE50774488780B9f616bd4B830",
      revocation: {
        type: v2.RevocationType.None,
      },
      identityProof: {
        type: v2.IdentityProofType.DNSDid,
        location: "donotverify.testing.verify.gov.sg",
        key: "did:ethr:0xE39479928Cc4EfFE50774488780B9f616bd4B830#controller",
      },
    },
  ],
  $template: {
    name: "VACCINATION_CERT",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "https://healthcert.renderer.moh.gov.sg/",
  },
  notarisationMetadata: {
    reference: "3749314a-0f99-432d-9b9e-4d9446bff38c",
    notarisedOn: "2021-03-30T03:22:06.031Z",
    passportNumber: "E123456789A",
    url: "https://action.openattestation.com/?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22http%3A%2F%2Flocalhost%3A3000%2Fdocument%2F15042bfe-f990-4eb5-ab26-6e38ef23b4c8%22%2C%22key%22%3A%221d5a1344a1a0c8da9bd56b3f7f92ffacb6fd3b9b88b0f889fc38fa490f541a16%22%2C%22permittedActions%22%3A%5B%22VIEW%22%2C%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fwww.verify.gov.sg%2Fverify%22%7D%7D",
    signedEuHealthCerts: [
      {
        dose: 1,
        vaccineCode: "3440141000133104",
        type: "VAC",
        qr: "HC1:6BFI%GJN9+J2NP28%IE9JSQ6EQ48+OMKC*TFDKQ*VQCWCJ 1AF0-%UY23FBV:.S8+JI3DXM34T4Z.HPY0TB4R96W4P1*LW60ZP16 8/OUIDQSLJ$$B%EE.52-FF9JE%27P6FP6F:WPHPVS+PCHGBKI04EVNDO$T/UKQNAUANDS1937BNQ/64EQ7EU73*66QU06EZW0C%G7*K/YISAM0Q9O.OV*E/%3JJ1RN9Z1S3PT%ZPR3U9BJ/1S$80W9EBTI6II9+EIAVJ 8:H3V2WVPO/:JQF9O13D00DAJIWEQ6DPA6/X1+9BC*6/30U$KPMDOC0SHN1W9RTD%4CYI6D$EWA9-WP-AHU-0- D:89SLTSDC5/GX%TYCCQ0UH4829B9CCPF50%CYDHL18U61SPDA-LC+P0TT+740AC.H6ARGY8QMVFZV23.5SL0II6U7ASA4.LB:IG5%KU7F9MVBQDV+G3$8-VONMRXUUTN9:TDWQ2QS7KGAJ/1T*K9KGSN1U-OYGI347M81:+KX:TWI5DDQR*QUXA .8XG8:JTE51U9N+ 2-NIFXH%LM6Q48Z2.%TSYGTDD10CS:CKOM:*L4:634PU09L2ENRO66SFV3KFD*V3JDRG+B Z8CUK2KKNY55:G1WQF+F%-SG6TOLCECVRJVL6EX7UC+O763*05WPC*OGR4A+6LJLL/2JLSQPMA9EE-BAO4P5:BFT1. 6308:LT/0LN%4DXNJM4F1LWZ1UQ1BLLX9JV.P/3N$BC%S3PHMO%SYY0$YPQ7GJJUOB5AUS.SKUDPY970NCTYE*L1T-P 9C.HB1:0XSP57I:1KFR3K5CU.RWOULRCX12AYP0CJUC5$GODSR3-G.21SN6JYT010UJC-VG4QS1E3VO3YLIS$93CI462-2W$FK2USI6HCSRPOEN$6+5KSP582SJUM6%IAIRE1NM2CKG3JY7A8W74AW6RERI33DC02O5C.ZQQN2 6SDFUK9IPSU .K%YU6FV2%V5QO8267%1",
        expiryDateTime: "2023-01-14T02:47:18.714Z",
      },
      {
        dose: 2,
        vaccineCode: "3339641000133109",
        type: "VAC",
        qr: "HC1:6BFI%G-/RQP23Q2 X97H4$78WWG3I6.$30+NK6QF6S0%GA6PQFA:XE7*R4YQ5HS./P%XQHXN+YHW$V59PY5M%GAVC3CF2%/5 :9/%UNBHJ48K$FS%UPW7ZB34OLO3EZ*1Y SI VWXUQ6DNPSDUH:JJ5JIOM1G1RL5PC.H0VQTNB3$VLLPB5I82DPRFD*TC0DWXCAY3PJ6TAVBTP5D94RKSXD3%Q9R5%MFM6W6ECVUV4VIO9N$HF%LJ8E2L07XDORIAW-CKDJFRLEGFSNKJQUO4S CCVBQUPKW62748K.GY*D0+N-KH%X62VJ3F6/30$%M*DLWC0V37CP133E/0AXE5*$A6ADVEL7P1FRI* DSNL BMMSPAZ18ZU$WI-DD.N0L8CJGP0W9ZRU0/I.2G1NAH03NLP/JC$RM0W2550MSPPC7+ZE.*S%946SENBTU+41K8IEGWKD8J35TGE/TV-TOZNGG29E4GA2$WPFS92$JLC2596:BH30PH:7 2KM65LA1:ZHB/G/A4PVHF060M1DQAU4918AH+CVDK.GH2IQUC6*2MGT1H7PDU2B1PJF7EKIIHC7DCT+PIVK +AW2Q3B992QYP1VNQHWQIXPK/KWTA+5IHI051RZP7C%VO7C4H8OSLDTQP5E1LL98J:KPO8O7FD4343:U4SQ5PAV9UQ0NSZU++RA3EALR$4HIJ44KLA2B+E6NMFYDL++QRJI%UC1 Q:S5:O9OH4-MC:ZEN%4PLJKCGZ8GSMJ987YT9*A4620YRDOEDG.0Q9C9A9J%IXPKYR91KO.:I*X2DUNO$LA2M9MOO0NBR5IG9/0G0SMH3W*$DUP7M2DLPDU NTJ4I20+H7U9H8I2P577VHS30HDOZSQ$.H.GQL+4KHR+ 1P60G90TFBT12AM4WKK.$7U3Q3 B$WV8SDI2G+ZSK0RT09Z$RFCR/2OY*VN+0083*6M.5R %G6*M98T7-HIWK4RGC5H6*6BESV-TC A8LE74VNE8S:MX$EG/GK-DC5W0K6%B1",
        expiryDateTime: "2023-01-14T02:47:18.714Z",
      },
      {
        dose: 3,
        vaccineCode: "3339641000133109",
        type: "VAC",
        qr: "HC1:6BFI%G:N9+J2/O23$KI06NH9E51359T0DH6SQJJ1KJ-QRP15KU6J*4Q8K$PNS9OPVQTM6%+C2OJ*L1A+H/G5:QBL2JA726:R3S82-57%G.%Q1L7.LQJP9:RSI1T-/LF-JLZP-U7.MN6.R3WVK+U-RSVDSNFHAESAIH52U/TN$MPLTR3B0R8W9KQZFOM+3Q59*X3ZPJU4DK*T.IM2:LG.IF9AIXJ1+IIJL:YBC/9QXJ*G20.IZ 7Q926CGMD4U6TT2RISEBFP2DJOYAQGJ5N7OX9JAL1$HAUEV50GS4H69G05DXL2HDNWEZV24KHJ7861FQOE/G8%FAQG1:-A$LO43D0$0:R1.AIFQBJ$AQO2Y2355A6KG%:SPNI/R7 DFN3F75AXOJM40JWFZW5M37*5I2TPNY4U+B/2TYW1Z9J0563 5ZZI6HLCJ12HR*EGNOBDBA5G9  OHTPU5AM07AK2-YPHV53GIB/6-.9UFMV*OL9CQ55C700 O$-48HCBBJ5GHC20$XC8XUMG2+KK2$C$MT$P5DA9YH99*L XI7DEERT:%0C%LF%4CJR:SG %MGMKQ9EOGR223:FR*FM6$9S7JHBLP4TB83MH7+WFDDR*PPG7OP7H:$PAY67EFP-HOUQK$8I3N7N8/A6Q5K6SBMGD4XA$ F4P5Y*DI*B7B1EM0N12WJ0R04HM6G05$BH3 M-HL443YW7A6HP:3E-CCOI3XT7:S6Q9P0MAN448Q0RBZUHZQ6*20Q 1.R4*7EHILPL8570R6J:$A9*0168IKI9L5YN0/07:N0HGBETVSCN3W8*MT2T2 TESEOA-LUJM:+IL4AF2KCERK:7WSN7QSJV3/-0K.Q3T85GJWGOMLD8L7VC70H2RV659GYXAF2PIW6LPEXDE7.P2PHV33TR1W3Q CEI/VFVJKV1JHNLCP-8T+PNQ6DT9REPM1$U7JTL9TB1OABM+GRX7JB04S:FWQQ23KI+772T*IGW+HD8Q46SX B9V6TPT$TL39NZ:0+%F35V+YN+H1",
        expiryDateTime: "2023-01-14T02:47:18.714Z",
      },
      {
        dose: 4,
        vaccineCode: "3339641000133109",
        type: "VAC",
        qr: "HC1:6BFI%G2N76WQUP25*QPU2 EGI78$I9B*1UIF.QV8*T768W8P/N4L$K 7L*5NWQE7ZQ14PPTKES8FO1LTAK.I*427KH/O1B598JT:GOSLL3E1D8C%BC:Y0$BEDLA BFUQNR7LE5UKFVXASDIRVYB:7KVSN4K45:3EN7U/EHT5D%FGMGSTV+%H:HUV7L-KEPCTZ8V*TSSM7D DEXRQSCDMEV*7*VLO*45%RK.MPSDDRP9+DB4K04OEW4:RAPTUU5V/HN:$K%PIE870QJ9KE/3Q$*EP O5GPVB6K228U2XVI%DU%JCE8PBZ6DSL3VGLXT1UPI94V0R:NHY/BXTSEL1FAG*A01GR* 71TL.D5*YC+UALJI-R8E2QFD6CU8:*E.11 K0PEIHAI7O535AWUKUFEJZ9B0781PJMILW5CUAE.ABNJRWL5GG .2O$O%GG2T1$Q5-120HJ8.JTX9$G2N 23KJM DJ0J*2NGHODPR1TG9BJV1AFQ5$CWMHHK:O1B90OSOL3HB5 0WZMH*DMK*4ZPH%Q8FDDZBH$D3CF4N94A7O0S8+D9 46NRD*W77SC* 8N09N+GG2PWSGG3GU 9.YKX25JLRGPM%$VC98WXGUZ44O28UL*5FO-S3UD/XSM52HU5*YA3 U$RNB.BPRD7KSI.E014RJO:89%82 S8Y.H SC6BDP35N2D J40*U.BTG544P42SCZ83OURISG0TUSC5L-17XK+NVP:9UFDED3PLAU61VGTT78G72DH05GK-V9DP41H2/*QP*VE39JX7W 9.DM9TTEC8EQ4P14ZKBGONV0I6/P90ORZ1M/NG/43SJXS2P+IPSC7PL2FITGHXBA:T1BC5FP1V31+7C-3BZKNOWGZNC0W4VNC+YS+AK8QCYNL%A8F94:0I5H8807$*6/7OULN/4OYBMD.N$$KU-KT$V%ZUR0S5XN:VVKHL62GAKVK+RCXMA4G1BUT0S2RVPHPRNO/XV45EAIHTHL$U0O8SYDMDUQZV11SAO1",
        expiryDateTime: "2023-01-14T02:47:18.714Z",
      },
    ],
  },
  logo: mohHeader,
};
