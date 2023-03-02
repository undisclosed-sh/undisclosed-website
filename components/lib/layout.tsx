import { memo } from 'react'

import { Footer, Header } from "@components"
import { StyledDiv } from './layout.styled'

export interface LayoutProps {
  children: React.ReactNode
}

export const Layout = memo(({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      <StyledDiv>
        {children}
      </StyledDiv>

      <Footer />
    </>
  )
})

Layout.displayName = 'Layout'

export default Layout
