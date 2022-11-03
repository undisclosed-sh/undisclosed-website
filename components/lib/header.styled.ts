import styled from 'styled-components'

import { spacing } from '@themes'

export const StyledHeader = styled.header`
  padding: ${spacing(2)} ${spacing(2)};
`

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.span`
  display: inline-flex;
  font-size: 23px;
  font-weight: 700;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(90deg);
  }
`
