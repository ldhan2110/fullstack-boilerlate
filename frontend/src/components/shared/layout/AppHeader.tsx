import { LanguageSwitcher } from '@components/shared/LanguageSwitcher'
import { AppShell, Burger, Group } from '@mantine/core'

type Props = {
  mobileOpened: boolean
  toggleMobile: () => void
}

export const AppHeader = ({ mobileOpened, toggleMobile }: Props) => (
  <AppShell.Header>
    <Group h="100%" px="md" justify="space-between">
      {/* Mobile-only: opens the sidebar overlay. Desktop collapse lives in the sidebar. */}
      <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
      <LanguageSwitcher />
    </Group>
  </AppShell.Header>
)
