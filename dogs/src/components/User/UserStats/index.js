import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStats, statsDataSelector } from '../../../store/stats/actions'
import { Head } from '../../Head'
import { Loading } from '../../Loading'
import { Error } from '../../Forms/Input/styles'

import { Container } from './styles'
import UserStatusCharts from '../UserStatusCharts'

const UserStats = () => {
  const dispatch = useDispatch()
  const { stats, loading, error } = useSelector(statsDataSelector)

  useEffect(() => {
    dispatch(getStats())
  }, [])

  if (loading) <Loading />
  if (error) <Error>{error}</Error>
  if (stats)
  return (
    <Container>
      <Head title='Estatísticas' />
      <UserStatusCharts stats={stats} />      
    </Container>
  )
  return null
}

export default UserStats
