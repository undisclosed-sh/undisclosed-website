export const defaultFontFamily = `Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`

export const headings = {
  h1: {
    mobile: 28,
    tablet: 32,
    desktop: 36,
    largeDesktop: 42,
  },
  h2: {
    mobile: 24,
    tablet: 28,
    desktop: 30,
    largeDesktop: 34,
  },
  h3: {
    mobile: 20,
    tablet: 24,
    desktop: 26,
    largeDesktop: 28,
  },
  h4: {
    mobile: 18,
    tablet: 20,
    desktop: 22,
    largeDesktop: 24,
  },
  h5: {
    mobile: 16,
    tablet: 18,
    desktop: 20,
    largeDesktop: 20,
  },
  h6: {
    mobile: 14,
    tablet: 16,
    desktop: 18,
    largeDesktop: 18,
  },
}

export const bodyText = {
  body: {
    mobile: 15,
    tablet: 18,
    desktop: 18,
    largeDesktop: 18,
  },
  small: {
    mobile: 14,
    tablet: 14,
    desktop: 14,
    largeDesktop: 14,
  },
}

export const typographyScaleMap = {
  ...headings,
  ...bodyText,
}

export const typographyScale = (
  scale: keyof typeof typographyScaleMap,
  device: 'desktop' | 'mobile',
): string => {
  if (!typographyScaleMap[scale][device]) {
    throw new Error(`Invalid typography scale: ${scale}`)
  }

  return `${typographyScaleMap[scale]}px`
}

type TypographyScale = keyof typeof typographyScaleMap
type TypographyElement = {
  fontSize: string
  fontWeight: number
  lineHeight: number
}

export const typographyElements = Object.entries(typographyScaleMap).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: {
      fontSize: `${value.desktop * 1.5}px`,
      fontWeight: key in headings ? 500 : 400,
      lineHeight: `${value.desktop * 1.5}px`,
    },
  }),
  {},
) as Record<TypographyScale, TypographyElement>
