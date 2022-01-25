import styled from "styled-components"

export const Comments = styled.ul`
  overflow-y: auto;
  padding: 0 2rem;

  li {
    display: flex;
    margin-bottom: 0.5rem;
    line-height: 1.2;

    p {
      font-weight: bold;
      padding-right: 4px;
    }
  }
`
