import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Checkbox,
  Group,
  MultiSelect,
  NumberInput,
  Paper,
  PasswordInput,
  Radio,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
  Textarea,
  Title,
  useMantineTheme,
} from '@mantine/core'

const BUTTON_COLORS = ['brand', 'gray', 'red', 'blue', 'teal', 'grape', 'magenta']

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Paper withBorder p="lg" radius="md" shadow="sm">
      <Title order={4} mb="md">
        {title}
      </Title>
      {children}
    </Paper>
  )
}

function App() {
  const theme = useMantineTheme()
  // Ported semantic tokens live here (see src/configs/themes.ts)
  const semantic = theme.other.semanticColors as {
    text: Record<string, string>
    background: Record<string, string>
    border: Record<string, string>
  }

  return (
    <Stack gap="xl" p="xl" maw={960} mx="auto" style={{ textAlign: 'left' }}>
      <Title order={2}>Theme sample — caris</Title>

      <Section title="Buttons — filled / outline / light (default size xs)">
        <Stack gap="sm">
          <Group>
            {BUTTON_COLORS.map((c) => (
              <Button key={c} color={c}>
                {c}
              </Button>
            ))}
          </Group>
          <Group>
            {BUTTON_COLORS.map((c) => (
              <Button key={c} color={c} variant="outline">
                {c}
              </Button>
            ))}
          </Group>
          <Group>
            {BUTTON_COLORS.map((c) => (
              <Button key={c} color={c} variant="light">
                {c}
              </Button>
            ))}
          </Group>
          <Group>
            <Button size="xs">xs</Button>
            <Button size="sm">sm</Button>
            <Button size="md">md</Button>
            <Button size="lg">lg</Button>
          </Group>
        </Stack>
      </Section>

      <Section title="Inputs (default size xs)">
        <Stack gap="sm" maw={360}>
          <TextInput label="Text" placeholder="Type here" />
          <PasswordInput label="Password" placeholder="••••••" />
          <NumberInput label="Number" defaultValue={42} />
          <Select label="Select" data={['One', 'Two', 'Three']} placeholder="Pick one" />
          <MultiSelect label="MultiSelect" data={['A', 'B', 'C']} placeholder="Pick many" />
          <Textarea label="Textarea" placeholder="Notes" />
          <Group>
            <Checkbox label="Checkbox" defaultChecked />
            <Radio label="Radio" defaultChecked />
            <Switch label="Switch" defaultChecked />
          </Group>
        </Stack>
      </Section>

      <Section title="Badges & ActionIcons">
        <Group>
          {BUTTON_COLORS.map((c) => (
            <Badge key={c} color={c}>
              {c}
            </Badge>
          ))}
          {BUTTON_COLORS.slice(0, 4).map((c) => (
            <ActionIcon key={c} color={c} variant="filled">
              ★
            </ActionIcon>
          ))}
        </Group>
      </Section>

      <Section title="Brand ramp (colors.brand)">
        <Group gap={0}>
          {theme.colors.brand.map((hex, i) => (
            <Swatch key={i} color={hex} label={String(i)} />
          ))}
        </Group>
      </Section>

      <Section title="Semantic tokens (theme.other.semanticColors)">
        <Stack gap="lg">
          <TokenRow title="text" tokens={semantic.text} kind="fg" />
          <TokenRow title="background" tokens={semantic.background} kind="bg" />
          <TokenRow title="border" tokens={semantic.border} kind="border" />
        </Stack>
      </Section>

      <Section title="Radius & shadow scale">
        <Group>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((r) => (
            <Card key={r} withBorder radius={r} shadow={r} p="md" w={96}>
              <Text size="xs">{r}</Text>
            </Card>
          ))}
        </Group>
      </Section>
    </Stack>
  )
}

function Swatch({ color, label }: { color: string; label: string }) {
  return (
    <Stack gap={2} align="center">
      <div style={{ width: 48, height: 40, background: color }} />
      <Text size="xs">{label}</Text>
    </Stack>
  )
}

function TokenRow({
  title,
  tokens,
  kind,
}: {
  title: string
  tokens: Record<string, string>
  kind: 'fg' | 'bg' | 'border'
}) {
  return (
    <div>
      <Text size="sm" fw={600} mb={4}>
        {title}
      </Text>
      <Group gap="xs">
        {Object.entries(tokens)
          .filter(([, v]) => typeof v === 'string')
          .map(([name, value]) => (
            <Stack key={name} gap={2} align="center">
              <div
                style={{
                  width: 44,
                  height: 32,
                  borderRadius: 4,
                  color: kind === 'fg' ? value : undefined,
                  background: kind === 'bg' ? value : '#fff',
                  border: kind === 'border' ? `2px solid ${value}` : '1px solid #e3e8ef',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                }}
              >
                {kind === 'fg' ? 'Aa' : ''}
              </div>
              <Text size="xs" c="dimmed">
                {name}
              </Text>
            </Stack>
          ))}
      </Group>
    </div>
  )
}

export default App
