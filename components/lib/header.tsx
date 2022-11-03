import { memo } from 'react'
import Link from 'next/link'

import {
  Logo,
  StyledHeader,
  StyledNav,
} from './header.styled'

export const Header = memo(() => {
  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/">
          <Logo>U</Logo>
        </Link>
      </StyledNav>
    </StyledHeader>
  )
})

Header.displayName = 'Header'
