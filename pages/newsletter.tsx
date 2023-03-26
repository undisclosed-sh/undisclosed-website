import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { NextPage } from 'next'
import styled, { css } from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { Layout, PageHead, PageHeading, Text } from '@components'
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

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const Newsletter: NextPage = () => {
  const { t } = useTranslation(['header', 'newsletter'])
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
      <PageHead pageName={t('header:newsletter')} />

      <Layout>
        <Wrapper>
          <PageHeading text={t('header:newsletter')} />

          <StyledText componentType="p">{t('newsletter:intro')}</StyledText>

          <StyledForm onSubmit={onSubmit}>
            <StyledInput
              type="email"
              placeholder={t('common:form.email') as string}
              value={email}
              onChange={onEmailChange}
              $error={emailError}
            />
            <StyledButton disabled={email.length === 0}>
              {t('common:form.submit')}
            </StyledButton>
          </StyledForm>
        </Wrapper>
      </Layout>
    </>
  )
}

export default Newsletter

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'header',
      'footer',
      'newsletter',
    ])),
  },
})
