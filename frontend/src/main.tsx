import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '@mantine/core/styles.css'
import '@configs/langs/i18n.ts'
import { AppThemeProvider } from '@components/shared'
import { router } from '@configs/routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  </StrictMode>,
)
