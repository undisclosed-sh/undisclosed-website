import { NextPage } from 'next'
import { useIntl } from 'react-intl'

import { Layout, PageHead } from '@components'

const About: NextPage = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <PageHead pageName="About" />

      <Layout>
        <h1>
          {formatMessage({
            defaultMessage: 'About',
            id: 'about.title',
          })}
        </h1>
      </Layout>
    </>
  )
}

export default About
