# AppShell Layout — Design

**Date:** 2026-09-27
**Scope:** Presentational responsive app layout (sidebar + header) using Mantine 9 native `AppShell`.

## Goal

Reusable `AppLayout` wrapping page content with a full-height sidebar and a
header, responsive across breakpoints. No routing (presentational only).

## Decisions

- **Native, not custom.** Use Mantine 9 `AppShell` — header, navbar, responsive
  collapse are built in. No hand-rolled shell.
- **`layout="alt"`** — sidebar spans full viewport height on the left; header
  sits only over the content area to its right (does not overlay or push the
  sidebar below).
- **Responsive:** burger collapses sidebar on desktop (hidden) and toggles an
  overlay on mobile. Breakpoint `sm`.
- **Presentational only:** nav items are dumb placeholders (Dashboard,
  Settings, …). No react-router integration yet.

## Files (`src/components/shared/layout/`)

| File | Responsibility |
|------|----------------|
| `AppLayout.tsx` | Wraps `<AppShell layout="alt">`; owns `mobileOpened` / `desktopOpened` collapse state via `useDisclosure`; renders `{children}` in `AppShell.Main`. |
| `AppHeader.tsx` | Burger toggle(s) + reused `LanguageSwitcher`. |
| `AppSidebar.tsx` | Placeholder nav as Mantine `NavLink`s (no-op `onClick`). |
| `index.ts` | Barrel export. |

## AppShell config

```tsx
<AppShell
  layout="alt"
  header={{ height: 60 }}
  navbar={{
    width: 260,
    breakpoint: 'sm',
    collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
  }}
  padding="md"
>
```

- Header: burger with `hiddenFrom="sm"` → toggles `mobileOpened`; burger with
  `visibleFrom="sm"` → toggles `desktopOpened`.

## Wire-up

`App.tsx` demo showcase wrapped in `<AppLayout>` as the Main content. Demo
stays as-is (surgical — only add the wrapper).

## Out of scope (add later)

- Router integration (`<Outlet/>`, active nav state) — deferred, user chose
  presentational shell.
- Persisting collapse state.
- Footer / aside panels.

## Verification

- App renders: sidebar full height left, header to its right, demo content in
  Main.
- Desktop burger hides/shows sidebar. Mobile (<sm) burger opens overlay.
- `tsc` / build clean, no unused imports.
