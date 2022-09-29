import { memo, useMemo } from 'react'
import styled from 'styled-components'

import { colors, footerHeight } from './../../themes'

const FooterComponent = styled.footer`
  height: ${footerHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CopyText = styled.p`
  font-size: 0.75rem;
  text-align: center;
  color: ${colors.grey[700]};
`;

export const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear().toString(), [])

  return (
    <FooterComponent>
      <CopyText>Copyright &copy; <span>{currentYear}</span>&nbsp;Undisclosed</CopyText>
    </FooterComponent>
  )
})

Footer.displayName = 'Footer'
