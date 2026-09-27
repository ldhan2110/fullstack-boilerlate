import { AppTheme } from '@configs/themes/app.themes'
import { MantineProvider } from '@mantine/core'
import type { ReactNode } from 'react'

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  return <MantineProvider theme={AppTheme}>{children}</MantineProvider>
}
