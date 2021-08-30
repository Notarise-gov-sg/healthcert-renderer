import { Immunization, Location } from "../../types";
import { SimpleImmunizationObject } from "../../memo/vacV1Memo";

const SG_LOCALE = "en-sg";
const dateFormatter = new Intl.DateTimeFormat(SG_LOCALE, {
  /**
   * Should not respect browser timezone but rather,
   * force "UTC" timezone because dates in vacc certs do not have time
   **/
  timeZone: "UTC",
  month: "long",
  day: "numeric",
  year: "numeric"
});
export const formatDate = (iso?: string): string => (iso ? dateFormatter.format(new Date(iso)) : "N/A");

export const simplifyImmunizationObjectWithLocation: (
  locations: Location[]
) => (i: Immunization) => SimpleImmunizationObject = locations => {
  return (immunization: Immunization): SimpleImmunizationObject => ({
    vaccineName: immunization.vaccineCode.coding[0].display,
    vaccineLot: immunization.lotNumber,
    vaccinationDate: formatDate(immunization.occurrenceDateTime),
    vaccinationLocation: locations.find(l => l.fullUrl === immunization.location.reference)?.name || "",
    vaccinationCountry: locations.find(l => l.fullUrl === immunization.location.reference)?.address.country || "",
    performer: immunization.performer?.[0].actor.display || ""
  });
};
