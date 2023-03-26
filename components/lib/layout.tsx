import { memo } from 'react'

import { Footer, Header, PageStepper } from '@components'
import { StyledDiv } from './layout.styled'

export interface LayoutProps {
  children: React.ReactNode
  stepperEnabled?: boolean
}

export const Layout = memo(({ children, stepperEnabled }: LayoutProps) => {
  return (
    <>
      <Header />

      <StyledDiv>
        {stepperEnabled ? <PageStepper>{children}</PageStepper> : children}
      </StyledDiv>

      <Footer />
    </>
  )
})

Layout.displayName = 'Layout'

export default Layout
