import styled from "styled-components"
import { Theme } from '../../theme'

export const Container = styled.footer`
  background-color: ${Theme.colors.primary};
  padding: 3rem 1rem 0;
  height: 10rem;
  text-align: center;

  p {
    margin-top: 1rem;
    font-family: ${Theme.fonts.primary};
    font-weight: bold;
    color: ${Theme.colors.light};
  }
`