import { colors } from './colors'

export const palette = {
  primary: {
    light: colors.blue[300],
    main: colors.blue[500],
    dark: colors.blue[700],
  },
  secondary: {
    light: colors.grey[300],
    main: colors.grey[500],
    dark: colors.grey[700],
  },
  error: {
    main: colors.red[500],
  },
  warning: {
    main: colors.yellow[500]
  },
  info: {
    main: colors.blue[500]
  },
  success: {
    main: colors.green[500]
  },
  ...colors,
}

export type Palette = typeof palette

export const getColor = (
  color: keyof Palette,
  shade: string
): string => {
  // @ts-ignore TODO
  if (!palette[color]?.[shade]) throw new Error(`${color} ${shade} not found`);

  // @ts-ignore TODO
  return palette[color][shade]
}
