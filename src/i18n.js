import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import eng from "./localization/eng.json";
import jp from "./localization/jp.json";
import uz from "./localization/uz.json";

const resources = {
  jp: {
    translation: jp,
  },
  uz: {
    translation: uz,
  },
  en: {
    translation: eng,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
