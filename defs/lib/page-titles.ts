import { defineMessage, MessageDescriptor } from 'react-intl'

export type Pages =
  | 'home'
  | 'about'
  | 'contact'
  | 'playground'
  | 'editor'
  | 'newsletter'

export const pageTitles: Record<Pages, MessageDescriptor> = {
  home: defineMessage({
    id: 'pageTitle.home',
    defaultMessage: 'Home',
  }),
  about: defineMessage({
    id: 'pageTitle.about',
    defaultMessage: 'About',
  }),
  contact: defineMessage({
    id: 'pageTitle.contact',
    defaultMessage: 'Contact',
  }),
  playground: defineMessage({
    id: 'pageTitle.playground',
    defaultMessage: 'Playground',
  }),
  editor: defineMessage({
    id: 'pageTitle.editor',
    defaultMessage: 'Editor',
  }),
  newsletter: defineMessage({
    id: 'pageTitle.newsletter',
    defaultMessage: 'Newsletter',
  }),
}
