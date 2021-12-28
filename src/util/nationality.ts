import nationalities from "@notarise-gov-sg/i18n-nationality";
import englishNationalities from "@notarise-gov-sg/i18n-nationality/langs/en.json";
import { customNationality } from "./nationalityCitizenship";
nationalities.registerLocale(englishNationalities);

const getNationality = (alpha2orAlpha3orNumeric = ""): string => {
  const code = alpha2orAlpha3orNumeric.toUpperCase();

  if (customNationality.hasOwnProperty(code)) {
    return customNationality[code];
  } else {
    return nationalities.getName(code, "en");
  }
};

export { getNationality };
