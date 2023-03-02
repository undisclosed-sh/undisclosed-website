import { useCallback, useMemo } from 'react'

const delimiter = '_'
const storagePrefix = 'undisclosed'

export const useStorage = () => {
  const getItem = useCallback(
    (storage: 'local' | 'session' = 'local', itemName: string) => {
      let item = null
      try {
        if (storage === 'local') {
          item = window.localStorage.getItem(`${storagePrefix}${delimiter}${itemName}`)
        } else {
          item = window.sessionStorage.getItem(`${storagePrefix}${delimiter}${itemName}`)
        }
      } catch (e) {
        console.error(`${storage} storage is not available`, e)
      }

      return item
    },
    [],
  )

  const setItem = useCallback(
    (
      itemName: string,
      item: unknown,
      storage: 'local' | 'session' = 'local',
    ) => {
      try {
        if (storage === 'local') {
          window.localStorage.setItem(`${storagePrefix}${delimiter}${itemName}`, JSON.stringify(item))
        } else {
          window.sessionStorage.setItem(`${storagePrefix}${delimiter}${itemName}`, JSON.stringify(item))
        }
      } catch (e) {
        console.error(`${storage} storage is not available`, e)
      }
    },
    [],
  )

  return useMemo(
    () => ({
      getItem,
      setItem,
    }),
    [getItem, setItem],
  )
}
