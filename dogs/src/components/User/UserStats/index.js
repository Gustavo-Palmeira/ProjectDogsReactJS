import React, { lazy, Suspense, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStats, statsDataSelector } from '../../../store/stats/actions'
import { Head } from '../../Head'
import { Loading } from '../../Loading'
import { Error } from '../../Forms/Input/styles'
import { Container } from './styles'

const UserStatusCharts = lazy(() => import('../UserStatusCharts'))

const UserStats = () => {
  const dispatch = useDispatch()
  const { stats, loading, error } = useSelector(statsDataSelector)

  useEffect(() => {
    dispatch(getStats())
  }, [])

  if (loading) return <Loading />
  if (error) return <Error>{error}</Error>
  if (stats)
  return (
    <Container>
      <Suspense fallback={<div />} >
        <Head title='Estatísticas' />
        <UserStatusCharts stats={stats} />      
      </Suspense>
    </Container>
  )
  return null
}

export default UserStats
