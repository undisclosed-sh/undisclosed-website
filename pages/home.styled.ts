import styled from 'styled-components'

import { pxToRem } from '@themes'

export const Main = styled.main`
  padding: ${pxToRem(64)} 0;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EvenLetter = styled.span`
  transition: transform 0.2s ease-in-out;
  display: inline-block;

  &:hover {
    transform: translateY(-16px);
  }
`

export const OddLetter = styled.span`
  transition: transform 0.2s ease-in-out;
  display: inline-block;

  &:hover {
    transform: translateX(8px);
  }
`

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: ${pxToRem(64)};
  text-align: center;
`

export const Description = styled.p`
  margin: ${pxToRem(64)} 0;
  line-height: 1.5;
  font-size: 20px;
  text-align: center;
`
