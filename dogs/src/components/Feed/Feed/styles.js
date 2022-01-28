import styled from "styled-components"
import { Theme } from "../../../theme"

export const Container = styled.div``

export const InfinitePhotosMessage = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0;

  p {
    color: ${Theme.colors.quinary};
    font-family: ${Theme.fonts.primary};
    font-weight: bold;
    font-size: 16px;
    text-align: center;
  }
`