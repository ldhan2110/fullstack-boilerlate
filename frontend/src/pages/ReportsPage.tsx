import { Paper, Stack, Text, Title } from '@mantine/core'

export const ReportsPage = () => (
  <Stack gap="md">
    <Title order={2}>Reports</Title>
    <Paper withBorder p="md" radius="md">
      <Text c="dimmed">No reports yet.</Text>
    </Paper>
  </Stack>
)
