import { useMemo } from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'

import { PageHead } from '@components';
import { colors, typographyElements } from '@themes'

const Layout = styled.div`
  padding: 26px;
  background: ${colors.grey[100]};
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Column = styled.div`
  width: 50%;
  padding: 0 26px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

const PresetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const PresetElement = styled.div`
  padding: 8px 0;
`

const ColorValue = styled.div`
  padding: 4px 0;
`

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
