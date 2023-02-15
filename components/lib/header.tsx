import { memo } from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import { useUser } from '@auth0/nextjs-auth0/client'

import {
  Logo,
  StyledHeader,
  StyledList,
  StyledListItem,
  StyledNav,
} from './header.styled'

export const Header = memo(() => {
  const { formatMessage } = useIntl()
  const { user } = useUser()

  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/">
          <Logo>U</Logo>
        </Link>

        <StyledList>
          <StyledListItem>
            <Link href="/about">
              {formatMessage({
                defaultMessage: 'About',
                id: 'header.about',
              })}
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/contact">
              {formatMessage({
                defaultMessage: 'Contact',
                id: 'header.contact',
              })}
            </Link>
          </StyledListItem>
          {user && (
            <StyledListItem>
              <Link href="/playground">
                {formatMessage({
                  defaultMessage: 'Playground',
                  id: 'header.playground',
                })}
              </Link>
            </StyledListItem>
          )}
          {!user && (
            <StyledListItem>
              <Link href="/api/auth/login">
                {formatMessage({
                  defaultMessage: 'Login',
                  id: 'header.login',
                })}
              </Link>
            </StyledListItem>
          )}
          <StyledListItem>
            {user && <Link href="/api/auth/logout">
              {formatMessage({
                defaultMessage: 'Logout',
                id: 'header.logout',
              })}
            </Link>}
          </StyledListItem>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  )
})

Header.displayName = 'Header'
