import styled from "styled-components"

export const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => `${theme.colors.primary}44`};
  top: 0;
  left: 0;
  z-index: 100;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;

  @media(max-width: 40rem) {
    padding: 2rem calc(2rem + 15px) 2rem 2rem;
  }
`