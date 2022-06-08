import wretch from 'wretch'
import { logoutUser } from '../store/userSlice'

const onUnauthorized = dispatch => dispatch(logoutUser())

const authMiddleware = dispatch => next => (...args) => {
  return next(...args).then((res) => {
    if (res.status === 401) {
      onUnauthorized(dispatch)
    }

    return res
  })
}

const apiClient = ({ token, anonymous, dispatch }, ...args) => {
  let request = wretch(...args).middlewares([
    authMiddleware(dispatch),
  ])

  if (!anonymous) {
    request = request.auth(token)
  }

  return request
}

export default apiClient
