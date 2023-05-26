import { NavigationLinks } from '@custom-types'

export const navigation: Record<
  NavigationLinks,
  {
    route: string
    label: string
    disabled?: boolean
    hidden?: boolean
  }
> = {
  services: {
    route: '/services',
    label: 'services',
    disabled: true,
    hidden: false,
  },
  approach: {
    route: '/approach',
    label: 'approach',
    disabled: true,
    hidden: true,
  },
  aboutUs: {
    route: '/about',
    label: 'aboutUs',
    disabled: true,
    hidden: false,
  },
  blog: {
    route: '/blog',
    label: 'blog',
    disabled: true,
    hidden: true,
  },
  contact: {
    route: '/contact',
    label: 'contact',
    disabled: false,
    hidden: false,
  },
  newsletter: {
    route: '/newsletter',
    label: 'newsletter',
    disabled: true,
    hidden: true,
  },
  signIn: {
    route: '/api/auth/login',
    label: 'signIn',
    disabled: true,
    hidden: true,
  },
}
