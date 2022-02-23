import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import wretch from 'wretch'
import { API_BASE_URL } from '../config'

const initialState = {
  profile: null,
  token: null,
}

const CREATE_USER = 'CREATE_USER'
const LOGIN_USER = 'LOGIN_USER'

export const createUser = createAsyncThunk(
  CREATE_USER,
  async (payload) => await wretch(`${API_BASE_URL}/users/register`)
    .post(payload)
    .res(res => res.json())
)

export const loginUser = createAsyncThunk(
  LOGIN_USER,
  async (payload) => await wretch(`${API_BASE_URL}/users/login`)
    .post(payload)
    .res(res => res.json())
)

const authenticatedReducer = (state, { payload }) => {
  const { token, ...profile } = payload

  state.profile = profile
  state.token = token
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
