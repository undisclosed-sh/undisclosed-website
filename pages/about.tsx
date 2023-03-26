import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Layout, PageHead } from '@components'
import { PageHeading } from '@components/lib/pageH-heading'
import { useTranslation } from 'next-i18next'

const About: NextPage = () => {
  const { t } = useTranslation('header')

  return (
    <>
      <PageHead pageName={t('about')} />

      <Layout>
        <PageHeading text={t('about')} />
      </Layout>
    </>
  )
}

export default About

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
  },
})
