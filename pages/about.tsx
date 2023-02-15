import { NextPage } from 'next'

import { Layout, PageHead } from '@components'

const About: NextPage = () => {
  return (
    <>
      <PageHead pageName="About" />

      <Layout>
        <h1>About</h1>
      </Layout>
    </>
  )
}

export default About
