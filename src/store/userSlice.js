import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiUrls } from '../config'
import apiClient from '../utils/apiClient'
import { saveToken } from '../utils/authService'

const initialState = {
  profile: null,
}

const CREATE_USER = 'CREATE_USER'
const LOGIN_USER = 'LOGIN_USER'

export const createUser = createAsyncThunk(
  CREATE_USER,
  async (payload) => await apiClient(apiUrls.users.create)
    .post(payload)
    .res(res => res.json())
    .then(res => {
      saveToken(res.token)

      return res
    })
)

export const loginUser = createAsyncThunk(
  LOGIN_USER,
  async (payload) => await apiClient(apiUrls.users.login)
    .post(payload)
    .res(res => res.json())
    .then(res => {
      saveToken(res.token)

      return res
    })
)

const authenticatedReducer = (state, { payload }) => {
  delete payload.token

  state.profile = payload
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [createUser.fulfilled]: authenticatedReducer,
    [loginUser.fulfilled]: authenticatedReducer,
  }
})

export default userSlice.reducer
