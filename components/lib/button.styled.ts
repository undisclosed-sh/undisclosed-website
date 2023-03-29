import styled from 'styled-components'

import { colorPalette, pxToRem } from '@themes'

export const StyledButton = styled.button<{
  $variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
}>`
  background-color: ${colorPalette.accent.main}};
  color: ${colorPalette.common.white};
  border: none;
  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(12)} ${pxToRem(16)};
  cursor: pointer;
  font-size: ${pxToRem(16)};
  transition: background-color 0.1s ease;

  &:hover {
    background-color: ${colorPalette.accent.dark}};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    // background-color: ${colorPalette.accent.light}};
    // cursor: not-allowed;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return `
          background-color: ${colorPalette.primary.main};
          color: ${colorPalette.common.white};

          &:hover {
            background-color: ${colorPalette.primary.dark};
          }

          // &:disabled {
          //   background-color: ${colorPalette.primary.light};
          //   color: ${colorPalette.common.white};
          // }
        `
      case 'secondary':
        return `
          background-color: ${colorPalette.secondary.main};
          color: ${colorPalette.common.white};

          &:hover {
            background-color: ${colorPalette.secondary.dark};
          }

          &:disabled {
            background-color: ${colorPalette.secondary.light};
            color: ${colorPalette.common.white};
          }
        `
      case 'success':
        return `
          background-color: ${colorPalette.success.main};
          color: ${colorPalette.common.white};

          &:hover {
            background-color: ${colorPalette.success.dark};
          }

          &:disabled {
            background-color: ${colorPalette.success.light};
            color: ${colorPalette.common.white};
          }
        `
      case 'error':
        return `
          background-color: ${colorPalette.error.main};
          color: ${colorPalette.common.white};

          &:hover {
            background-color: ${colorPalette.error.dark};
          }

          &:disabled {
            background-color: ${colorPalette.error.light};
            color: ${colorPalette.common.white};
          }
        `
      case 'warning':
        return `
          background-color: ${colorPalette.warning.main};
          color: ${colorPalette.common.white};

          &:hover {
            background-color: ${colorPalette.warning.dark};
          }

          &:disabled {
            background-color: ${colorPalette.warning.light};
            color: ${colorPalette.common.white};
          }
        `
      default:
        return ''
    }
  }}
`
