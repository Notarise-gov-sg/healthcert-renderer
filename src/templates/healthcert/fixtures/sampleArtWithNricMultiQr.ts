import { v2 } from "@govtechsg/open-attestation";
import { NotarisedHealthCert } from "../types";

export const healthCertMultiQrSample: NotarisedHealthCert = {
  id: "TEST001",
  name: "HealthCert",
  validFrom: "2020-11-20T06:43:12.152Z",
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
              code: "697989009",
              display: "Anterior nares swab",
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
              code: "97097-0",
              display:
                "SARS-CoV-2 (COVID-19) Ag [Presence] in Upper respiratory specimen by Rapid immunoassay",
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
        type: "ART",
        qr: "HC1:6BFOXN%TSMAHN-HWWK2J2YWO4VKY.R/R8C.E4FCCJ9.4E:-P .IRFIR:P1T2B0E/GPWBI*EDUDBQEAJJKKKMEC8.-BP7U3-SY$N- RE09+K3C.1X31SZJ:A45OI9YI:8D+FD%PD5DL3ADDAB*CNAHLW 70SO:GOLIROGO3T5ZXKWUPWGO8IQ/HQBK8M47:/6F0PQHPE65V776K82HPPEPHCR6W95EPT*ON*O0IQJSP/88ECOK594%I7ZC/FJ:439J3323M*4E303SVF 4-$C4R4QWCKJ523LXTC:15 35GBTV5T2$4SZ46J0$7KGDB*C4TM19:2UP20J5/5LEBFD-48YI*452P057TG.4Q$S1-K0$4D4DB%05PN8$G5HB%UNPA7ME75J7TEN 8E6/DEF95PIEQKHT61ESJMIXKMXSP+UPCB96PPK+9SPU0VLDCGG-RI64OGO0F1G%UON1:QKDC1%SHSIG7/IY.I%*4$%2/SNJI0+PD6NJDKBRPASCACIA3XD+5MDS1O*P8K9V/UTI65VSU01H4O:KTTHJ.JADZ9GOV3L9GR7$N9*IMTCTHS6PETQWL.$1*7Q:6AE75*QS$A2Z CHWI9/UCNO8BL72U//0:TIAENF+2H678P8Y3VF+1TX15GK",
        expiryDateTime: "2021-12-25T01:27:50.263Z",
        appleCovidCardUrl:
          "https://redirect.health.apple.com/EU-DCC/#6BFOXN%25TSMAHN-HWWK2J2YWO4VKY.R%2FR8C.E4FCCJ9.4E%3A-P%20.IRFIR%3AP1T2B0E%2FGPWBI*EDUDBQEAJJKKKMEC8.-BP7U3-SY%24N-%20RE09%2BK3C.1X31SZJ%3AA45OI9YI%3A8D%2BFD%25PD5DL3ADDAB*CNAHLW%2070SO%3AGOLIROGO3T5ZXKWUPWGO8IQ%2FHQBK8M47%3A%2F6F0PQHPE65V776K82HPPEPHCR6W95EPT*ON*O0IQJSP%2F88ECOK594%25I7ZC%2FFJ%3A439J3323M*4E303SVF%204-%24C4R4QWCKJ523LXTC%3A15%2035GBTV5T2%244SZ46J0%247KGDB*C4TM19%3A2UP20J5%2F5LEBFD-48YI*452P057TG.4Q%24S1-K0%244D4DB%2505PN8%24G5HB%25UNPA7ME75J7TEN%208E6%2FDEF95PIEQKHT61ESJMIXKMXSP%2BUPCB96PPK%2B9SPU0VLDCGG-RI64OGO0F1G%25UON1%3AQKDC1%25SHSIG7%2FIY.I%25*4%24%252%2FSNJI0%2BPD6NJDKBRPASCACIA3XD%2B5MDS1O*P8K9V%2FUTI65VSU01H4O%3AKTTHJ.JADZ9GOV3L9GR7%24N9*IMTCTHS6PETQWL.%241*7Q%3A6AE75*QS%24A2Z%20CHWI9%2FUCNO8BL72U%2F%2F0%3ATIAENF%2B2H678P8Y3VF%2B1TX15GK",
      },
    ],
  },
  logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAADICAMAAAApx+PaAAAAM1BMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzeCmiAAAAAEHRSTlMAQL+A7xAgn2DP3zBwr1CPEl+I/QAABwdJREFUeNrsnd122yoQRvkHISHN+z/tyUk9oTECQ1bTBc23byNs0B5GIDARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAk+Ik+Idx4g5N4B9GQ/rPA9J/IPfSgwL/MEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwP5ZPoP5r7FJKAf7cufBihPNSkX5hlA9u+DsP7dX/JK1P2VPiSIoebErLwVh5Zx+8C1Y22YtP0Fpf6hdea+mq1Wlixfej6RcDxj09swXbbeBQpijug20aj/SE8bvo5hEuavAuSKpQfJxTG91gUrCV6jSQE0oPke4wuke705EqpLNWxtMtSk4jvXGld+tLlxvVMNnakD7mEndYTVWSnV860WUXl34RMy7BempyGzN7pAbmXEA6bfvK0u32uTFKKVM0r0Yw1MTcFvp8iVLPD0+9gHQy+7rSf3eejp2HuFcsmldiEz0FzKXfSRw3qe08Xqd9dP6QKONnku4lG3NSb/RBtKtKt1ttdBJiYb2VI7brc7tc8IYotJzHUB0c+O+T3rTQuLKsZRqpzkTS7dZI4vo+qJndEGO8Ezecyjac6/ITN2KOWaULIT/aLdeUnqpdi7VW2+Kyc29FL3s7e3hi5LTSheWWpyWlH4XzmvWjniOiFN3YWDivWI92Wuk5ct2C0p3Jzl9YN66WI5IV/VyF86r1a17pH5UMC0pX/DwXVU524Ks5YgDZmL4zGz1w80p33Pj1pMvci+tc2cFIjmhH2dWVfuaVLuLjy9eTzgqOrqewv0vum/1KR4+2a6Dh5pXO7V9O+s4KRJPADuxNjtjFCCk/CltEzgfzSterSvdZQZeDoyyqxQguR1lXmBlI/9PSebZpbOe8bivt2bFK9YaK4eHe7NLNatLP3qGYLfL71RoMvB6Xu96J3TWt9LToQM5zm8YfxbHIESPZXXW/tovTSo+PqFxNeswZqjO/X09OvBgi9OcHw7llUukcv+di0rneqf99uXoKglMMwall7x/my0mlP5piVnv3fuZ+193xnpTYLz3SjejPLXpO6TtXbzXpfIUceJHmPsXAJsbI+aL7fvsppVsOX7uadJ9FvuT63PxsZAQ3UMxygLyWvsk6/luku40fb8ttolDFFb1ZQQ6/mRkv1iW9i1J6C/1aejAcvQPVmUt6FB2cn26JzDO4TsaLcWeaTbo7In04X08696XxTnrkmzGCHimmJpLuNaPi71f+KOkte5IK9OrS74ingPSfJd1oISD9Z0m/hPhB0o+/Ld3MMGUrSU68s9yUzXSO3suhW+Bh+Jj0oyz2snZqgpczd5iwpvRvmKfXpY/P0yeSfsgHOhliwtLS7cBSiR1aZFP30q+Bt3fXbK9hQ2Tr+4rSc+8dflXCO2l6pY+PIs5pF1xs4kmbXVB6z0JWRRdH+6B0w8VeoydeWlV84xaULnvX08vEzNn+HJOu+tfT1cSbKPLewvWkc/c1/Yts4SlJ+DHpunsF3069XSrw7VhQel4gHN3QuHO8jEk/O8cC+Uo/pXR+vG0LSn/ZXxlXyIoc60PSheldwvdzb4HW3I71pO/0wHYqOIp8v41JT52TNjf5jx24fmE96WLrG7/bsoM6ehCGpJ8s0/ZV3k8qnTOdX1B66HOgb4b5KRftl54fC7ovyvZZpXt6Jy4o3ZqedOvMTdslPUhD0rlWxvVMFtS0P1UOnPvWk84Xdb0DIXW/kHiMSLem7rMMKDmt9J0HmgtK/3Bg7GhgOGLCgPT8afp1pdTEx4886ngtKF2c9OpsgVDbOKCJOQaki+1VrFi+wriJpfNa/orShcrW286jLYsyyfZLl8SEtnM65j1SLH+wXVG6jc0DYI986FujKJnQLV0c1Mrw7sO5n/fwwDfkoj9gfD4ozhyFAUVMqBRlYrCd0oUnRrkiyEzOPFNLFzTzT5VlBXd3Om8ozkBtOOdDPZkU9k9/PCpLkHarnZUfIhXOv0/6ISv0SOcvj/1b9tzfkN5G3x7ebdIh34WfF6tpDrrYK6PUpd/4fJS3bpXartOJN+SRDBXOv0l6m6EzZ1z35lw9k3RO01WMFBU4H4+21lMbb8Xs0vlvYVHp3PUqKCcaODUsnbNLSR5cTC+dZ+ppVelCnKa117eNTNQkSVFiU2tP+QrSOVvZZaULqwvtPCh/jdMb3RN99QOkojv8LsQS0k/O7+tKf+NMT96NP0UvLvinRm9Jn24wVrbDCbGIdF4xVBNJ/xJSe6Ueo/Bj/9I/7Dy0PvrnJy5opSIRRZX0aQUAAPzX3h3UAACAQAx7YAD/anFBCNdamIABAAAAAAAAAAAAAAAAAAAAAAAAAADAmmoeK9HziB5I9EBXnx8AAAAAAAAAALBmAIZKmzWInxyOAAAAAElFTkSuQmCC",
};
