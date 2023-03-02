import { NextPage } from 'next'
import { useIntl } from 'react-intl'

import { Layout, PageHead } from '@components'
import { pageTitles } from '@defs'
import { PageHeading } from '@components/lib/pageHeading'

const Contact: NextPage = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <PageHead pageName={formatMessage(pageTitles.contact)} />

      <Layout>
        <PageHeading
          text={formatMessage({
            defaultMessage: 'Contact',
            id: 'contact.title',
          })}
        />
      </Layout>
    </>
  )
}

export default Contact
