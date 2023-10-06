import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';
import { LocalesVariantsENUM } from './models';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: LocalesVariantsENUM.En,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
