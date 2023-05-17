import { memo } from 'react'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { pageLinks } from '@defs'

import {
  HeaderActions,
  LocaleSwitcher,
  LocaleSwitcherItem,
  Logo,
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
import { useThemeMode } from '@contexts'

export const Header = memo(() => {
  const { themeMode, handleThemeToggle } = useThemeMode()
  const router = useRouter()
  const { t, i18n } = useTranslation(['header'])
  const { user } = useUser()

  return (
    <StyledHeader>
      <StyledNav>
        <LogoLink href={pageLinks.home} $darkMode={themeMode === 'dark'}>
          <LogoWrapper>
            {/* <Logo>U</Logo> */}
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
            $active={i18n.language === 'en'}
            $darkMode={themeMode === 'dark'}
          >
            <StyledLink href={router.pathname} locale="en">
              EN
            </StyledLink>
          </LocaleSwitcherItem>
          <LocaleSwitcherItem>/</LocaleSwitcherItem>
          <LocaleSwitcherItem
            $active={i18n.language === 'cs'}
            $darkMode={themeMode === 'dark'}
          >
            <StyledLink href={router.pathname} locale="cs">
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
