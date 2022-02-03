import styled from 'styled-components'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

import { animateLeft } from '../../../helpers/animations'
import { Theme } from '../../../theme'

export const Container = styled.section`
  animation: ${animateLeft} 0.3s forwards;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 20px 0 60px;

  @media(max-width: 40rem) {
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
  }
`

export const Total = styled.div`
  grid-column: 1/3;
  padding: 2rem;
  font-size: 24px;
  box-shadow: 2px 2px 8px 2px ${`${Theme.colors.primary}22`};
  border-radius: .2rem;

  @media(max-width: 40rem) {
    grid-column: 1;
  }
`

export const ChartItem = styled.div`
  box-shadow: 2px 2px 8px 2px ${`${Theme.colors.primary}22`};
  border-radius: .2rem;
  display: grid;
  align-items: center;
`

export const Pie = styled(VictoryPie).attrs(() => ({
  innerRadius: 48,
  padding: {
    top: 20,
    right: 80,
    bottom: 20,
    left: 80
  },
  style: {
    data: {
      fillOpacity: .9,
      stroke: Theme.colors.white,
      strokeWidth: 2
    },
    labels: {
      fontSize: 14,
      fill: Theme.colors.primary,
    }
  }
}))``

export const Chart = styled(VictoryChart).attrs(() => ({
  padding: {
    top: 20,
    right: 60,
    bottom: 20,
    left: 40
  },
}))``

export const Bar = styled(VictoryBar).attrs(() => ({
  alignment: 'start'
}))``