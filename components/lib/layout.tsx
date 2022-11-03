import { memo } from 'react'

import { Footer, Header } from "@components"

export interface LayoutProps {
  children: React.ReactNode
}

export const Layout = memo(({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  )
})

Layout.displayName = 'Layout'

export default Layout
