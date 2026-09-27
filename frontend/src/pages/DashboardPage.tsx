import { Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core'

export const DashboardPage = () => (
  <Stack gap="md">
    <Title order={2}>Dashboard</Title>
    <SimpleGrid cols={{ base: 1, sm: 3 }}>
      {['Users', 'Revenue', 'Sessions'].map((label) => (
        <Paper key={label} withBorder p="md" radius="md">
          <Text size="sm" c="dimmed">
            {label}
          </Text>
          <Title order={3}>—</Title>
        </Paper>
      ))}
    </SimpleGrid>
  </Stack>
)
