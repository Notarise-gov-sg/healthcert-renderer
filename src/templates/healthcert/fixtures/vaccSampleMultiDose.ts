import { v2 } from "@govtechsg/open-attestation";
import { NotarisedHealthCert } from "../types";
import mohHeader from "./moh-header.base64.txt";

export const vaccinationCertSample: NotarisedHealthCert = {
  id: "3749314a-0f99-432d-9b9e-4d9446bff38c",
  name: "HealthCert",
  validFrom: "2021-03-30T03:22:06.031Z",
  fhirVersion: "4.0.1",
  fhirBundle: {
    resourceType: "Bundle",
    type: "collection",
    entry: [
      {
        fullUrl: "urn:uuid:824ea5fe-3b1f-4ec2-bde0-40e62d476ef3",
        resourceType: "Patient",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/patient-nationality",
            code: {
              text: "SG",
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
        gender: "female",
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
              code: "1234567890123456",
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
              code: "1234567890123456",
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
  },
  logo: mohHeader,
};
