import { AppShell, Center, Image, Menu, NavLink, ScrollArea } from '@mantine/core'
import { forwardRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuGroup } from '@configs/routes'
import classes from './styles/AppSidebar.module.css'

type Props = { expanded: boolean; openDesktop: () => void }

export const AppSidebar = forwardRef<HTMLDivElement, Props>(
  ({ expanded, openDesktop }, ref) => {
    // ── State ──────────────────────────────────────────────
    // Which group is open in the expanded tree (first group by default).
    const [openedGroup, setOpenedGroup] = useState<string | null>(MenuGroup[0].group)

    // ── Handlers ───────────────────────────────────────────
    const toggleGroup = (group: string) =>
      setOpenedGroup((cur) => (cur === group ? null : group))

    // Rail parent icon: expand the sidebar and open that group.
    const openFromRail = (group: string) => {
      setOpenedGroup(group)
      openDesktop()
    }

    return (
      <AppShell.Navbar
        ref={ref}
        p="xs"
        className={`${classes.navbar}${expanded ? ` ${classes.expanded}` : ''}`}
      >
        {/* ── Logo ────────────────────────────────────────── */}
        <AppShell.Section>
          <Center py="sm">
            {expanded ? (
              <Image src="/assets/logo/logo.svg" alt="Logo" w={140} h={40} fit="contain" />
            ) : (
              <Image src="/assets/logo/short-logo.svg" alt="Logo" w={30} h={30} />
            )}
          </Center>
        </AppShell.Section>

        {/* ── Navigation ──────────────────────────────────── */}
        <AppShell.Section grow component={ScrollArea}>
          {MenuGroup.map(({ group, icon: Icon, items }) =>
            expanded ? (
              // Expanded: collapsible group tree; children are router links.
              <NavLink
                key={group}
                classNames={{ root: classes.link, children: classes.groupChildren }}
                label={group}
                leftSection={<Icon size={18} />}
                opened={openedGroup === group}
                onChange={() => toggleGroup(group)}
                childrenOffset={14}
              >
                {items.map((item) => (
                  <NavLink
                    key={item.path}
                    component={Link}
                    to={item.path}
                    classNames={{ root: `${classes.link} ${classes.childLink}` }}
                    label={item.label}
                  />
                ))}
              </NavLink>
            ) : (
              // Rail: parent icon only; hover shows a flyout, click expands.
              <Menu
                key={group}
                trigger="hover"
                position="right-start"
                offset={10}
                transitionProps={{ transition: 'pop-top-left', duration: 160 }}
                classNames={{
                  dropdown: classes.menuDropdown,
                  item: classes.menuItem,
                  label: classes.menuLabel,
                }}
              >
                <Menu.Target>
                  <NavLink
                    classNames={{ root: `${classes.link} ${classes.collapsed}` }}
                    leftSection={<Icon size={18} />}
                    onClick={() => openFromRail(group)}
                  />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>{group}</Menu.Label>
                  {/* Flyout links navigate only — they must not expand the rail */}
                  {items.map((item) => (
                    <Menu.Item key={item.path} component={Link} to={item.path}>
                      {item.label}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            ),
          )}
        </AppShell.Section>
      </AppShell.Navbar>
    )
  },
)

AppSidebar.displayName = 'AppSidebar'
