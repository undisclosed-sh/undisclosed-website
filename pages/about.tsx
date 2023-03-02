import { NextPage } from 'next'
import { useIntl } from 'react-intl'

import { Layout, PageHead } from '@components'
import { pageTitles } from '@defs'
import { PageHeading } from '@components/lib/pageH-heading'

const About: NextPage = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <PageHead pageName={formatMessage(pageTitles.about)} />

      <Layout>
        <PageHeading
          text={formatMessage({
            defaultMessage: 'About',
            id: 'about.title',
          })}
        />
      </Layout>
    </>
  )
}

export default About
