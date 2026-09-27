import type { ComponentType, ReactNode } from 'react'

export const DATE_FORMATS = ['YYYY-MM-DD', 'MM-DD-YYYY', 'DD-MM-YYYY'] as const
export type DateFormat = (typeof DATE_FORMATS)[number]
export type IconType = ComponentType<{ size?: number }>

/** A leaf navigation entry: sidebar link + the page it routes to. */
export type NavItem = {
  label: string
  path: string
  element: ReactNode
}

/** A collapsible sidebar group of nav items. */
export type NavGroup = {
  group: string
  icon: IconType
  items: NavItem[]
}

/** Persisted app UI state. */
export type SidebarState = {
  expanded: boolean
}

export type SystemState = {
  darkMode: boolean
  dateFormat: DateFormat
  sidebar: SidebarState
}
