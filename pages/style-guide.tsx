import { NextPage } from 'next'
import styled from 'styled-components'

import { colors } from './../themes'

const Layout = styled.div`
  padding: 26px;
  background: ${colors.grey[100]};
`;

const StyleGuide: NextPage = () => {
  const colorsList = Object.entries(colors).map(([key, value]) => {
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
          <div key={key} className="color">
            <div className="color__name">{key}</div>
            <div className="color__value" style={{ background: value }}>{value}</div>
          </div>
        )
      })

      return items
    }
  })

  return (
    <Layout>
      <h1>StyleGuide</h1>

      <h2>Colors</h2>
      <div className="colors">{colorsList}</div>
    </Layout>
  )
}

export default StyleGuide
