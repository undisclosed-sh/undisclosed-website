import styled from 'styled-components'

import { colors, footerHeight } from '@themes'

export const FooterComponent = styled.footer`
  height: ${footerHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CopyText = styled.p`
  font-size: 12px;
  text-align: center;
  color: ${colors.grey[700]};
`;
