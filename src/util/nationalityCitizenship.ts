import countries from "@notarise-gov-sg/i18n-iso-countries";
import englishCountries from "@notarise-gov-sg/i18n-iso-countries/langs/en.json";
countries.registerLocale(englishCountries);

export const customNationality: { [key: string]: string } = {
  XXA: "Stateless Person",
  XXB: "Refugee",
  XXC: "Refugee",
};

const getNationalityCitizenship = (alpha2orAlpha3orNumeric = ""): string => {
  const code = alpha2orAlpha3orNumeric.toUpperCase();

  if (customNationality.hasOwnProperty(code)) {
    return customNationality[code];
  } else {
    return countries.getName(code, "en");
  }
};

export { getNationalityCitizenship };
