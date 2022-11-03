import { memo } from 'react'

import {
  Logo,
  StyledHeader,
  StyledNav,
} from './header.styled'

export const Header = memo(() => {
  return (
    <StyledHeader>
      <StyledNav>
        <Logo>U</Logo>
      </StyledNav>
    </StyledHeader>
  )
})

Header.displayName = 'Header'
