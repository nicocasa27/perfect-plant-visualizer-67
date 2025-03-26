
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from './locales/en.json';
import plTranslation from './locales/pl.json';
import deTranslation from './locales/de.json';
import svTranslation from './locales/sv.json';

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      pl: {
        translation: plTranslation
      },
      de: {
        translation: deTranslation
      },
      sv: {
        translation: svTranslation
      }
    },
    fallbackLng: 'en',
    detection: {
      order: ['path', 'navigator', 'localStorage'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
