import { memo } from 'react'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'

import { Logo, StyledHeader, StyledList, StyledListItem, StyledNav } from './header.styled'

export const Header = memo(() => {
  const { user } = useUser()

  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/">
          <Logo>U</Logo>
        </Link>

        <StyledList>
          <StyledListItem>
            <Link href="/about">About</Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/contact">Contact</Link>
          </StyledListItem>
          <StyledListItem>
            {user && <Link href="/playground">Playground</Link>}
          </StyledListItem>
          <StyledListItem>
            {!user && <Link href="/api/auth/login">Login</Link>}
          </StyledListItem>
          <StyledListItem>
            {user && <Link href="/api/auth/logout">Logout</Link>}
          </StyledListItem>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  )
})

Header.displayName = 'Header'
