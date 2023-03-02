import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useIntl } from 'react-intl'
import styled from 'styled-components'

import { Layout, PageHead } from '@components'
import { pageTitles } from '@defs'
import { PageHeading } from '@components/lib/pageH-heading'
import { palette, pxToRem } from '@themes'

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 1px solid ${palette('grey', 400)};
  border-radius: ${pxToRem(8)};
  transition: border-color 0.2s ease-out;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid ${palette('blue', 400)};
  }
`

const StyledButton = styled.button`
  display: flex;
  align-self: center;
  padding: ${pxToRem(8)} ${pxToRem(12)};
  border-radius: ${pxToRem(6)};
  border: 0;
  margin-top: ${pxToRem(8)};
  color: ${palette('common', 'white')};
  background-color: ${palette('blue', 600)};
  cursor: pointer;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${palette('blue', 500)};
  }
`

const SuccessMessage = styled.span`
  margin-top: ${pxToRem(8)};
  margin-bottom: ${pxToRem(8)};
  padding: ${pxToRem(8)} ${pxToRem(12)};
  font-size: 12px;
  text-align: center;
  display: flex;
  align-self: center;
  border-radius: ${pxToRem(4)};
  color: ${palette('common', 'white')};
  background-color: ${palette('green', 400)};
`

const Editor: NextPage = () => {
  const { formatMessage } = useIntl()
  const [translations, setTranslations] = useState<string | undefined>(
    undefined,
  )
  const [successMessageVisible, setSuccessMessageVisible] = useState(false)

  useEffect(() => {
    if (successMessageVisible) {
      setTimeout(() => {
        setSuccessMessageVisible(false)
      }, 750)
    }
  }, [successMessageVisible])

  const onInputChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value

    setTranslations(value)
  }, [])

  const onSaveChanges = useCallback(async () => {
    try {
      const res = await fetch('/api/translate', {
        method: 'PUT',
        body: JSON.stringify({
          locale: 'en',
          data: translations,
        }),
      })

      if (res.status === 200) {
        setSuccessMessageVisible(true)
      }
    } catch (e) {
      console.error(e)
    }
  }, [translations])

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const res = await fetch('/api/translate', {
          method: 'POST',
          body: JSON.stringify({
            locale: 'en',
          }),
        })
        const data = (await res.json()) as {
          data: Record<string, string> | {}
          message: string
        }

        setTranslations(JSON.stringify(data.data, null, 2))
      } catch (e) {
        console.error(e)
      }
    }

    fetchTranslations()
  }, [])

  return (
    <>
      <PageHead pageName={formatMessage(pageTitles.editor)} />

      <Layout>
        <PageHeading
          text={formatMessage({
            defaultMessage: 'Editor',
            id: 'editor.title',
          })}
        />

        <StyledTextarea
          name=""
          id=""
          cols={30}
          rows={10}
          value={translations}
          onChange={onInputChange}
        ></StyledTextarea>

        {successMessageVisible && (
          <SuccessMessage>
            {formatMessage({
              defaultMessage: 'Translation data was successfully updated',
              id: 'editor.translationUpdateSuccessMessage',
            })}
          </SuccessMessage>
        )}

        <StyledButton type="button" onClick={onSaveChanges}>
          {formatMessage({
            defaultMessage: 'Save changes',
            id: 'editor.saveButton',
          })}
        </StyledButton>
      </Layout>
    </>
  )
}

export default Editor
