import { colorPalette, pxToRem, transition } from '@themes'
import styled from 'styled-components'

export const StyledInput = styled.input`
  border: none;
  padding: ${pxToRem(8)};
  resize: vertical;
  width: 100%;
  background: rgb(249, 249, 249);
  ${transition(['box-shadow'])}

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px ${colorPalette.primary.dark};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: rgb(249, 249, 249);
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${colorPalette.common.black};
  }
`

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: ${pxToRem(4)};
  font-size: ${pxToRem(14)};
`

export const StyledErrorMessage = styled.p`
  color: ${colorPalette.error.main};
  font-size: ${pxToRem(14)};
`
