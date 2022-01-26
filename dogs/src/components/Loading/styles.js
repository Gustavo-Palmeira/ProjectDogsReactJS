import styled from "styled-components"

import { Theme } from '../../theme'

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 1000;

  .loading {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    padding-left: 4px;
    border-radius: 50%;
    background-color: ${`${Theme.colors.white}DD`};
  }
`