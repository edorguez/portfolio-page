import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './en';
import { es } from './es';

export const defaultNS = 'translation';

export const resources = {
  en: { translation: en },
  es: { translation: es },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'lang',
    },
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng.split('-')[0] ?? 'en';
});

document.documentElement.lang = i18n.language.split('-')[0] ?? 'en';

export default i18n;
