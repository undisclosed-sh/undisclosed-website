export const defaultFontFamily = `Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`

export const headings = {
  h1: {
    desktop: 40,
    mobile: 32,
  },
  h2: {
    desktop: 32,
    mobile: 28,
  },
  h3: {
    desktop: 24,
    mobile: 22,
  },
  h4: {
    desktop: 20,
    mobile: 18,
  },
  h5: {
    desktop: 16,
    mobile: 16,
  },
}

export const bodyText = {
  caption: {
    desktop: 12,
    mobile: 12,
  },
  body1: {
    desktop: 15,
    mobile: 15,
  },
  body2: {
    desktop: 13,
    mobile: 13,
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
