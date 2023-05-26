'use client'

import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import styled, { css } from 'styled-components'

import { PageHeading, Text } from '@components'
import { palette } from '@themes'
import { useTranslations } from 'next-intl'

const formHeight = '32px'

const StyledText = styled(Text)`
  align-self: center;
  text-align: center;
`

const StyledForm = styled.form`
  margin-top: 8px;
  align-self: center;
  height: ${formHeight};
  display: flex;
`

const StyledInput = styled.input<{ $error: boolean }>`
  height: ${formHeight};
  border: 0;
  padding: 0 12px;
  border: 1px solid ${palette('grey', '300')};
  font-size: 14px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &:focus,
  &:hover {
    border: 1px solid ${palette('blue', '300')};
    outline: 0;
  }

  ${({ $error }) =>
    $error &&
    css`
      &,
      &:focus,
      &:hover {
        border: 1px solid ${palette('red', '300')};
        outline: 0;
      }
    `}
`

const StyledButton = styled.button`
  height: ${formHeight};
  border: 0;
  padding: 0 12px;
  color: ${palette('common', 'white')};
  background-color: ${palette('blue', '500')};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: ${palette('grey', '400')};
  }
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export default function Page() {
  const t = useTranslations()
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const onEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setEmail(value)
    if (value.length > 0) {
      setEmailError(false)
    }
  }, [])

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (email.length === 0) {
        setEmailError(true)
        return
      }
    },
    [email.length],
  )

  return (
    <Wrapper>
      <PageHeading text={t('Header.newsletter')} />

      <StyledText componentType="p">{t('Newsletter.intro')}</StyledText>

      <StyledForm onSubmit={onSubmit}>
        <StyledInput
          type="email"
          placeholder={t('Common.form.email') as string}
          value={email}
          onChange={onEmailChange}
          $error={emailError}
        />
        <StyledButton disabled={email.length === 0}>
          {t('Common.form.submit')}
        </StyledButton>
      </StyledForm>
    </Wrapper>
  )
}
