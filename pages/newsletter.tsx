import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { NextPage } from 'next'
import { useIntl } from 'react-intl'
import styled, { css } from 'styled-components'

import { Layout, PageHead, PageHeading, Text } from '@components'
import { pageTitles } from '@defs'
import { palette, pxToRem } from '@themes'

const formHeight = pxToRem(32)

const StyledText = styled(Text)`
  align-self: center;
  text-align: center;
`

const StyledForm = styled.form`
  margin-top: ${pxToRem(8)};
  align-self: center;
  height: ${formHeight};
  display: flex;
`

const StyledInput = styled.input<{ $error: boolean }>`
  height: ${formHeight};
  border: 0;
  padding: 0 ${pxToRem(12)};
  border: 1px solid ${palette('grey', '300')};
  font-size: 14px;
  border-top-left-radius: ${pxToRem(4)};
  border-bottom-left-radius: ${pxToRem(4)};

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
  padding: 0 ${pxToRem(12)};
  color: ${palette('common', 'white')};
  background-color: ${palette('blue', '500')};
  border-top-right-radius: ${pxToRem(4)};
  border-bottom-right-radius: ${pxToRem(4)};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: ${palette('grey', '400')};
  }
`

const Newsletter: NextPage = () => {
  const { formatMessage } = useIntl()
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
    <>
      <PageHead pageName={formatMessage(pageTitles.newsletter)} />

      <Layout>
        <PageHeading
          text={formatMessage({
            defaultMessage: 'Newsletter',
            id: 'newsletter.title',
          })}
        />

        <StyledText componentType="p">
          {formatMessage({
            defaultMessage:
              'We are always working on some interesting project. You can subscribe to our newsletter to stay up to date with latest news.',
            id: 'newsletter.intro',
          })}
        </StyledText>

        <StyledForm onSubmit={onSubmit}>
          <StyledInput
            type="text"
            placeholder={formatMessage({
              id: 'newsletter.inputPlaceholder',
              defaultMessage: 'Your e-mail',
            })}
            value={email}
            onChange={onEmailChange}
            $error={emailError}
          />
          <StyledButton disabled={email.length === 0}>
            {formatMessage({
              defaultMessage: 'Send',
              id: 'newsletter.submitButton',
            })}
          </StyledButton>
        </StyledForm>
      </Layout>
    </>
  )
}

export default Newsletter
