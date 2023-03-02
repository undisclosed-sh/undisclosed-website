import styled from 'styled-components'

import { pxToRem } from '@themes'

export const StyledHeader = styled.header`
  padding: ${pxToRem(16)} ${pxToRem(16)};
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
`

export const LogoPostfix = styled.span`
  position: relative;
  left: 0;
  transition: left 0.2s ease-in-out;
`

export const LogoWrapper = styled.span`
  &:hover {
    ${Logo} {
      transform: scale(1.1) rotate(90deg);
    }

    ${LogoPostfix} {
      left: ${pxToRem(4)};
    }
  }
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyledListItem = styled.li`
  display: inline-flex;
  margin: 0 ${pxToRem(8)};

  & + & {
    margin-left: ${pxToRem(4)};
  }
`
