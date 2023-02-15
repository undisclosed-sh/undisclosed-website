import { NextPage } from 'next'
import { useIntl } from 'react-intl'

import { Layout, PageHead } from '@components'

const Contact: NextPage = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <PageHead pageName="Contact" />

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
