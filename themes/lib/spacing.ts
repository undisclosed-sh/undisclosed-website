export const spacingMultiplier = 8
export const baseFontSize = 16

export const spacing = (px: number, multiplier: number = spacingMultiplier): string => {
  if (!px || typeof px !== 'number') {
    throw new Error('px is required')
  }

  return `${px * multiplier}px`
}

export const pxToRem = (px: number): string => {
  if (!px || typeof px !== 'number') {
    throw new Error('px is required')
  }

  return `${px / baseFontSize}rem`
}
