import { NavigationLinks } from '@custom-types'

export const navigation: Record<
  NavigationLinks,
  {
    route: string
    label: string
  }
> = {
  // home: {
  //   route: '/',
  //   label: 'home',
  // },
  services: {
    route: '/services',
    label: 'services',
  },
  // features: {
  //   route: '/features',
  //   label: 'features',
  // },
  aboutUs: {
    route: '/about-us',
    label: 'aboutUs',
  },
  // TODO: Add blog
  // blog: {
  //   route: '/blog',
  //   label: 'blog',
  // },
  contact: {
    route: '/contact',
    label: 'contact',
  },
  newsletter: {
    route: '/newsletter',
    label: 'newsletter',
  },
  // TODO: Add get started
  // getStarted: {
  //   route: '/get-started',
  //   label: 'getStarted',
  // },
}
