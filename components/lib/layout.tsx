import { memo } from 'react'

import { Footer, Header, PageStepper } from '@components'
import { StyledDiv } from './layout.styled'

export interface LayoutProps {
  children: React.ReactNode
  flexDirection?: 'column' | 'row'
  stepperEnabled?: boolean
}

export const Layout = memo(({ children, flexDirection, stepperEnabled }: LayoutProps) => {
  return (
    <>
      <Header />

      <StyledDiv flexDirection={flexDirection}>
        {stepperEnabled ? <PageStepper>{children}</PageStepper> : children}
      </StyledDiv>

      <Footer />
    </>
  )
})

Layout.displayName = 'Layout'

export default Layout
