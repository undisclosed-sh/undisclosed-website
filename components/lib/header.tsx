'use client'

import { memo } from 'react'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'
import { usePathname } from 'next-intl/client'
import { useLocale, useTranslations } from 'next-intl'

import { useThemeMode } from '@contexts'
import { pageLinks } from '@defs'

import {
  HeaderActions,
  LocaleSwitcher,
  LocaleSwitcherItem,
  LogoLink,
  LogoPostfix,
  LogoWrapper,
  StyledHeader,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledNav,
} from './header.styled'
import { navigation } from '@defs/lib/navigation'
import { ThemeModeSwitcher } from './theme-mode-switcher'

export const Header = memo(() => {
  const t = useTranslations('Header')
  const { themeMode, handleThemeToggle } = useThemeMode()
  const pathname = usePathname()
  const { user } = useUser()
  const locale = useLocale()

  return (
    <StyledHeader>
      <StyledNav>
        <LogoLink href={pageLinks.home} $darkMode={themeMode === 'dark'}>
          <LogoWrapper>
            <LogoPostfix>Undisclosed</LogoPostfix>
          </LogoWrapper>
        </LogoLink>

        <StyledList>
          {Object.entries(navigation).map(([key, val]) =>
            val.hidden ? null : (
              <StyledListItem key={`nav_link_${key}`}>
                <Link href={val.route}>{t(val.label)}</Link>
              </StyledListItem>
            ),
          )}
          {!user && !navigation.signIn.hidden && (
            <StyledListItem>
              <Link href={pageLinks.login}>{t('login')}</Link>
            </StyledListItem>
          )}
          {user && (
            <StyledListItem>
              <Link href={pageLinks.logout}>{t('logout')}</Link>
            </StyledListItem>
          )}
        </StyledList>
      </StyledNav>

      <HeaderActions>
        <LocaleSwitcher>
          <LocaleSwitcherItem
            $active={locale === 'en'}
            $darkMode={themeMode === 'dark'}
          >
            <StyledLink href={pathname} locale="en">
              EN
            </StyledLink>
          </LocaleSwitcherItem>
          <LocaleSwitcherItem>/</LocaleSwitcherItem>
          <LocaleSwitcherItem
            $active={locale === 'cs'}
            $darkMode={themeMode === 'dark'}
          >
            <StyledLink href={pathname} locale="cs">
              CS
            </StyledLink>
          </LocaleSwitcherItem>
        </LocaleSwitcher>

        <ThemeModeSwitcher themeMode={themeMode} onClick={handleThemeToggle} />
      </HeaderActions>
    </StyledHeader>
  )
})

Header.displayName = 'Header'
