import styled from 'styled-components'

import { colorPalette, headerHeight, pxToRem } from '@themes'
import Link from 'next-intl/link'

export const StyledHeader = styled.header`
  padding: 0 16px;
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
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;

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

export const LogoLink = styled(Link)<{ $darkMode?: boolean }>`
  text-decoration: none;
  line-height: 1;

  &,
  &:hover,
  &:active {
    color: ${({ $darkMode }) =>
      $darkMode ? colorPalette.common.white : colorPalette.text.main};
  }
`

export const LogoPostfix = styled.span`
  position: relative;
  left: 0;
  transition: left 0.2s ease-in-out;
`

export const LogoWrapper = styled.span<{ $animationEnabled?: boolean }>`
  font-family: var(--font-antonio), 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: 21px;

  ${({ $animationEnabled }) =>
    $animationEnabled &&
    `
  &:hover {
    ${Logo} {
      transform: scale(1.1) rotate(90deg);
    }

    ${LogoPostfix} {
      left: 4px;
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
  margin: 0 8px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${colorPalette.primary.main};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  & + & {
    margin-left: 12px;
  }
`

export const LocaleSwitcher = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0 12px 0 8px;
  padding: 0;

  li {
    font-size: 14px;
  }

  li + li {
    margin-left: 4px;
  }
`

export const LocaleSwitcherItem = styled.li<{
  $active?: boolean
  $darkMode?: boolean
}>`
  font-family: Antonio, 'Roboto', sans-serif;

  ${StyledLink} {
    ${({ $active, $darkMode }) =>
      $active
        ? `
        &,
        &:hover,
        &:active {
          color: ${
            !$darkMode ? colorPalette.text.main : colorPalette.common.white
          };
        }
        `
        : `
        &,
        &:hover,
        &:active {
          color: ${!$darkMode ? '#bdcad0' : '#aaa'} !important;
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
