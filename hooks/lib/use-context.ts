import React from 'react'

export const useContext = <T>(context: React.Context<T | undefined>): T => {
  const result = React.useContext(context)
  if (!result) {
    throw Error(context.displayName || 'ctx')
  }
  return result
}
