import wretch from 'wretch'
import { getToken, logout } from './authService'

const logoutMiddleware = () => next => (...args) => {
  return next(...args).then((res) => {
    if (res.status === 401) {
      logout()
    }

    return res
  })
}

const apiClient = (...args) => {
  let request = wretch(...args).middlewares([
    logoutMiddleware(),
  ])

  const token = getToken()

  if (token) {
    request = request.auth(token)
  }

  return request
}

export default apiClient
