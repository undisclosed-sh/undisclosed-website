import { memo } from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import { useUser } from '@auth0/nextjs-auth0/client'

import { pageLinks } from '@defs'

import featureFlags from 'env/feature-flags'

import {
  Logo,
  LogoPostfix,
  LogoWrapper,
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
        <Link href={pageLinks.home}>
          <LogoWrapper>
            <Logo>U</Logo>
            <LogoPostfix>ndisclosed</LogoPostfix>
          </LogoWrapper>
        </Link>

        <StyledList>
          {featureFlags?.headerAbout && (
            <StyledListItem>
              <Link href={pageLinks.about}>
                {formatMessage({
                  defaultMessage: 'About',
                  id: 'header.about',
                })}
              </Link>
            </StyledListItem>
          )}
          {featureFlags?.headerContact && (
            <StyledListItem>
              <Link href={pageLinks.contact}>
                {formatMessage({
                  defaultMessage: 'Contact',
                  id: 'header.contact',
                })}
              </Link>
            </StyledListItem>
          )}
          {user && (
            <StyledListItem>
              <Link href={pageLinks.playground}>
                {formatMessage({
                  defaultMessage: 'Playground',
                  id: 'header.playground',
                })}
              </Link>
            </StyledListItem>
          )}
          {!user && (
            <StyledListItem>
              <Link href={pageLinks.login}>
                {formatMessage({
                  defaultMessage: 'Login',
                  id: 'header.login',
                })}
              </Link>
            </StyledListItem>
          )}
          {user && (
            <StyledListItem>
              <Link href={pageLinks.logout}>
                {formatMessage({
                  defaultMessage: 'Logout',
                  id: 'header.logout',
                })}
              </Link>
            </StyledListItem>
          )}
        </StyledList>
      </StyledNav>
    </StyledHeader>
  )
})

Header.displayName = 'Header'
