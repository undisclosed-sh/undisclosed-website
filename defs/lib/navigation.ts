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
    hidden: true,
  },
  features: {
    route: '/features',
    label: 'features',
    disabled: true,
    hidden: true,
  },
  aboutUs: {
    route: '/about',
    label: 'aboutUs',
    disabled: true,
    hidden: true,
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
    hidden: true,
  },
  newsletter: {
    route: '/newsletter',
    label: 'newsletter',
    disabled: true,
    hidden: true,
  },
  getStarted: {
    route: '/get-started',
    label: 'getStarted',
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
