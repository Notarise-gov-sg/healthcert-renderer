import nationalities from "i18n-nationality";
import englishNationalities from "i18n-nationality/langs/en.json";
nationalities.registerLocale(englishNationalities);

const customNationality: { [key: string]: string } = {
  XXA: "Stateless Person",
  XXB: "Refugee"
};

const getNationality = (alpha2orAlpha3orNumeric = ""): string => {
  const code = alpha2orAlpha3orNumeric.toUpperCase();

  if (customNationality.hasOwnProperty(code)) {
    return customNationality[code];
  } else {
    return nationalities.getName(code, "en");
  }
};

export { getNationality };