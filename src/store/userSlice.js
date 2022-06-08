import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiUrls } from '../config'
import apiClient from '../utils/apiClient'

const initialState = {
  profile: null, token: null,
}

const CREATE_USER = 'CREATE_USER'
const LOGIN_USER = 'LOGIN_USER'

export const createUser = createAsyncThunk(
  CREATE_USER,
  async (payload) => await apiClient({
    payload, anonymous: true
  }, apiUrls.createUser)
    .post(payload)
    .res(res => res.json())
)

export const loginUser = createAsyncThunk(
  LOGIN_USER,
  async (payload) => await apiClient({
    payload, anonymous: true
  }, apiUrls.login)
    .post(payload)
    .res(res => res.json())
)

const authenticatedReducer = (state, { payload }) => {
  const { token, ...profile } = payload

  state.profile = profile
  state.token = token
}

const userSlice = createSlice({
  name: 'user', initialState, reducers: {
    logoutUser: () => {
      return { ...initialState }
    }
  }, extraReducers: {
    [createUser.fulfilled]: authenticatedReducer, [loginUser.fulfilled]: authenticatedReducer,
  }
})

export default userSlice.reducer
export const { logoutUser } = userSlice.actions
