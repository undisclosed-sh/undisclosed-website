export const transitionDuration = 0.25

export const transitionTimingFunction = 'ease-in-out'

export const transition = (properties: string[]) => {
  const transitionPContent = properties
  .map((property) => `${property} ${transitionDuration}s ${transitionTimingFunction}`)
  .join(',')

  return `
    transition: ${transitionPContent};
  `
}
