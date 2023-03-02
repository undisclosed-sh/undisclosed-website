import { palette, pxToRem } from '@themes'
import styled from 'styled-components'

export const StyledTextarea = styled.textarea`
  width: 100%;
  border: 1px solid ${palette('grey', 400)};
  border-radius: ${pxToRem(8)};
  transition: border-color 0.2s ease-out;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid ${palette('blue', 400)};
  }
`

export const StyledButton = styled.button`
  display: flex;
  align-self: center;
  padding: ${pxToRem(8)} ${pxToRem(12)};
  border-radius: ${pxToRem(6)};
  border: 0;
  margin-top: ${pxToRem(8)};
  color: ${palette('common', 'white')};
  background-color: ${palette('blue', 600)};
  cursor: pointer;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${palette('blue', 500)};
  }
`

export const SuccessMessage = styled.span`
  margin-top: ${pxToRem(8)};
  margin-bottom: ${pxToRem(8)};
  padding: ${pxToRem(8)} ${pxToRem(12)};
  font-size: 12px;
  text-align: center;
  display: flex;
  align-self: center;
  border-radius: ${pxToRem(4)};
  color: ${palette('common', 'white')};
  background-color: ${palette('green', 400)};
`
