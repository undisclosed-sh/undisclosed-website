import { memo } from 'react'
import { StyledHeading } from './page-head.styled'

export interface PageHeadingProps {
  text: string
}

export const PageHeading = memo(({ text }: PageHeadingProps) => {
  return <StyledHeading>{text}</StyledHeading>
})

PageHeading.displayName = 'PageHeading'
