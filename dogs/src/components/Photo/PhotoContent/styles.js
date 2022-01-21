import styled from "styled-components"
import { scaleUp } from "../../../helpers/animations"
import eyeSvg from '../../../assets/visualizacao-black.svg'

export const Photo = styled.div`
  height: 36rem;
  margin: auto;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  transform: scale(.6);
  animation: ${scaleUp} .3s forwards;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 2rem 0 2rem;
  }

  .author {
    opacity: .7;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      &:hover {
        text-decoration: underline;
      }
    }

    span {
      &:before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 10px;
        margin-right: .5rem;
        background: url('${eyeSvg}');
      }
    }
  }

  .attributes {
    display: flex;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.125rem;
    font-weight: bold;
    
    li {
      margin-right: 2rem;

      &:before {
        content: '';
        display: inline-block;
        height: 20px;
        margin-right: .5rem;
        position: relative;
        top: 3px;
        width: 2px;
        background: ${({ theme }) => theme.colors.primary};
        margin-top: 5px;
      }
    }
  }

  img {
    grid-row: 1/4;
  }

  @media(max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);

    img {
      grid-row: 1;
    }
  }
`