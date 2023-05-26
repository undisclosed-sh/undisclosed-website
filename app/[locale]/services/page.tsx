'use client'

import { PageHeading } from '@components'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'

const Intro = styled.div`
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
  const t = useTranslations('Services')

  return (
    <>
      <PageHeading text={t('title')} />

      <Intro>{t('subtitle')}</Intro>

      <Content>
        <h2>{t('services.heading')}</h2>

        <h3>{t('services.apps.heading')}</h3>

        <p>{t('services.apps.content')}</p>

        <h3>{t('services.product.heading')}</h3>

        <p>{t('services.product.content')}</p>

        <h3>{t('services.management.heading')}</h3>

        <p>{t('services.management.content')}</p>

        <h2>{t('ourApproach.heading')}</h2>

        <p>{t('ourApproach.content')}</p>

        <h3>{t('ourApproach.stages.discovery.heading')}</h3>

        <p>{t('ourApproach.stages.discovery.content')}</p>

        <h3>{t('ourApproach.stages.planning.heading')}</h3>

        <p>{t('ourApproach.stages.planning.content')}</p>

        <h3>{t('ourApproach.stages.development.heading')}</h3>

        <p>{t('ourApproach.stages.development.content')}</p>

        <h3>{t('ourApproach.stages.delivery.heading')}</h3>

        <p>{t('ourApproach.stages.delivery.content')}</p>
      </Content>
    </>
  )
}
