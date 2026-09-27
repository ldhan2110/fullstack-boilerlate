import { Paper, Stack, Text, Title } from '@mantine/core'

export const SettingsPage = () => (
  <Stack gap="md">
    <Title order={2}>Settings</Title>
    <Paper withBorder p="md" radius="md">
      <Text c="dimmed">App settings go here.</Text>
    </Paper>
  </Stack>
)
