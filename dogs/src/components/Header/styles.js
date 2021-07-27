import styled from 'styled-components'
import userSvg from '../../assets/usuario.svg'

export const Container = styled.header`
  position: fixed;
  width: 100%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.white};
  top: 0px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  .logo {
    padding: 0.5rem 0;
  }

  .login {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      content: '';
      display: block;
      width: 14px;
      height: 17px;
      background: url(${userSvg}) no-repeat center center;
      margin-left: 0.5rem;
      position: relative;
      top: -1px;
    }
  }
`
