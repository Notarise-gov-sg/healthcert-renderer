import { Immunization, Location } from "../../types";
import { SimpleImmunizationObject } from "../../memo/vacV1Memo";
import { isoToDateOnlyString } from "../../../../util/datetime";

export const simplifyImmunizationObjectWithLocation: (
  locations: Location[]
) => (i: Immunization) => SimpleImmunizationObject = locations => {
  return (immunization: Immunization): SimpleImmunizationObject => ({
    vaccineCode: immunization.vaccineCode.coding[0].code,
    vaccineName: immunization.vaccineCode.coding[0].display,
    vaccineLot: immunization.lotNumber,
    vaccinationDate: isoToDateOnlyString(immunization.occurrenceDateTime),
    vaccinationLocation: locations.find(l => l.fullUrl === immunization.location.reference)?.name || "",
    vaccinationCountry: locations.find(l => l.fullUrl === immunization.location.reference)?.address.country || "",
    performer: immunization.performer?.[0].actor.display || ""
  });
};
