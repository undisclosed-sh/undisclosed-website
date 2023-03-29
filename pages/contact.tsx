import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { object, string, ValidationError } from 'yup'
import styled from 'styled-components'

import { Button, FormField, Layout, PageHead, PageHeading } from '@components'
import { colorPalette, pxToRem } from '@themes'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const StyledFormField = styled(FormField)`
  margin-bottom: ${pxToRem(16)};
  width: 100%;

  textarea {
    min-height: ${pxToRem(80)};
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${pxToRem(480)};
`

const StyledButton = styled(Button)`
  width: 100%;
  background-color: ${colorPalette.text.main};

  &:hover {
    background-color: ${colorPalette.text.light};
  }
`

const StyledMessage = styled.p`
  font-size: ${pxToRem(15)};
`

const Contact: NextPage = () => {
  const { t } = useTranslation(['header', 'footer', 'contact'])
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [errors, setErrors] = useState<Record<string, string>>({
    name: '',
    email: '',
    message: '',
  })
  const [successMessageVisible, setSuccessMessageVisible] =
    useState<boolean>(false)

  const schema = object({
    name: string().required(t('contact:validation.name.required') as string),
    email: string()
      .email(t('contact:validation.email.invalid') as string)
      .required(t('contact:validation.email.required') as string),
    message: string().required(
      t('contact:validation.message.required') as string,
    ),
  })

  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }, [])

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  const handleMessageChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value)
    },
    [],
  )

  const handleFormSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()

      try {
        const validationResult = await schema.validate({
          name,
          email,
          message,
        })

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(validationResult),
        })

        if (response.status === 200) {
          setName('')
          setEmail('')
          setMessage('')
          setSuccessMessageVisible(true)

          setTimeout(() => {
            setSuccessMessageVisible(false)
          }, 5000)
        }
      } catch (error) {
        const err = error as ValidationError

        const field = err.path
        const message = err.message

        setErrors((prev: Record<string, string>) => ({
          ...prev,
          [field as string]: message,
        }))

        console.log(field, message)
      }
    },
    [email, message, name, schema, setErrors],
  )

  return (
    <>
      <PageHead pageName={t('header:contact')} />

      <Layout flexDirection="column">
        <PageHeading text={t('header:contact')} />

        <StyledMain>
          <StyledForm action="" onSubmit={handleFormSubmit}>
            <StyledFormField
              name="name"
              label={t('contact:name')}
              type="text"
              placeholder=""
              value={name}
              error={errors.name}
              onChange={
                handleNameChange as (
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                ) => void
              }
            />
            <StyledFormField
              name="email"
              label={t('contact:email')}
              type="text"
              placeholder=""
              value={email}
              error={errors.email}
              onChange={
                handleEmailChange as (
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                ) => void
              }
            />
            <StyledFormField
              name="message"
              label={t('contact:message')}
              type="text"
              placeholder=""
              component="textarea"
              value={message}
              error={errors.message}
              onChange={
                handleMessageChange as (
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                ) => void
              }
            />

            {successMessageVisible && (
              <StyledMessage>{t('contact:success')}</StyledMessage>
            )}

            <StyledButton type="submit">{t('contact:submit')}</StyledButton>
          </StyledForm>
        </StyledMain>
      </Layout>
    </>
  )
}

export default Contact

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'header',
      'footer',
      'contact',
    ])),
  },
})
