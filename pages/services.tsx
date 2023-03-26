import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Layout, PageHead } from '@components'
import { PageHeading } from '@components/lib/pageH-heading'
import { useTranslation } from 'next-i18next'

const Services: NextPage = () => {
  const { t } = useTranslation('header')

  return (
    <>
      <PageHead pageName={t('services')} />

      <Layout>
        <PageHeading text={t('services')} />
      </Layout>
    </>
  )
}

export default Services

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
  },
})
