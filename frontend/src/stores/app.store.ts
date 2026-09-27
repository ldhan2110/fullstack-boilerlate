import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { DateFormat, SystemState } from '@app-types/system'

export type AppStoreState = {
  system: SystemState
  toggleDarkMode: () => void
  setDateFormat: (dateFormat: DateFormat) => void
  expandSidebar: () => void
  collapseSidebar: () => void
  toggleSidebar: () => void
}

export const useAppStore = create<AppStoreState>()(
  persist(
    (set) => ({
      system: {
        darkMode: false,
        dateFormat: 'YYYY-MM-DD',
        sidebar: { expanded: true },
      },
      toggleDarkMode: () =>
        set((s) => ({ system: { ...s.system, darkMode: !s.system.darkMode } })),
      setDateFormat: (dateFormat) => set((s) => ({ system: { ...s.system, dateFormat } })),
      expandSidebar: () =>
        set((s) => ({ system: { ...s.system, sidebar: { expanded: true } } })),
      collapseSidebar: () =>
        set((s) => ({ system: { ...s.system, sidebar: { expanded: false } } })),
      toggleSidebar: () =>
        set((s) => ({ system: { ...s.system, sidebar: { expanded: !s.system.sidebar.expanded } } })),
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ system: state.system }),
    },
  ),
)
