import { pxToRem } from '@themes'
import Link from 'next/link'

import styled from 'styled-components'

export const StyledLink = styled(Link)`
  display: inline-block;
  width: fit-content;
  margin-top: ${pxToRem(12)};
  text-decoration: none;
  border-bottom: 1px solid #adb5bd;
`
