import { AppTheme } from '@configs/themes/app.themes'
import { MantineProvider } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import { ModalsProvider } from '@mantine/modals'
import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppStore } from '@stores'
import 'dayjs/locale/vi'

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const { t, i18n } = useTranslation()
  const darkMode = useAppStore((s) => s.system.darkMode)
  return (
    <MantineProvider theme={AppTheme} forceColorScheme={darkMode ? 'dark' : 'light'}>
      <DatesProvider settings={{ locale: i18n.language }}>
        <ModalsProvider
          labels={{ confirm: t('actions.confirm'), cancel: t('actions.cancel') }}
        >
          {children}
        </ModalsProvider>
      </DatesProvider>
    </MantineProvider>
  )
}
