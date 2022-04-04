import { v2 } from "@govtechsg/open-attestation";
import { NotarisedHealthCert } from "../types";

export const healthCertMultiQrSample: NotarisedHealthCert = {
  id: "TEST001",
  name: "HealthCert",
  validFrom: "2020-11-20",
  fhirVersion: "4.0.1",
  fhirBundle: {
    resourceType: "Bundle",
    type: "collection",
    entry: [
      {
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
            value: "E7831177G",
          },
          {
            type: {
              text: "NRIC",
            },
            value: "S9098989Z",
          },
        ],
        name: [
          {
            text: "Tan Chen Chen",
          },
        ],
        gender: "female",
        birthDate: "1990-01-15",
      },
      {
        resourceType: "Specimen",
        type: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "258500001",
              display: "Nasopharyngeal swab",
            },
          ],
        },
        collection: {
          collectedDateTime: "2020-09-27T06:15:00Z",
        },
      },
      {
        resourceType: "Observation",
        identifier: [
          {
            value: "123456789",
            type: "ACSN",
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "94531-1",
              display:
                "Reverse transcription polymerase chain reaction (rRT-PCR) test",
            },
          ],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "260385009",
              display: "Negative",
            },
          ],
        },
        effectiveDateTime: "2020-09-28T06:15:00Z",
        status: "final",
        performer: {
          name: [
            {
              text: "Dr Michael Lim",
            },
          ],
        },
        qualification: [
          {
            identifier: "MCR 123214",
            issuer: "MOH",
          },
        ],
      },
      {
        resourceType: "Organization",
        name: "MacRitchie Medical Clinic",
        type: "Licensed Healthcare Provider",
        endpoint: {
          address: "https://www.macritchieclinic.com.sg",
        },
        contact: {
          telecom: [
            {
              system: "phone",
              value: "+6563113111",
            },
          ],
          address: {
            type: "physical",
            use: "work",
            text: "MacRitchie Hospital Thomson Road Singapore 123000",
          },
        },
      },
      {
        resourceType: "Organization",
        name: "MacRitchie Laboratory",
        type: "Accredited Laboratory",
        contact: {
          telecom: [
            {
              system: "phone",
              value: "+6562711188",
            },
          ],
          address: {
            type: "physical",
            use: "work",
            text: "2 Thomson Avenue 4 Singapore 098888",
          },
        },
      },
    ],
  },
  issuers: [
    {
      name: "GovTech",
      documentStore: "0x8Fc57204c35fb9317D91285eF52D6b892EC08cD3",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "example.openattestation.com",
      },
    },
  ],
  $template: {
    name: "HEALTH_CERT",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "https://healthcert.renderer.moh.gov.sg/",
  },
  notarisationMetadata: {
    reference: "ABC-123-XYZ",
    notarisedOn: "2020-09-27T06:15:00Z",
    passportNumber: "E7831177G",
    url: "https://action.openattestation.com/?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fgallery.openattestation.com%2Fstatic%2Fdocuments%2Fhealthcerts-memo-notarised.json%22%2C%22permittedActions%22%3A%5B%22VIEW%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fdev.opencerts.io%22%7D%7D",
    signedEuHealthCerts: [
      {
        type: "PCR",
        qr: "HC1:6BF* DJZ9$$QCR2K7C.OD5L0AGVJR22QGZ$U4B6+:4$7BA J067XIP2JC713H:N D9A$4APU65J9L0332-FVGT82A4X73Y.Q$P2CENLLSF5GM41EJE JG%T0K2N0%QNGELCERGGLAQOTE0GF/VLOGKG/J8P206L7PB+2KA046C5$BP:DBAJT23W5GBRIN%UK-/B-/K0HFXU7$YTQJ2T8NX8GQS98IULMPUAOEZFI$TM2GQ49WXDFP1YA6PY5870PN62AA3%R2I6ZI1T8D0V54P3F$CN0EQHMUQBH82*3H9D0CLJBNK2%1XFOV6T/-C90Q8WCWC2WL9DAPYH65L2H5F.975.URYAOELYKILEHB+3:DJ:Q6SGS96TOCSV$BPKTJ7ERS5M9HX8L+K0RDF300DKP6SR677$G2VZILYBYGA$M2PM9$RK$NS1VF+BA6V7DX5CD4799M 0C7HBV8BSTL7IS51483O%EWCD6IV/-R82H*RDLTH+U7-P7/FW+36PF2595GQG S66OPMZA7CBKB4MMG1M53HNXEUE+22M0D7UTY19GNJJE8T8A059QHH72+MVFXOJ%TG*5%KARLA3QOEU6/IRZ9CX397ON%LK$15Y7S496Z7H+QLFBOL/A%*N9ARX6SF%DHK0+WNK6LI+QY5WS5QOCQ$8I.O9Z2UA02 5IPN3E5NZ0BQ S.TI93BC2D9I8/4OA5W27JYJN",
        expiryDateTime: "2021-12-25T01:27:50.263Z",
        appleCovidCardUrl:
          "https://redirect.health.apple.com/EU-DCC/#6BF*%20DJZ9%24%24QCR2K7C.OD5L0AGVJR22QGZ%24U4B6%2B%3A4%247BA%20J067XIP2JC713H%3AN%20D9A%244APU65J9L0332-FVGT82A4X73Y.Q%24P2CENLLSF5GM41EJE%20JG%25T0K2N0%25QNGELCERGGLAQOTE0GF%2FVLOGKG%2FJ8P206L7PB%2B2KA046C5%24BP%3ADBAJT23W5GBRIN%25UK-%2FB-%2FK0HFXU7%24YTQJ2T8NX8GQS98IULMPUAOEZFI%24TM2GQ49WXDFP1YA6PY5870PN62AA3%25R2I6ZI1T8D0V54P3F%24CN0EQHMUQBH82*3H9D0CLJBNK2%251XFOV6T%2F-C90Q8WCWC2WL9DAPYH65L2H5F.975.URYAOELYKILEHB%2B3%3ADJ%3AQ6SGS96TOCSV%24BPKTJ7ERS5M9HX8L%2BK0RDF300DKP6SR677%24G2VZILYBYGA%24M2PM9%24RK%24NS1VF%2BBA6V7DX5CD4799M%200C7HBV8BSTL7IS51483O%25EWCD6IV%2F-R82H*RDLTH%2BU7-P7%2FFW%2B36PF2595GQG%20S66OPMZA7CBKB4MMG1M53HNXEUE%2B22M0D7UTY19GNJJE8T8A059QHH72%2BMVFXOJ%25TG*5%25KARLA3QOEU6%2FIRZ9CX397ON%25LK%2415Y7S496Z7H%2BQLFBOL%2FA%25*N9ARX6SF%25DHK0%2BWNK6LI%2BQY5WS5QOCQ%248I.O9Z2UA02%205IPN3E5NZ0BQ%20S.TI93BC2D9I8%2F4OA5W27JYJN",
      },
    ],
  },
  logo: "",
};
