import { useContext } from '@hooks'
import { createContext, useMemo, useState } from 'react'

type ThemeMode = 'light' | 'dark'

interface ThemeModeProviderContext {
  themeMode: ThemeMode
  handleThemeChange: (themeMode: ThemeMode) => void
  handleThemeToggle: () => void
}

export const ThemeModeContext = createContext<
  ThemeModeProviderContext | undefined
>(undefined)

interface ThemeModeProviderProps {
  children: React.ReactNode
}

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')

  const handleThemeChange = (themeMode: ThemeMode) => {
    setThemeMode(themeMode)
  }

  const handleThemeToggle = () => {
    setThemeMode((prevThemeMode) =>
      prevThemeMode === 'light' ? 'dark' : 'light',
    )
  }

  return (
    <ThemeModeContext.Provider
      value={{ themeMode, handleThemeChange, handleThemeToggle }}
    >
      {children}
    </ThemeModeContext.Provider>
  )
}

export const ThemeModeConsumer =
  ThemeModeContext.Consumer as React.Consumer<ThemeModeProviderContext>

export const useThemeMode = () => {
  const { themeMode, handleThemeChange, handleThemeToggle } =
    useContext(ThemeModeContext)

  return useMemo(
    () => ({ themeMode, handleThemeChange, handleThemeToggle }),
    [themeMode, handleThemeChange, handleThemeToggle],
  )
}
