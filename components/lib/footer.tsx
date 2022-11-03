import { memo, useMemo } from 'react'

import {
  CopyText,
  FooterComponent,
} from './footer.styled'

export const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear().toString(), [])

  return (
    <FooterComponent>
      <CopyText>Copyright &copy; <span>{currentYear}</span>&nbsp;Undisclosed</CopyText>
    </FooterComponent>
  )
})

Footer.displayName = 'Footer'
