import { LanguageSwitcher } from '@components/shared/LanguageSwitcher'
import { ActionIcon, AppShell, Burger, Group } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { useAppStore } from '@stores'

type Props = {
  mobileOpened: boolean
  toggleMobile: () => void
  burgerRef: (el: HTMLButtonElement | null) => void
}

export const AppHeader = ({ mobileOpened, toggleMobile, burgerRef }: Props) => {
  const darkMode = useAppStore((s) => s.system.darkMode)
  const toggleDarkMode = useAppStore((s) => s.toggleDarkMode)

  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        {/* Mobile-only: opens the sidebar overlay. Desktop collapse lives in the sidebar. */}
        <Burger ref={burgerRef} opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
        <Group gap="sm" ml="auto">
          <ActionIcon
            variant="default"
            size="md"
            onClick={toggleDarkMode}
            aria-label="Toggle color scheme"
          >
            {darkMode ? <IconSun size={18} /> : <IconMoon size={18} />}
          </ActionIcon>
          <LanguageSwitcher />
        </Group>
      </Group>
    </AppShell.Header>
  )
}
