import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Layout, PageHead } from '@components'
import { PageHeading } from '@components/lib/pageH-heading'
import { useTranslation } from 'react-i18next'

const Contact: NextPage = () => {
  const { t } = useTranslation('header')

  return (
    <>
      <PageHead pageName={t('contact')} />

      <Layout>
        <PageHeading text={t('contact')} />
      </Layout>
    </>
  )
}

export default Contact

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
  },
})
