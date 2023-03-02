import { GetServerSideProps, NextPage } from 'next'
import { useMemo } from 'react'
import { useIntl } from 'react-intl'

import clientPromise from '@lib/mongo'
import { Movie } from '@custom-types'
import { Layout, PageHead } from '@components'
import { pageTitles } from '@defs'
import { PageHeading } from '@components/lib/pageHeading'

interface AboutProps {
  data?: Movie[]
}

const Playground: NextPage = ({ data }: AboutProps) => {
  const { formatMessage } = useIntl()
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
      <PageHead pageName={formatMessage(pageTitles.playground)} />

      <Layout>
        <PageHeading
          text={formatMessage({
            defaultMessage: 'Playground',
            id: 'playground.title',
          })}
        />
        <ul>{movies}</ul>
      </Layout>
    </>
  )
}

export default Playground

export const getServerSideProps: GetServerSideProps<{
  data: Movie[]
}> = async () => {
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
      },
    }
  } catch (error) {
    return {
      props: {
        data: [],
      },
    }
  }
}
