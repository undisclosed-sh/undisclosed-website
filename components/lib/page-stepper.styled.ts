import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`

const commonPageStyles = `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.25) translateY(-50%);
  }
`

export const NextPage = styled(Link)`
  ${commonPageStyles}
  right: 0;
`

export const PrevPage = styled(Link)`
  ${commonPageStyles}
  left: 0;
`
