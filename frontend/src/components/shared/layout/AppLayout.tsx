import { AppShell } from '@mantine/core'
import { useClickOutside, useDisclosure, useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppStore } from '@stores'
import { AppHeader } from './AppHeader'
import { AppSidebar } from './AppSidebar'

export const AppLayout = () => {
  const [mobileOpened, { toggle: toggleMobile, close: closeMobile }] = useDisclosure()
  const [burgerEl, setBurgerEl] = useState<HTMLButtonElement | null>(null)
  const sidebarExpanded = useAppStore((s) => s.system.sidebar.expanded)
  const expandSidebar = useAppStore((s) => s.expandSidebar)
  const collapseSidebar = useAppStore((s) => s.collapseSidebar)

  // sm breakpoint = 48em; mobile overlay always shows labels, desktop rail hides them
  const isMobile = useMediaQuery('(max-width: 48em)')
  const expanded = isMobile ? true : sidebarExpanded

  // Click outside: close the mobile drawer, or collapse the desktop rail.
  const navbarRef = useClickOutside<HTMLDivElement>(
    () => {
      if (isMobile) {
        if (mobileOpened) closeMobile()
      } else if (sidebarExpanded) {
        collapseSidebar()
      }
    },
    null,
    [burgerEl],
  )

  return (
    <AppShell
      layout="alt"
      header={{ height: 40 }}
      navbar={{
        width: isMobile ? 220 : 64,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: false },
      }}
      padding="md"
      transitionDuration={200}
      transitionTimingFunction="ease"
    >
      <AppHeader mobileOpened={mobileOpened} toggleMobile={toggleMobile} burgerRef={setBurgerEl} />
      <AppSidebar ref={navbarRef} expanded={expanded} openDesktop={expandSidebar} />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
