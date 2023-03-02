import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo, ReactNode, useEffect } from 'react'

import { pageLinks } from '@defs'

import { NextPage, PrevPage, Wrapper } from './page-stepper.styled'

const routesMap = {
  home: {
    next: pageLinks.about,
    prev: pageLinks.contact,
  },
  about: {
    next: pageLinks.newsletter,
    prev: pageLinks.home,
  },
  newsletter: {
    next: pageLinks.contact,
    prev: pageLinks.about,
  },
  contact: {
    next: pageLinks.home,
    prev: pageLinks.newsletter,
  },
}

export interface PageStepperProps {
  children?: ReactNode
}

export const PageStepper = memo(({ children, ...props }: PageStepperProps) => {
  const { pathname, push } = useRouter()

  const currentPage = Object.entries(pageLinks)
    .filter(([key, value]) => value === pathname)
    ?.flat()?.[0]
  const nextPage =
    currentPage in routesMap
      ? routesMap[currentPage as keyof typeof routesMap].next
      : undefined
  const prevPage =
    currentPage in routesMap
      ? routesMap[currentPage as keyof typeof routesMap].prev
      : undefined

  // ⚠️ Highly experimental ⚠️
  // useEffect(() => {
  //   const handleKeyPress = (e: KeyboardEvent) => {
  //     if (e.key === 'a' && prevPage) {
  //       push(prevPage)
  //     } else if (e.key === 'd' && nextPage) {
  //       push(nextPage)
  //     }
  //   }

  //   window.addEventListener('keypress', handleKeyPress)

  //   return () => window.removeEventListener('keypress', handleKeyPress)
  // }, [nextPage, prevPage, push])

  return (
    <Wrapper>
      {prevPage && <PrevPage href={prevPage}>&lt;</PrevPage>}
      {children}
      {nextPage && <NextPage href={nextPage}>&gt;</NextPage>}
    </Wrapper>
  )
})

PageStepper.displayName = 'PageStepper'
