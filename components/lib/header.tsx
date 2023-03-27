import { memo } from 'react'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { pageLinks } from '@defs'

import {
  LocaleSwitcher,
  LocaleSwitcherItem,
  Logo,
  LogoPostfix,
  LogoWrapper,
  StyledHeader,
  StyledList,
  StyledListItem,
  StyledNav,
} from './header.styled'
import { navigation } from '@defs/lib/navigation'

export const Header = memo(() => {
  const router = useRouter()
  const { t, i18n } = useTranslation(['header'])
  const { user } = useUser()

  return (
    <StyledHeader>
      <StyledNav>
        <Link href={pageLinks.home}>
          <LogoWrapper>
            <Logo>U</Logo>
            <LogoPostfix>ndisclosed</LogoPostfix>
          </LogoWrapper>
        </Link>

        <StyledList>
          {Object.entries(navigation).map(([key, val]) =>
            val.disabled ? null : (
              <StyledListItem key={`nav_link_${key}`}>
                <Link href={val.route}>{t(val.label)}</Link>
              </StyledListItem>
            ),
          )}
          {user && (
            <StyledListItem>
              <Link href={pageLinks.playground}>{t('playground')}</Link>
            </StyledListItem>
          )}
          {user && (
            <StyledListItem>
              <Link href={pageLinks.editor}>{t('editor')}</Link>
            </StyledListItem>
          )}
          {!user && (
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

      <LocaleSwitcher>
        <LocaleSwitcherItem $active={i18n.language === 'en'}>
          <Link href={router.pathname} locale="en">
            EN
          </Link>
        </LocaleSwitcherItem>
        <LocaleSwitcherItem>/</LocaleSwitcherItem>
        <LocaleSwitcherItem $active={i18n.language === 'cs'}>
          <Link href={router.pathname} locale="cs">
            CS
          </Link>
        </LocaleSwitcherItem>
      </LocaleSwitcher>
    </StyledHeader>
  )
})

Header.displayName = 'Header'
