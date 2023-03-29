import { memo } from 'react'

import {
  StyledErrorMessage,
  StyledInput,
  StyledLabel,
} from './form-field.styled'

interface FormFieldProps {
  label: string
  name: HTMLInputElement['name']
  type: HTMLInputElement['type']
  placeholder: HTMLInputElement['placeholder']
  value: string
  className?: string
  component?: 'input' | 'textarea'
  error?: string
  required?: boolean
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
}

export const FormField = memo(
  ({
    label,
    name,
    className,
    type,
    placeholder,
    value,
    onChange,
    component = 'input',
    error,
    required,
  }: FormFieldProps) => {
    return (
      <div className={className}>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        <StyledInput
          id={name}
          as={component}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
        />
        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
      </div>
    )
  },
)

FormField.displayName = 'FormField'
