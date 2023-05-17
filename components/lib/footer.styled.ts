import styled from 'styled-components'

import { colors, footerHeight } from '@themes'

export const FooterComponent = styled.footer`
  min-height: ${footerHeight}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CopyText = styled.p`
  font-size: 12px;
  text-align: center;
  color: ${colors.grey[700]};
`

export const SocialsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  padding: 0;

  li + li {
    margin-left: 16px;
  }
`
