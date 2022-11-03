import styled from 'styled-components'

import { colors } from '@themes'

export const Layout = styled.div`
  padding: 26px;
  background: ${colors.grey[100]};
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Column = styled.div`
  width: 50%;
  padding: 0 26px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

export const PresetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

export const PresetElement = styled.div`
  padding: 8px 0;
`

export const ColorValue = styled.div`
  padding: 4px 0;
`
