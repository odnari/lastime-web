export const API_BASE_URL = import.meta.env.VITE_API_URL

export const apiUrls = {
  users: {
    create: `${API_BASE_URL}/users/register`,
    login: `${API_BASE_URL}/users/login`,
  },
  times: {
    root: `${API_BASE_URL}/times`,
    byUsername: (username) => `${API_BASE_URL}/times/u/${username}`,
    byId: (id) => `${API_BASE_URL}/times/${id}`
  },
  entries: {
    root: (timesId) => `${API_BASE_URL}/times/${timesId}/entries`,
    byId: (timesId, id) => `${API_BASE_URL}/times/${timesId}/entries/${id}`
  }
}

export const routes = {
  index: '/',
  home: '/app',
  auth: {
    login: '/auth/login',
    signup: '/auth/join',
  },
  profile: '/profile'
}
