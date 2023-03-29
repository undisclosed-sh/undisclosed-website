import { memo } from 'react'

import { StyledButton } from './button.styled'

interface ButtonProps {
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset' | undefined
  className?: string
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  onClick?: () => void
}

export const Button = memo(({ type = 'button', children, className, variant, onClick }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} className={className} $variant={variant}>
      {children}
    </StyledButton>
  )
})

Button.displayName = 'Button'
