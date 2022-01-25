import styled from "styled-components"
import { skeleton } from "../../helpers/animations"
import { Theme } from "../../theme"

export const Wrapper = styled.div`
  display: grid;
  background-color: red;

  .image {
    display: block;
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    grid-area: 1/1;
    opacity: ${({ isSkeleton }) => isSkeleton ? 0 : 1};
    transition: .2s;
  }

  .skeleton {
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(
      90deg,
      ${Theme.colors.light} 0px,
      ${Theme.colors.white} 50%,
      ${Theme.colors.light} 100%
    );
    background-color: ${Theme.colors.light};
    background-size: 200%;
    animation: ${skeleton} 1.5s infinite linear;
  }
`