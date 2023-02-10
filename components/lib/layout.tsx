import { memo } from 'react'
import styled from 'styled-components'

import { Footer, Header } from "@components"

const StyledDiv = styled.div`
  display: flex;
  flex: 1 0 auto;
`

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
