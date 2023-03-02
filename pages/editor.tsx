import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useIntl } from 'react-intl'

import { Layout, PageHead } from '@components'
import { pageTitles } from '@defs'
import { PageHeading } from '@components/lib/pageH-heading'
import { StyledButton, StyledTextarea, SuccessMessage } from './editor.styled'

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
      }, 750);
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
