import { GetServerSideProps, NextPage } from 'next'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import clientPromise from '@lib/mongo'
import { Movie } from '@custom-types'
import { Layout, PageHead } from '@components'
import { PageHeading } from '@components/lib/pageH-heading'

interface AboutProps {
  data?: Movie[]
}

const Playground: NextPage = ({ data }: AboutProps) => {
  const { t } = useTranslation('header')

  const movies = useMemo(() => {
    return (data || []).map((movie) => {
      return (
        <li key={movie._id}>
          <span>{movie.title}</span>
          &nbsp;
          <span>({movie.year})</span>
        </li>
      )
    })
  }, [data])

  return (
    <>
      <PageHead pageName={t('playground')} />

      <Layout>
        <PageHeading
          text={t('playground')}
        />
        <ul>{movies}</ul>
      </Layout>
    </>
  )
}

export default Playground

export const getServerSideProps: GetServerSideProps<{
  data: Movie[]
}> = async ({ locale }: any) => {
  try {
    const client = await clientPromise
    const db = client.db('sample_mflix')

    const movies = await db
      .collection('movies')
      .find({})
      .sort({ title: 1 })
      .limit(25)
      .toArray()

    return {
      props: {
        data: JSON.parse(JSON.stringify(movies)),
        ...(await serverSideTranslations(locale, ['common', 'header'])),
      },
    }
  } catch (error) {
    return {
      props: {
        data: [],
        ...(await serverSideTranslations(locale, ['common', 'header'])),
      },
    }
  }
}
