import { ComponentType } from 'react'
import { UrlObject } from 'url';

import { StyledLink } from './link.styled'

interface LinkProps {
  as?: string | ComponentType<any> | undefined
  children?: React.ReactNode | never
  href: string | UrlObject;
  locale?: string | undefined;
}

export const Link = ({ children, ...props }: LinkProps) => {
  return (
    <StyledLink {...props}>
      {children}
    </StyledLink>
  )
}
