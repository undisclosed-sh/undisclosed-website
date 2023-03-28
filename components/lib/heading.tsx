import { memo } from 'react'

import { StyledHeading } from './heading.styled'

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
  className?: string
  centered?: boolean
}

export const Heading = memo(
  ({ children, centered, as = 'h1', ...props }: HeadingProps) => {
    return (
      <StyledHeading as={as} $centered={centered} {...props}>
        {children}
      </StyledHeading>
    )
  },
)

Heading.displayName = 'Heading'
