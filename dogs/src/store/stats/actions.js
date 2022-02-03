export const actionsTypes = {
  STATS_REQUEST: '@stats/STATS_REQUEST',
  STATS_SUCCESS: '@stats/STATS_SUCCESS',
  STATS_ERROR: '@stats/STATS_ERROR',
}

const baseSelector = (state) => state.stats

export function getStats() {
  return { type: actionsTypes.STATS_REQUEST }
}

export function getStatsSuccess(stats) {
  return { type: actionsTypes.STATS_SUCCESS, payload: { stats } }
}

export function getStatsError(error) {
  return { type: actionsTypes.STATS_ERROR, payload: { error } }
}

// Selectors
export function statsDataSelector(state) {
  return baseSelector(state)
}
