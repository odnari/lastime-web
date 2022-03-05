export const API_BASE_URL = import.meta.env.VITE_API_URL

export const defaultAuthHome = '/times'

export const apiUrls = {
  createUser: `${API_BASE_URL}/users/register`,
  login: `${API_BASE_URL}/users/login`,
  lastTime: `${API_BASE_URL}/times`,
  lastTimeByUser: (username) => `${API_BASE_URL}/times/u/${username}`,
  lastTimeWithId: (id) => `${API_BASE_URL}/times/${id}`,
  entry: (id) => `${API_BASE_URL}/times/${id}/entries`,
  entryWithId: (id, eid) => `${API_BASE_URL}/times/${id}/entries/${eid}`,
}
