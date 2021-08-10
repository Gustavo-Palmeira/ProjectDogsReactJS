export const actionsTypes = {
  LOGIN_REQUEST: '@user/LOGIN_REQUEST',
  LOGIN_SUCCESS: '@user/LOGIN_SUCCESS',
}

const baseSelector = (state) => state.user

export function login(username, password) {
  return { type: actionsTypes.LOGIN_REQUEST, payload: { username, password } }
}

export function loginSuccess(user) {
  return { type: actionsTypes.LOGIN_SUCCESS, payload: { user } }
}

export function userSelector(state) {
  return baseSelector(state).user
}
