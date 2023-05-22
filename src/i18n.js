import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import plTranslation from "./locales/pl/translation.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      pl: {
        translation: plTranslation,
      },
    },
    lng: "pl",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
