import styled from 'styled-components'

import { colorPalette, headerHeight, pxToRem } from '@themes'
import Link from 'next/link'

export const StyledHeader = styled.header`
  padding: 0 ${pxToRem(16)};
  height: ${headerHeight}px;
  display: flex;
  justify-content: flex-start;
`

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;

  a {
    flex: 1 0 auto;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colorPalette.text.main};

  &,
  &:hover,
  &:active {
    color: ${colorPalette.text.main};
  }
`

export const Logo = styled.span`
  display: inline-flex;
  font-size: 23px;
  font-weight: 700;
  flex: 0 0 auto;
  transition: transform 0.2s ease-in-out;
`

export const LogoPostfix = styled.span`
  position: relative;
  left: 0;
  transition: left 0.2s ease-in-out;
`

export const LogoWrapper = styled.span<{ $animationEnabled?: boolean }>`
  font-family: Antonio, 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: ${pxToRem(21)};

  ${({ $animationEnabled }) =>
    $animationEnabled &&
    `
  &:hover {
    ${Logo} {
      transform: scale(1.1) rotate(90deg);
    }

    ${LogoPostfix} {
      left: ${pxToRem(4)};
    }
  }
  `}
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: center;
`

export const StyledListItem = styled.li`
  display: inline-flex;
  margin: 0 ${pxToRem(8)};

  & + & {
    margin-left: ${pxToRem(4)};
  }
`

export const LocaleSwitcher = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0 ${pxToRem(12)} 0 ${pxToRem(8)};
  padding: 0;

  li {
    font-size: ${pxToRem(14)};
  }

  li + li {
    margin-left: ${pxToRem(4)};
  }
`

export const LocaleSwitcherItem = styled.li<{ $active?: boolean }>`
  font-family: Antonio, 'Roboto', sans-serif;

  ${StyledLink} {
    ${({ $active }) =>
      $active
        ? `
        &,
        &:hover,
        &:active {
          color: ${colorPalette.text.main};
        }
        `
        : `
        &,
        &:hover,
        &:active {
          color: #bdcad0 !important;
        }
      }
    `};
`

export const HeaderActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
`
