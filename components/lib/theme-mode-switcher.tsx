import { ThemeMode } from '@custom-types'

import { Handle, Wrapper } from './theme-mode-switcher.styled'
import { IconMoon, IconSun } from '@themes/lib/icons'

interface ThemeModeSwitcherProps {
  themeMode: ThemeMode
  onClick: () => void
}

export const ThemeModeSwitcher = ({
  themeMode,
  onClick,
}: ThemeModeSwitcherProps) => {
  return (
    <Wrapper onClick={onClick} $themeMode={themeMode}>
      <Handle>
        {themeMode === 'light' && <IconMoon width={14} height={14} />}
        {themeMode === 'dark' && <IconSun width={16} height={16} />}
      </Handle>
    </Wrapper>
  )
}
