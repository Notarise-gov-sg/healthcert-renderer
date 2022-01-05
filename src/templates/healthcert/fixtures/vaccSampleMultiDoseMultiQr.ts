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
        occurrenceDateTime: "2021-01-14",
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
              code: "3339641000133109",
              display:
                "PFIZER-BIONTECH COVID-19 Vaccine [Tozinameran] Injection",
            },
          ],
        },
        lotNumber: "Lot12345",
        occurrenceDateTime: "2021-02-14",
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
        occurrenceDateTime: "2021-03-03",
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
        occurrenceDateTime: "2021-05-03",
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
                value: "2021-03-17",
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
        qr: "HC1:6BFK%GMY78J2H23YV0SHGOJ3-C0CKG$634NCPZF0TNOWA+%SCI4%R0ITKOL1$BQN-UL4T$$RHCD-Q5KN1D$2:DCUAKDZGZ8HLC2UM0J105+J%BJICKJE01A2MN9MC1+TQMEVWJFRZV83CD T8+RM*O9M0-5I6XF+1I$AMHS7MI372OF*78NP%.A:5FQOJ3UNQODMUH.MDU0MN4AEYPRKA 1J17N10P0RQPN5C3GHPUQNTO6AIZA-IG5ZQG2H8VV9CBS8JTT9:O5SJB.BFS*AR9G5904D0HTR48WKLP63DRCK7Z2G*0E2NUA4E1JKYS7DMDTFQ3MICC1FGC*QLKP+ZMI4M-25P30Z500+EH:VCVHQ63$F6-U27T0SU0O3TZYLNXOAGTLNH$ SGBE:KA8-QRSE5Q1RKJMR97SRK3K.L3FHK J1DX2SK06TC/ 2Z36IHPTQ1EVPP$P6K889PK75XDN09SS+NCSOAE7A*C 92 SN*BMIE1VUQ4P4 -NDJU.9SQT7SOD+CGM64O7DBQGZ-QMCF76E-45I/0-R5VIBTWGGJ38Y1AZ00/LPUQUDRFA1UF46P7U$K5$TBYTYS7*CQ.UL1EKG-8$-UAPJSVFA 8GMACLP2RBIB4Z CQ5KFET%QESHLAFRBMNI8NM3G:CK--2HR4.H8X-1Y N9AJ6LC% DG*HV52F0HOL4LAFZQ8NXQEQTTB6P-0*5L:UFL8L8ULKOO%5A4TB%X0PDNKC1$-AD$S084.U1JJR5L5.VG31A.LOB3IZC0TPRPAKS.U513:$G7AC5/AWGRQK9M9LJFO15IJ:6B4GN%M472:VH LJ%O3SS65L27W3QFA696DAR8YABN6J647AG*3L+CL*7CDUS2%O S0/LQ2UO-PVERE%3AP2TLCR$-LY5ELRPN-QRSGO9P%TSK/31CSK6O82T/ZV/9K%ZUF137/BV+0T/EE13+Z5D9Q1+PC2C8/B1%RV9N P8B9N1VJL90JD4C1",
        expiryDateTime: "2022-12-09T01:27:50.263Z",
      },
      {
        dose: 1,
        vaccineCode: "3339641000133109",
        type: "VAC",
        qr: "HC1:6BFK%GMY78J2H23YV0SHGOJ3-C0CKG$634NCPZF0TNOWA+%SCI4%R0ITKOL1$BQN-UL4T$$RHCD-Q5KN1D$2:DCUAKDZGZ8HLC2UM0J105+J%BJICKJE01A2MN9MC1+TQMEVWJFRZV83CD T8+RM*O9M0-5I6XF+1I$AMHS7MI372OF*78NP%.A:5FQOJ3UNQODMUH.MDU0MN4AEYPRKA 1J17N10P0RQPN5C3GHPUQNTO6AIZA-IG5ZQG2H8VV9CBS8JTT9:O5SJB.BFS*AR9G5904D0HTR48WKLP63DRCK7Z2G*0E2NUA4E1JKYS7DMDTFQ3MICC1FGC*QLKP+ZMI4M-25P30Z500+EH:VCVHQ63$F6-U27T0SU0O3TZYLNXOAGTLNH$ SGBE:KA8-QRSE5Q1RKJMR97SRK3K.L3FHK J1DX2SK06TC/ 2Z36IHPTQ1EVPP$P6K889PK75XDN09SS+NCSOAE7A*C 92 SN*BMIE1VUQ4P4 -NDJU.9SQT7SOD+CGM64O7DBQGZ-QMCF76E-45I/0-R5VIBTWGGJ38Y1AZ00/LPUQUDRFA1UF46P7U$K5$TBYTYS7*CQ.UL1EKG-8$-UAPJSVFA 8GMACLP2RBIB4Z CQ5KFET%QESHLAFRBMNI8NM3G:CK--2HR4.H8X-1Y N9AJ6LC% DG*HV52F0HOL4LAFZQ8NXQEQTTB6P-0*5L:UFL8L8ULKOO%5A4TB%X0PDNKC1$-AD$S084.U1JJR5L5.VG31A.LOB3IZC0TPRPAKS.U513:$G7AC5/AWGRQK9M9LJFO15IJ:6B4GN%M472:VH LJ%O3SS65L27W3QFA696DAR8YABN6J647AG*3L+CL*7CDUS2%O S0/LQ2UO-PVERE%3AP2TLCR$-LY5ELRPN-QRSGO9P%TSK/31CSK6O82T/ZV/9K%ZUF137/BV+0T/EE13+Z5D9Q1+PC2C8/B1%RV9N P8B9N1VJL90JD4C1",
        expiryDateTime: "2022-12-09T01:27:50.263Z",
      },
      {
        dose: 2,
        vaccineCode: "3339641000133109",
        type: "VAC",
        qr: "HC1:6BFK%GAWPOJ2I23 /UG0K7A8O0CSPRC$7O.C-/EL.4%LBTU6+%QVY9I+3O9V5+PDYDY-4 9ESRJ.44.240$3M*Q1XA5N9C06O25BK0 F8C-BI6IZE1A254TA6E9*5SV5EJCPVZV:$UO.C4FVL%R5NCTIUUREL/3JWSPBNV$6W194UDVX78NPH:DESFZ1J1VJ$IDVP9FLBQBL%.5II59ME+0K%66V/K.RSOY7Z7DPPUR+TN58OEB2JGZIAGYQD+RH$AWSA .CI:QIY5Y%R1UP 48A705KGDTR7 VBY8PN7THG$ETLADJWSFL8WZEP7P:EC$9SBF3CBJF24% A6CCO EW/QB61K00XBGBSP/O7%G8EQOJQ2K 849S4752+UJ%DMOR.2G$O6:8UB.8+YJHU5TN9:30N:MJQ5%T6X9ASVE%KGIEPX5BQ883W2QF4D78U1LR66SSGIL7-MK0.E7 LIABVS2FC6+JLSDU1ITH 8K4G6*4%GNJJF9Y1KAA.OH7X7YZINO9Z QWDPT55Q$EM.0-NP*CDETVF42P0B3*4G/IZHIV AEYCQ JIG2.OF8KFUPHN66S.9X3MNTP/*D0-AM/DBV34XDX7H+*Q-IP1HJ884O1VW929ZIOSH7JK06EEC3*LF7M0NSCKWQMYR5VFZ36QXLM4VD:F*OPIZ50-80NB7K4.BKD828TR.0S++V5T3T6VBS00 P039CEACH56PL6Q1IH20D06EJ3RGVGPXXK%L9$GK199O4R:73ICE/25SS7C.85CT/WVC+Q 1K4NIC/TJ9BW3BL.8XGA-C5WAN3LKM3J0X3S1NEG4J82T92BM4*3PEF0*C9JLDQB3R*I+X22O1V59%8CQ3PPWA.36ENU1JC%.0L55PUP%-GOXQ5-B70CG3F61S:.NZ565 S847IZVZ/VF6PL.UQ3E14AD5GZFNQ0GPKU70Q% UZIJECFG$JF:F7VUASRYEV837+WF:BOG6GV8NHO6/90%Q834",
        expiryDateTime: "2022-12-09T01:27:50.263Z",
      },
      {
        dose: 3,
        vaccineCode: "3339641000133109",
        type: "VAC",
        qr: "HC1:6BFK%GAWPOJ2I23 /UG0K7A8O0CSPRC$7O.C-/EL.4%LBTU6+%QVY9I+3O9V5+PDYDY-4 9ESRJ.44.240$3M*Q1XA5N9C06O25BK0 F8C-BI6IZE1A254TA6E9*5SV5EJCPVZV:$UO.C4FVL%R5NCTIUUREL/3JWSPBNV$6W194UDVX78NPH:DESFZ1J1VJ$IDVP9FLBQBL%.5II59ME+0K%66V/K.RSOY7Z7DPPUR+TN58OEB2JGZIAGYQD+RH$AWSA .CI:QIY5Y%R1UP 48A705KGDTR7 VBY8PN7THG$ETLADJWSFL8WZEP7P:EC$9SBF3CBJF24% A6CCO EW/QB61K00XBGBSP/O7%G8EQOJQ2K 849S4752+UJ%DMOR.2G$O6:8UB.8+YJHU5TN9:30N:MJQ5%T6X9ASVE%KGIEPX5BQ883W2QF4D78U1LR66SSGIL7-MK0.E7 LIABVS2FC6+JLSDU1ITH 8K4G6*4%GNJJF9Y1KAA.OH7X7YZINO9Z QWDPT55Q$EM.0-NP*CDETVF42P0B3*4G/IZHIV AEYCQ JIG2.OF8KFUPHN66S.9X3MNTP/*D0-AM/DBV34XDX7H+*Q-IP1HJ884O1VW929ZIOSH7JK06EEC3*LF7M0NSCKWQMYR5VFZ36QXLM4VD:F*OPIZ50-80NB7K4.BKD828TR.0S++V5T3T6VBS00 P039CEACH56PL6Q1IH20D06EJ3RGVGPXXK%L9$GK199O4R:73ICE/25SS7C.85CT/WVC+Q 1K4NIC/TJ9BW3BL.8XGA-C5WAN3LKM3J0X3S1NEG4J82T92BM4*3PEF0*C9JLDQB3R*I+X22O1V59%8CQ3PPWA.36ENU1JC%.0L55PUP%-GOXQ5-B70CG3F61S:.NZ565 S847IZVZ/VF6PL.UQ3E14AD5GZFNQ0GPKU70Q% UZIJECFG$JF:F7VUASRYEV837+WF:BOG6GV8NHO6/90%Q834",
        expiryDateTime: "2022-12-09T01:27:50.263Z",
      },
    ],
  },
  logo: mohHeader,
};
