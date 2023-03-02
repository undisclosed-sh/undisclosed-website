export const defaultFontFamily = `Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`

export const headings = {
  h1: 48,
  h2: 36,
  h3: 30,
  h4: 24,
  h5: 20,
  h6: 18,
}

export const bodyText = {
  caption: 12,
  body1: 15,
  body2: 13,
}

export const typographyScaleMap = {
  ...headings,
  ...bodyText,
}

export const typographyScale = (scale: keyof typeof typographyScaleMap): string => {
  if (!typographyScaleMap[scale]) {
    throw new Error(`Invalid typography scale: ${scale}`)
  }

  return `${typographyScaleMap[scale]}px`
}

type TypographyScale = keyof typeof typographyScaleMap
type TypographyElement = {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
}

export const typographyElements = Object.entries(typographyScaleMap).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: {
      fontSize: `${value * 1.5}px`,
      fontWeight: key in headings ? 500 : 400,
      lineHeight: `${value * 1.5}px`,
    },
  }),
  {}
) as Record<TypographyScale, TypographyElement>
