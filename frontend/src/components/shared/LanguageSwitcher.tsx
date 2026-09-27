import { Select } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES } from '@configs/langs/i18n'

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()
  return (
    <Select
      aria-label={t('language.label')}
      value={i18n.language}
      onChange={(value) => value && i18n.changeLanguage(value)}
      data={SUPPORTED_LANGUAGES.map((lng) => ({
        value: lng,
        label: t(`language.${lng}`),
      }))}
      allowDeselect={false}
      w={140}
    />
  )
}
