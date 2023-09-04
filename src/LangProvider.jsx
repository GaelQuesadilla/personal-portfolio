import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";
import global_es from "./langs/es/global.json";
import global_en from "./langs/en/global.json";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

export const LangProvider = ({ children, ...props }) => {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};

export const globals = { global_es, global_en };
