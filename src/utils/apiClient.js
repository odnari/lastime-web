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

const apiClient = (dispatch, ...args) => wretch(...args).middlewares([
  authMiddleware(dispatch)
])

export default apiClient
