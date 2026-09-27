import { useTranslation } from 'react-i18next'

export const useAppTranslation = (namespace?: string) => useTranslation(namespace ? [namespace, 'common'] : 'common')
