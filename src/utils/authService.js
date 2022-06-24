import { routes } from '../config'

const tokenKey = 'authToken'

export const logout = (redirect = routes.index) => {
  localStorage.clear()
  window.location.assign(redirect)
}

export const saveToken = (token) => {
  localStorage.setItem(tokenKey, token)
}

export const getToken = () => {
  return localStorage.getItem(tokenKey)
}
