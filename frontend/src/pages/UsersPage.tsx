import { Paper, Stack, Text, Title } from '@mantine/core'

export const UsersPage = () => (
  <Stack gap="md">
    <Title order={2}>Users</Title>
    <Paper withBorder p="md" radius="md">
      <Text c="dimmed">User management goes here.</Text>
    </Paper>
  </Stack>
)
