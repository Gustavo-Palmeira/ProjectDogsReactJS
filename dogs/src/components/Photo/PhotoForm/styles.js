import styled from "styled-components"
import { bark } from "../../../helpers/animations"
import { Theme } from "../../../theme"

export const Container = styled.div`
 .form {
   display: grid;
   grid-template-columns: 1fr auto;
   align-items: stretch;
   margin: 1rem;

   textarea {
     display: block;
     width: 100%;
     font-size: 1rem;
     font-family: ${Theme.fonts.primary};
     resize: none;
     border: 1px solid ${Theme.colors.light};
     padding: .5rem;
     border-radius: .2rem;
     background-color: ${Theme.colors.light};
     transition: .2s;

     &:focus,
     &:hover {
      outline: none;
      border-color: ${Theme.colors.secondary};
      background-color: ${Theme.colors.white};
      box-shadow: 0 0 0 3px ${Theme.colors.quaternary};
     }
   }

   button {
      border: none;
      cursor: pointer;
      color: ${Theme.colors.secondary};
      background-color: ${Theme.colors.transparent};
      font-size: 1rem;
      padding: 0 1rem;
      overflow: hidden;

      &:hover svg {
        outline: none;

        path {
          fill: ${Theme.colors.quaternary};
          stroke : ${Theme.colors.secondary};
        }

        g {
          animation: ${bark} .6s infinite;
        }
      }
   }

   .error {
     padding: 4px;
   }
 }
`