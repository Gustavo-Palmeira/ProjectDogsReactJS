import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Container, Total, ChartItem, Pie, Chart, Bar } from './styles'
import { Error } from '../../Forms/Input/styles'

const UserStatusCharts = ({ stats }) => {
  const [chart, setChart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const chartData = stats.map((item) => {
      return {
        x: item.title,
        y: item.acessos
      }
    })

    if (stats.length > 0) setTotal(stats.map(({ acessos }) => Number(acessos)).reduce((prev, element) => prev + element), 0)
    setChart(chartData)
  }, [stats])

  if (stats.length < 1)
  return (
    <Container>
      <Error>Nenhuma estatística encontrada</Error>
    </Container>
  )

  return (
    <Container>
      <Total>
          <p>Acessos: {total}</p>
      </Total>
      <ChartItem>
        <Pie data={chart} />
      </ChartItem>
      <ChartItem>
        <Chart>
          <Bar data={chart} />
        </Chart>
      </ChartItem>
    </Container>
  )
}

UserStatusCharts.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    acessos: PropTypes.string,
  })).isRequired
}

export default UserStatusCharts
