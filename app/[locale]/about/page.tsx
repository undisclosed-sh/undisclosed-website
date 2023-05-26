'use client'

import { PageHeading } from '@components'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'

const Intro = styled.p`
  font-size: 16px;
  margin-top: 18px;
  margin-bottom: 32px;
  text-align: center;
  color: #adb5bd;
`

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
`

export default function Page() {
  const t = useTranslations('About')
  // console.log(t('mainContent'))

  return (
    <>
      <PageHeading text={t('title')} />

      <Intro>{t('subtitle')}</Intro>

      <Content>
        <h2>{t('ourStory.heading')}</h2>

        <p>{t('ourStory.content')}</p>

        <h2>{t('ourPhilosophy.heading')}</h2>

        <p>{t('ourPhilosophy.content')}</p>

        <h2>{t('ourCommitment.heading')}</h2>

        <p>{t('ourCommitment.content')}</p>

        <h2>{t('ourCulture.heading')}</h2>

        <p>{t('ourCulture.content')}</p>

        <h2>{t('ourTeam.heading')}</h2>

        <p>{t('ourTeam.content')}</p>
      </Content>
    </>
  )
}
