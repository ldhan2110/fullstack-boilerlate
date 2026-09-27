import i18n from 'i18next'
import type { Resource, ResourceKey } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

export const SUPPORTED_LANGUAGES = ['en', 'vi'] as const
export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number]

const STORAGE_KEY = 'app.language'
const DEFAULT_LANGUAGE: AppLanguage = 'en'

const modules = import.meta.glob('/src/locales/**/*.json', {
  eager: true,
  import: 'default',
})

export const resources: Resource = {}
for (const path in modules) {
  const match = path.match(/\/locales\/([^/]+)\/(.+)\.json$/)
  if (!match) continue
  const [, lang, ns] = match
  ;(resources[lang] ??= {})[ns] = modules[path] as ResourceKey
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: SUPPORTED_LANGUAGES,
    nonExplicitSupportedLngs: true, // 'en-US' -> 'en'
    fallbackLng: DEFAULT_LANGUAGE,
    defaultNS: 'common',
    fallbackNS: 'common', // bare keys resolve from common when missing in page ns
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: STORAGE_KEY,
      caches: ['localStorage'],
    },
  })

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
})
document.documentElement.lang = i18n.language

export default i18n
