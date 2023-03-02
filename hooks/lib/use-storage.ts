import { useCallback, useMemo } from 'react'

const storagePrefix = 'undisclosed_'

export const useStorage = () => {
  const getItem = useCallback(
    (storage: 'local' | 'session' = 'local') => {
      let flags = null
      try {
        if (storage === 'local') {
          flags = window.localStorage.getItem(`${storagePrefix}featureFlags`)
        } else {
          flags = window.sessionStorage.getItem(`${storagePrefix}featureFlags`)
        }
      } catch (e) {
        console.error(`${storage} storage is not available`, e)
      }

      return flags
    },
    [],
  )

  const setItem = useCallback(
    (
      item: unknown,
      storage: 'local' | 'session' = 'local',
    ) => {
      try {
        if (storage === 'local') {
          window.localStorage.setItem(`${storagePrefix}featureFlags`, JSON.stringify(item))
        } else {
          window.sessionStorage.setItem(`${storagePrefix}featureFlags`, JSON.stringify(item))
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
