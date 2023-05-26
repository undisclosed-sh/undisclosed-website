import { memo, useMemo } from 'react'

import { CopyText, FooterComponent, SocialsList } from './footer.styled'
import { socials } from '@defs'

export const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear().toString(), [])

  return (
    <FooterComponent>
      <SocialsList>
        {Object.values(socials)
          .filter((link) => !link.hidden)
          .map((social, i) => (
            <li key={`social_${social.label}_${i}`}>
              <a href={social.route} rel="noopener noreferrer">
                {social.component()}
              </a>
            </li>
          ))}
      </SocialsList>
      <CopyText>
        Copyright &copy; <span>{currentYear}</span>&nbsp;Undisclosed
      </CopyText>
    </FooterComponent>
  )
})

Footer.displayName = 'Footer'
