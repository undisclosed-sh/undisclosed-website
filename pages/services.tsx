import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Layout, PageHead } from '@components'
import { PageHeading } from '@components/lib/pageH-heading'
import { useTranslation } from 'next-i18next'
import { Translation, TranslationList } from '@custom-types'
import ReactMarkdown from 'react-markdown'
import { createElement } from 'react'

const Services: NextPage = () => {
  const { t } = useTranslation(['header', 'services'])

  return (
    <>
      <PageHead pageName={t('services')} />

      <Layout flexDirection="column">
        <PageHeading text={t('services')} />

        <main>
          {(
            t('services:mainContent', { returnObjects: true }) as (
              | Translation
              | TranslationList
            )[]
          ).map((paragraph, index: number) =>
            paragraph.contentType === 'list' ? (
              <ul key={`services_paragraph_${index}`}>
                {(paragraph as TranslationList)?.list?.map(
                  (listItem, index: number) => (
                    <li key={`about_list_item_${index}`}>
                      {listItem.contentType.toLowerCase().includes('rich') ? (
                        <ReactMarkdown>{listItem.text}</ReactMarkdown>
                      ) : listItem.contentType.toLowerCase() === 'text' ? (
                        listItem.text
                      ) : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(
                          listItem.contentType.toLowerCase(),
                        ) ? (
                        createElement(
                          listItem.contentType.toLowerCase(),
                          {},
                          listItem.text,
                        )
                      ) : (
                        <p>{listItem.text}</p>
                      )}
                    </li>
                  ),
                )}
              </ul>
            ) : paragraph.contentType.toLowerCase().includes('rich') ? (
              <ReactMarkdown>{paragraph.text}</ReactMarkdown>
            ) : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(
                paragraph.contentType.toLowerCase(),
              ) ? (
              createElement(
                paragraph.contentType.toLowerCase(),
                {},
                paragraph.text,
              )
            ) : (
              <p key={`services_paragraph_${index}`}>{paragraph.text}</p>
            ),
          )}
        </main>
      </Layout>
    </>
  )
}

export default Services

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'header',
      'footer',
      'services',
    ])),
  },
})
