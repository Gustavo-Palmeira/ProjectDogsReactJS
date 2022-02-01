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
  FORGOT_PASSWORD_REQUEST: '@user/FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS: '@user/FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_ERROR: '@user/FORGOT_PASSWORD_ERROR',
  RESET_PASSWORD_REQUEST: '@user/RESET_PASSWORD_REQUEST',
  RESET_PASSWORD_SUCCESS: '@user/RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_ERROR: '@user/RESET_PASSWORD_ERROR',
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

// Forgot Password
export function forgotPassword(forgot) {
  return { type: actionsTypes.FORGOT_PASSWORD_REQUEST, payload: { forgot } }
}

export function forgotPasswordSuccess(forgot) {
  return { type: actionsTypes.FORGOT_PASSWORD_SUCCESS, payload: { forgot } }
}

export function forgotPasswordError(error) {
  return { type: actionsTypes.FORGOT_PASSWORD_ERROR, payload: { error } }
}

// Reset Password
export function resetPassword(reset) {
  return { type: actionsTypes.RESET_PASSWORD_REQUEST, payload: { reset } }
}

export function resetPasswordSuccess(reset) {
  return { type: actionsTypes.RESET_PASSWORD_SUCCESS, payload: { reset } }
}

export function resetPasswordError(error) {
  return { type: actionsTypes.RESET_PASSWORD_ERROR, payload: { error } }
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
