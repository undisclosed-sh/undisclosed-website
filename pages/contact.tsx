import { NextPage } from 'next'
import { useIntl } from 'react-intl'

import { Layout, PageHead } from '@components'
import { pageTitles } from '@defs'

const Contact: NextPage = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <PageHead pageName={formatMessage(pageTitles.contact)} />

      <Layout>
        <h1>
          {formatMessage({
            defaultMessage: 'Contact',
            id: 'contact.title',
          })}
        </h1>
      </Layout>
    </>
  )
}

export default Contact
