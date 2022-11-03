import { useMemo } from 'react'
import { NextPage } from 'next'

import { PageHead } from '@components';
import { colors, typographyElements } from '@themes'

import {
  ColorValue,
  Column,
  Layout,
  MainWrapper,
  PresetElement,
  PresetWrapper,
} from './style-guide.styled'

const StyleGuide: NextPage = () => {
  const colorsList = useMemo(() => Object.entries(colors).map(([key, value]) => {
    const val = value;

    if (typeof val === 'string') {
      return (
        <div key={key} className="color">
          <div className="color__name">{key}</div>
          <div className="color__value">{val}</div>
        </div>
      )
    } else if (typeof val === 'object') {
      const items = Object.entries(val).map(([key, value]) => {
        return (
          <PresetElement key={key} className="color">
            <div className="color__name">{key}</div>
            <ColorValue className="color__value" style={{ background: value }}>{value}</ColorValue>
          </PresetElement>
        )
      })

      return items
    }
  }), [])

  const typography = useMemo(() => Object.entries(typographyElements).map(([key, value]) => {
    return (
      <PresetElement key={key} className="color">
        <div className="color__name" style={{
          fontSize: value.fontSize,
          fontWeight: value.fontWeight,
          lineHeight: value.lineHeight,
        }}>{key} Lorem ipsum</div>
      </PresetElement>
    )
  }), [])

  return (
    <>
      <PageHead pageName="Style guide" />

      <Layout>

        <h1>StyleGuide</h1>

        <MainWrapper>
          <Column>
            <h2>Typography</h2>
            <PresetWrapper>{typography}</PresetWrapper>
          </Column>

          <Column>
            <h2>Colors</h2>
            <PresetWrapper className="colors">{colorsList}</PresetWrapper>
          </Column>
        </MainWrapper>
      </Layout>
    </>
  )
}

export default StyleGuide
