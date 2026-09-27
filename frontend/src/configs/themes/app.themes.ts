import { createTheme, type MantineColorsTuple } from '@mantine/core'

// ── Quick knobs ──────────────────────────────────────────────
const SIZE = 'xs' // default size for inputs/buttons below
const DEFAULT_RADIUS = 'sm'
const FONT = "'Barlow', Inter, sans-serif"

// ── Palette (from caris_upgrade) ─────────────────────────────
const brand: MantineColorsTuple = [
  '#fff4e6', '#ffead3', '#ffcfa9', '#ffaf7e', '#ff8f5d',
  '#ff5b28', '#d94d22', '#b5411c', '#913417', '#732912',
]
const gray: MantineColorsTuple = [
  '#f8fafc', '#f1f3f5', '#e9ecef', '#cdd5df', '#ced4da',
  '#adb5bd', '#868e96', '#495057', '#343a40', '#212529',
]
const dark: MantineColorsTuple = [
  '#c9c9c9', '#b8b8b8', '#828282', '#696969', '#424242',
  '#3b3b3b', '#2e2e2e', '#242424', '#1f1f1f', '#141414',
]
const red: MantineColorsTuple = [
  '#fff5f5', '#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787',
  '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', '#c92a2a',
]
const danger: MantineColorsTuple = [
  '#fef2f2', '#fee2e2', '#fecaca', '#fca5a5', '#f87171',
  '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d',
]
const magenta: MantineColorsTuple = [
  '#fdf2fa', '#fce7f6', '#fcceee', '#faa7e0', '#f670c7',
  '#ee46bc', '#dd2590', '#c11574', '#9e165f', '#851651',
]
const secondary: MantineColorsTuple = [
  '#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af',
  '#6b7280', '#4b5563', '#374151', '#1f2937', '#111827',
]
const grayWarm: MantineColorsTuple = [
  '#C9C9C9', '#B8B8B8', '#828282', '#696969', '#424242',
  '#3B3B3B', '#2E2E2E', '#242424', '#1f1f1f', '#141414',
]
// gray-cool: semanticColors below resolve against this ramp
const grayCool: MantineColorsTuple = [
  '#F8FAFC', '#F1F5FA', '#E3E8EF', '#CDD5DF', '#969FAD',
  '#697586', '#4B5565', '#364152', '#141F36', '#131B2A',
]

