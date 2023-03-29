import { NavigationLinks } from '@custom-types'

export const navigation: Record<
  NavigationLinks,
  {
    route: string
    label: string
    disabled?: boolean
  }
> = {
  services: {
    route: '/services',
    label: 'services',
    disabled: true,
  },
  features: {
    route: '/features',
    label: 'features',
    disabled: true,
  },
  aboutUs: {
    route: '/about',
    label: 'aboutUs',
    disabled: true,
  },
  blog: {
    route: '/blog',
    label: 'blog',
    disabled: true,
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
  },
  getStarted: {
    route: '/get-started',
    label: 'getStarted',
    disabled: true,
  },
}
