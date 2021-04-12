import { healthcert } from "@govtechsg/oa-schemata";
import { v2 } from "@govtechsg/open-attestation";
import { NotarisedHealthCert } from "../types";
import mohHeader from "./moh-header.base64.txt";

const { FhirBundleType, Gender, FhirBundleResourceType, EntryResourceType } = healthcert;

export const vaccinationCertSample: NotarisedHealthCert = {
  id: "TEST001",
  name: "VaccinationCert",
  validFrom: "2020-11-20",
  fhirVersion: "4.0.1",
  fhirBundle: {
    resourceType: FhirBundleResourceType.Bundle,
    type: FhirBundleType.Collection,
    entry: [
      {
        fullUrl: "urn:uuid:c01d556a-caba-44e8-9ca9-811e8fcbf7ee",
        resourceType: EntryResourceType.Patient,
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/patient-nationality",
            code: {
              text: "SG"
            }
          }
        ],
        identifier: [
          {
            type: "PPN",
            value: "E7831177G"
          },
          {
            type: {
              text: "NRIC"
            },
            value: "S9098989Z"
          }
        ],
        name: [
          {
            text: "Tan Chen Chen"
          }
        ],
        gender: Gender.Female,
        birthDate: "1990-01-15"
      },
      {
        fullUrl: "urn:uuid:a9453181-6682-47f6-afef-8faa299d6e7f",
        resourceType: "Location",
        id: "HCI000",
        name: "Vaccination site approved by Ministry of Health, Singapore [HCI000]",
        address: {
          country: "SG"
        }
      },
      {
        fullUrl: "urn:uuid:830f6633-4ef5-441d-966d-777ca67af9d7",
        resourceType: "Location",
        id: "HCI111",
        name: "Vaccination site approved by Ministry of Health, Singapore [HCI111]",
        address: {
          country: "SG"
        }
      },
      {
        fullUrl: "urn:uuid:fad2b583-e1ae-4bd9-864b-4f009bff826b",
        resourceType: "Immunization",
        vaccineCode: {
          coding: [
            {
              system: "http://standards.ihis.com.sg",
              code: "1234567890123456",
              display: "PFIZER-BIONTECH COVID-19 Vaccine [Tozinameran] Injection"
            }
          ]
        },
        lotNumber: "Foo12345",
        occurrenceDateTime: "2021-02-02",
        patient: {
          reference: "urn:uuid:c01d556a-caba-44e8-9ca9-811e8fcbf7ee"
        },
        location: {
          reference: "urn:uuid:a9453181-6682-47f6-afef-8faa299d6e7f"
        }
      },
      {
        fullUrl: "urn:uuid:fad2b583-e1ae-4bd9-864b-4f009bff826b",
        resourceType: "Immunization",
        vaccineCode: {
          coding: [
            {
              system: "http://standards.ihis.com.sg",
              code: "1234567890123456",
              display: "PFIZER-BIONTECH COVID-19 Vaccine [Tozinameran] Injection"
            }
          ]
        },
        lotNumber: "Bar98765",
        occurrenceDateTime: "2021-03-03",
        patient: {
          reference: "urn:uuid:c01d556a-caba-44e8-9ca9-811e8fcbf7ee"
        },
        location: {
          reference: "urn:uuid:830f6633-4ef5-441d-966d-777ca67af9d7"
        }
      }
    ]
  },
  issuers: [
    {
      name: "GovTech",
      documentStore: "0x8Fc57204c35fb9317D91285eF52D6b892EC08cD3",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "example.openattestation.com"
      }
    }
  ],
  $template: {
    name: "VACCINATION_CERT",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "https://healthcert.renderer.moh.gov.sg/"
  },
  notarisationMetadata: {
    reference: "ABC-123-XYZ",
    notarisedOn: "2021-03-03T06:15:00Z",
    passportNumber: "E7831177G",
    url:
      "https://action.openattestation.com/?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fgallery.openattestation.com%2Fstatic%2Fdocuments%2Fhealthcerts-memo-notarised.json%22%2C%22permittedActions%22%3A%5B%22VIEW%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fdev.opencerts.io%22%7D%7D"
  },
  logo: mohHeader
};
