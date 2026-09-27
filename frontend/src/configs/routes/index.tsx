import { IconApps, IconShield } from '@tabler/icons-react'
import { createBrowserRouter, Navigate, type RouteObject } from 'react-router-dom'
import { AppLayout } from '@components/shared/layout'
import { DashboardPage, ReportsPage, SettingsPage, UsersPage } from '@pages'
import type { NavGroup } from '@app-types/system'


export const MenuGroup: NavGroup[] = [
  {
    group: 'General',
    icon: IconApps,
    items: [
      { label: 'Dashboard', path: '/dashboard', element: <DashboardPage /> },
      { label: 'Reports', path: '/reports', element: <ReportsPage /> },
    ],
  },
  {
    group: 'Admin',
    icon: IconShield,
    items: [
      { label: 'Users', path: '/admin/users', element: <UsersPage /> },
      { label: 'Settings', path: '/admin/settings', element: <SettingsPage /> },
    ],
  },
]

// Flatten nav items into router routes (child paths are relative to '/').
const childRoutes: RouteObject[] = MenuGroup.flatMap((g) =>
  g.items.map((i) => ({ path: i.path.replace(/^\//, ''), element: i.element })),
)

const RootLayout = () => <AppLayout />

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <Navigate to="/dashboard" replace /> }, ...childRoutes],
  },
])