// ── Semantic tokens ─────────────────────
// Resolve against the ramps above (gray-cool, brand, magenta) + Mantine
// defaults (green/orange/blue/grape/cyan/…). Read via theme.other.semanticColors.
const semanticColors = {
  base: {
    white: '#FFFFFF',
    black: '#000000',
  },
  text: {
    primary: 'var(--mantine-color-gray-cool-9)',
    secondary: 'var(--mantine-color-gray-cool-7)',
    tertiary: 'var(--mantine-color-gray-cool-6)',
    placeholder: 'var(--mantine-color-gray-cool-4)',
    dimmed: 'var(--mantine-color-gray-cool-4)',
    disabled: 'var(--mantine-color-gray-cool-3)',
    white: 'var(--mantine-color-white)',
    black: 'var(--mantine-color-black)',
    brand: 'var(--mantine-color-brand-5)',
    error: 'var(--mantine-color-red-7)',
    success: 'var(--mantine-color-green-7)',
    warning: 'var(--mantine-color-orange-7)',
    info: 'var(--mantine-color-blue-7)',
    semantic: {
      grape: 'var(--mantine-color-grape-7)',
      cyan: 'var(--mantine-color-cyan-7)',
      orange: 'var(--mantine-color-orange-7)',
      yellow: 'var(--mantine-color-yellow-7)',
      violet: 'var(--mantine-color-violet-7)',
      pink: 'var(--mantine-color-pink-7)',
      magenta: 'var(--mantine-color-magenta-7)',
      blue: 'var(--mantine-color-blue-7)',
      indigo: 'var(--mantine-color-indigo-7)',
      red: 'var(--mantine-color-red-7)',
      teal: 'var(--mantine-color-teal-7)',
      lime: 'var(--mantine-color-lime-7)',
      green: 'var(--mantine-color-green-7)',
    },
  },
  icon: {
    brand: 'var(--mantine-color-brand-5)',
    'brand-alt': 'var(--mantine-color-brand-6)',
    primary: 'var(--mantine-color-gray-cool-8)',
    secondary: 'var(--mantine-color-gray-cool-6)',
    tertiary: 'var(--mantine-color-gray-cool-5)',
    placeholder: 'var(--mantine-color-gray-cool-4)',
    disabled: 'var(--mantine-color-gray-cool-3)',
    white: 'var(--mantine-color-gray-cool-0)',
    black: 'var(--mantine-color-gray-cool-9)',
    semantic: {
      grape: 'var(--mantine-color-grape-7)',
      cyan: 'var(--mantine-color-cyan-7)',
      orange: 'var(--mantine-color-orange-7)',
      yellow: 'var(--mantine-color-yellow-7)',
      violet: 'var(--mantine-color-violet-7)',
      pink: 'var(--mantine-color-pink-7)',
      magenta: 'var(--mantine-color-magenta-7)',
      blue: 'var(--mantine-color-blue-7)',
      indigo: 'var(--mantine-color-indigo-7)',
      red: 'var(--mantine-color-red-7)',
      teal: 'var(--mantine-color-teal-7)',
      lime: 'var(--mantine-color-lime-7)',
      green: 'var(--mantine-color-green-7)',
    },
  },
  button: {
    filled: {
      brand: { color: 'var(--mantine-color-brand-5)', hover: 'var(--mantine-color-brand-6)' },
      gray: { color: 'var(--mantine-color-gray-cool-6)', hover: 'var(--mantine-color-gray-cool-5)' },
      red: { color: 'var(--mantine-color-red-6)', hover: 'var(--mantine-color-red-7)' },
      cyan: { color: 'var(--mantine-color-cyan-6)', hover: 'var(--mantine-color-cyan-7)' },
      teal: { color: 'var(--mantine-color-teal-6)', hover: 'var(--mantine-color-teal-7)' },
      yellow: { color: 'var(--mantine-color-yellow-6)', hover: 'var(--mantine-color-yellow-7)' },
      blue: { color: 'var(--mantine-color-blue-6)', hover: 'var(--mantine-color-blue-7)' },
      indigo: { color: 'var(--mantine-color-indigo-6)', hover: 'var(--mantine-color-indigo-7)' },
      grape: { color: 'var(--mantine-color-grape-6)', hover: 'var(--mantine-color-grape-7)' },
      pink: { color: 'var(--mantine-color-pink-6)', hover: 'var(--mantine-color-pink-7)' },
      magenta: { color: 'var(--mantine-color-magenta-6)', hover: 'var(--mantine-color-magenta-7)' },
    },
    outline: {
      brand: { color: 'var(--mantine-color-white)', hover: 'var(--mantine-color-brand-2)' },
      gray: { color: 'var(--mantine-color-white)', hover: 'var(--mantine-color-gray-cool-2)' },
      red: { color: 'var(--mantine-color-white)', hover: 'var(--mantine-color-red-2)' },
      teal: { color: 'var(--mantine-color-white)', hover: 'var(--mantine-color-teal-2)' },
      yellow: { color: 'var(--mantine-color-white)', hover: 'var(--mantine-color-yellow-2)' },
      blue: { color: 'var(--mantine-color-white)', hover: 'var(--mantine-color-blue-2)' },
      indigo: { color: 'var(--mantine-color-white)', hover: 'var(--mantine-color-indigo-2)' },
      grape: { color: 'var(--mantine-color-white)', hover: 'var(--mantine-color-grape-2)' },
      pink: { color: 'var(--mantine-color-white)', hover: 'var(--mantine-color-pink-2)' },
      magenta: { color: 'var(--mantine-color-white)', hover: 'var(--mantine-color-magenta-2)' },
    },
    light: {
      brand: { color: 'var(--mantine-color-brand-1)', hover: 'var(--mantine-color-brand-2)' },
      gray: { color: 'var(--mantine-color-gray-cool-1)', hover: 'var(--mantine-color-gray-cool-2)' },
      red: { color: 'var(--mantine-color-red-1)', hover: 'var(--mantine-color-red-2)' },
      cyan: { color: 'var(--mantine-color-cyan-1)', hover: 'var(--mantine-color-cyan-2)' },
      teal: { color: 'var(--mantine-color-teal-1)', hover: 'var(--mantine-color-teal-2)' },
      yellow: { color: 'var(--mantine-color-yellow-1)', hover: 'var(--mantine-color-yellow-2)' },
      blue: { color: 'var(--mantine-color-blue-1)', hover: 'var(--mantine-color-blue-2)' },
      indigo: { color: 'var(--mantine-color-indigo-1)', hover: 'var(--mantine-color-indigo-2)' },
      grape: { color: 'var(--mantine-color-grape-1)', hover: 'var(--mantine-color-grape-2)' },
      pink: { color: 'var(--mantine-color-pink-1)', hover: 'var(--mantine-color-pink-2)' },
      magenta: { color: 'var(--mantine-color-magenta-1)', hover: 'var(--mantine-color-magenta-2)' },
    },
  },
  border: {
    primary: 'var(--mantine-color-gray-cool-3)',
    'primary-table': 'var(--mantine-color-gray-cool-6)',
    secondary: 'var(--mantine-color-gray-cool-2)',
    tertiary: 'var(--mantine-color-gray-cool-1)',
    disabled: 'var(--mantine-color-gray-cool-3)',
    brand: 'var(--mantine-color-brand-5)',
    'brand-alt': 'var(--mantine-color-brand-6)',
    error: 'var(--mantine-color-red-7)',
    semantic: {
      red: { color: 'var(--mantine-color-red-7)', hover: 'var(--mantine-color-red-8)' },
      grape: { color: 'var(--mantine-color-grape-7)', hover: 'var(--mantine-color-grape-8)' },
      violet: { color: 'var(--mantine-color-violet-7)', hover: 'var(--mantine-color-violet-8)' },
      pink: { color: 'var(--mantine-color-pink-7)', hover: 'var(--mantine-color-pink-8)' },
      magenta: { color: 'var(--mantine-color-magenta-7)', hover: 'var(--mantine-color-magenta-8)' },
      yellow: { color: 'var(--mantine-color-yellow-7)', hover: 'var(--mantine-color-yellow-8)' },
      orange: { color: 'var(--mantine-color-orange-7)', hover: 'var(--mantine-color-orange-8)' },
      teal: { color: 'var(--mantine-color-teal-7)', hover: 'var(--mantine-color-teal-8)' },
      indigo: { color: 'var(--mantine-color-indigo-7)', hover: 'var(--mantine-color-indigo-8)' },
      cyan: { color: 'var(--mantine-color-cyan-7)', hover: 'var(--mantine-color-cyan-8)' },
    },
  },
  background: {
    primary: 'var(--mantine-color-gray-cool-0)',
    'primary-alt': 'var(--mantine-color-white)',
    secondary: 'var(--mantine-color-gray-cool-1)',
    tertiary: 'var(--mantine-color-gray-cool-2)',
    disabled: 'var(--mantine-color-gray-cool-2)',
    brand: 'var(--mantine-color-brand-5)',
    'brand-alt': 'var(--mantine-color-brand-0)',
    tooltip: 'var(--mantine-color-gray-cool-7)',
    navbar: 'var(--mantine-color-gray-cool-8)',
    'navbar-menu': 'var(--mantine-color-gray-cool-7)',
    table: 'var(--mantine-color-white)',
    'table-header': 'var(--mantine-color-gray-cool-8)',
    'table-read-only': 'var(--mantine-color-gray-cool-0)',
    'required-field': 'var(--mantine-color-brand-0)',
  },
  misc: {
    'nav-main-items-hover': 'var(--mantine-color-gray-cool-9)',
    'nav-sub-items-hover': 'var(--mantine-color-gray-cool-6)',
    'nav-sub-items-focus': '#FF5B281F', // 12% opacity
    divider: 'var(--mantine-color-gray-cool-3)',
    'divider-alt': 'var(--mantine-color-gray-cool-6)',
  },
}

