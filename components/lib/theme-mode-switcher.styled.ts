import { ThemeMode } from '@custom-types'
import styled from 'styled-components'

export const Wrapper = styled.div<{ $themeMode: ThemeMode }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;

  ${({ $themeMode }) => `
    svg {
      fill: ${$themeMode === 'light' ? '#222' : '#fff'};
      stroke: ${$themeMode === 'light' ? '#222' : '#fff'};
    }
  `}
`

export const Handle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
