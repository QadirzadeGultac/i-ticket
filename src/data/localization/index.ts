import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import az from "./locales/az.json" with { type: "json" };
import en from "./locales/en.json" with { type: "json" };
import ru from "./locales/ru.json" with { type: "json" };

i18next
  .use(initReactI18next)
  .init({
    resources: {
      az: { translation: az },
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: "en",         // default dil
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
export const t = (key: string) => i18next.t(key);
