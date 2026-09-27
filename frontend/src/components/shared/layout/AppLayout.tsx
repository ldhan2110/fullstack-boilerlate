import { AppShell } from '@mantine/core'
import { useClickOutside, useDisclosure, useMediaQuery } from '@mantine/hooks'
import { Outlet } from 'react-router-dom'
import { useAppStore } from '@stores'
import { AppHeader } from './AppHeader'
import { AppSidebar } from './AppSidebar'

export const AppLayout = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const sidebarExpanded = useAppStore((s) => s.system.sidebar.expanded)
  const expandSidebar = useAppStore((s) => s.expandSidebar)
  const collapseSidebar = useAppStore((s) => s.collapseSidebar)

  // sm breakpoint = 48em; mobile overlay always shows labels, desktop rail hides them
  const isMobile = useMediaQuery('(max-width: 48em)')
  const expanded = isMobile ? true : sidebarExpanded

  // Collapse the desktop sidebar to a rail when clicking outside it
  const navbarRef = useClickOutside<HTMLDivElement>(() => {
    if (!isMobile && sidebarExpanded) collapseSidebar()
  })

  return (
    <AppShell
      layout="alt"
      header={{ height: 40 }}
      navbar={{
        width: sidebarExpanded ? 250 : 64,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: false },
      }}
      padding="md"
      transitionDuration={200}
      transitionTimingFunction="ease"
    >
      <AppHeader mobileOpened={mobileOpened} toggleMobile={toggleMobile} />
      <AppSidebar ref={navbarRef} expanded={expanded} openDesktop={expandSidebar} />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
