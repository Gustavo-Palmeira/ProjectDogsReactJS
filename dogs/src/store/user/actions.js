export const actionsTypes = {
  LOGIN_REQUEST: '@user/LOGIN_REQUEST',
  LOGIN_SUCCESS: '@user/LOGIN_SUCCESS',
  LOGIN_ERROR: '@user/LOGIN_ERROR',
  TOKEN_VALIDATE: '@user/VALIDATE_TOKEN',
  LOGOUT: '@user/LOGOUT',
  LOGOUT_SUCCESS: '@user/LOGOUT_SUCCESS',
  CREATE_USER_REQUEST: '@user/CREATE_USER_REQUEST',
  CREATE_USER_SUCCESS: '@user/CREATE_USER_SUCCESS',
  CREATE_USER_ERROR: '@user/CREATE_USER_ERROR',
  RESET_ERROR_LOADING: '@user/RESET_ERROR_LOADING',
}

const baseSelector = (state) => state.user

export function login(username, password) {
  return { type: actionsTypes.LOGIN_REQUEST, payload: { username, password } }
}

export function loginSuccess(user) {
  return { type: actionsTypes.LOGIN_SUCCESS, payload: { user } }
}

export function loginError(error) {
  return { type: actionsTypes.LOGIN_ERROR, payload: { error } }
}

export function logout() {
  return { type: actionsTypes.LOGOUT }
}

export function logoutSuccess() {
  return { type: actionsTypes.LOGOUT_SUCCESS }
}

export function tokenValidate(token) {
  return { type: actionsTypes.TOKEN_VALIDATE, payload: { token } }
}

export function createUser(username, email, password) {
  return { type: actionsTypes.CREATE_USER_REQUEST, payload: { username, email, password } }
}

export function createUserSuccess(user) {
  return { type: actionsTypes.CREATE_USER_SUCCESS, payload: { user } }
}

export function createUserError(error) {
  return { type: actionsTypes.CREATE_USER_ERROR, payload: { error } }
}

export function resetErrorLoading() {
  return { type: actionsTypes.RESET_ERROR_LOADING }
}

// Selectors
export function userDataSelector(state) {
  return baseSelector(state)
}

export function userSelector(state) {
  return baseSelector(state).user
}

export function loginErrorSelector(state) {
  return baseSelector(state).error
}

export function loginLoadingSelector(state) {
  return baseSelector(state).loading
}
