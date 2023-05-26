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

export default function Page() {
  const t = useTranslations('About')
  // console.log(t('mainContent'))

  return (
    <>
      <PageHeading text={t('title')} />
      <Intro>{t('subtitle')}</Intro>
    </>
  )
}
