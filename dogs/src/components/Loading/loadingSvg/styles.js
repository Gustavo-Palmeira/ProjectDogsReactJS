import styled from "styled-components"

export const SvgBox = styled.div`
  g:nth-child(1) {
    display: ${({ step }) => step === 0 ? 'block' : 'none'};
  }
  g:nth-child(2) {
    display: ${({ step }) => step === 1 ? 'block' : 'none'};
  }
  g:nth-child(3) {
    display: ${({ step }) => step === 2 ? 'block' : 'none'};
  }
  g:nth-child(4) {
    display: ${({ step }) => step === 3 ? 'block' : 'none'};
  }
  g:nth-child(5) {
    display: ${({ step }) => step === 4 ? 'block' : 'none'};
  }
`