// Components that inherit the default SIZE. Add/remove names to taste.
const SIZED = [
  'Button', 'ActionIcon', 'TextInput', 'Textarea', 'PasswordInput',
  'NumberInput', 'Select', 'MultiSelect', 'Checkbox', 'Radio',
  'Switch', 'Badge', 'Pagination',
]

export const AppTheme = createTheme({
  primaryColor: 'brand',
  defaultRadius: DEFAULT_RADIUS,
  colors: {
    brand, gray, dark, red, danger, magenta, secondary,
    'gray-warm': grayWarm,
    'gray-cool': grayCool,
  },

  fontFamily: FONT,
  headings: {
    fontFamily: FONT,
    sizes: {
      h1: { fontSize: '2.5rem', fontWeight: '600', lineHeight: '1.2' },
      h2: { fontSize: '2rem', fontWeight: '600', lineHeight: '1.35' },
      h3: { fontSize: '1.5rem', fontWeight: '600', lineHeight: '1.33' },
      h4: { fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.2' },
      h5: { fontSize: '1rem', fontWeight: '600', lineHeight: '1.25' },
      h6: { fontSize: '0.75rem', fontWeight: '600', lineHeight: '1.33' },
    },
  },

  fontSizes: {
    xs: '0.75rem', sm: '0.875rem', md: '1rem', lg: '1.12rem', xl: '1.25rem',
  },
  radius: { xs: '2px', sm: '4px', md: '6px', lg: '16px', xl: '24px' },
  spacing: { xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '24px' },

  shadows: {
    xs: '0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.05)',
    sm: '0px 7px 7px -5px rgba(0, 0, 0, 0.04), 0px 10px 15px -5px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.05)',
    md: '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.05)',
    lg: '0px 12px 12px -7px rgba(0, 0, 0, 0.04), 0px 28px 23px -7px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.05)',
    xl: '0px 17px 17px -7px rgba(0, 0, 0, 0.04), 0px 36px 28px -7px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.05)',
  },

  components: Object.fromEntries(
    SIZED.map((name) => [name, { defaultProps: { size: SIZE } }]),
  ),

  other: {
    backgroundColor: { default: '#f8f9fa', sideBar: '#151f32' },
    borderColor: { default: '#e3e8ef' },
    semanticColors,
  },
})

export type SemanticColors = typeof semanticColors
