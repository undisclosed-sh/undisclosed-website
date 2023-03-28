import styled from 'styled-components'

export const StyledHeading = styled.p<{ $centered?: boolean }>`
  ${({ $centered }) => $centered ? 'text-align: center;' : ''}
`
