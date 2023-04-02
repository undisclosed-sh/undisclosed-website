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
}
