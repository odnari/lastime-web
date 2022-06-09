import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiUrls } from '../config'
import apiClient from '../utils/apiClient'

const initialState = {
  items: [],
  loading: {
    create: null,
    entryCreate: null,
  },
  errors: {
    create: null,
    entryCreate: null,
  }
}

export const FETCH_TIMES = 'FETCH_TIMES'
export const CREATE_TIME = 'CREATE_TIME'
export const CREATE_TIME_ENTRY = 'CREATE_TIME_ENTRY'

export const fetchTimes = createAsyncThunk(
  FETCH_TIMES,
  async (payload, { getState, dispatch }) => await apiClient({
      dispatch,
      token: getState().user.token
    },
    apiUrls.times.byUsername(getState().user.profile.username))
    .get()
    .res(res => res.json())
)

export const createTime = createAsyncThunk(
  CREATE_TIME,
  async (payload, { getState, dispatch }) => await apiClient({
      dispatch,
      token: getState().user.token
    },
    apiUrls.times.root)
    .post(payload)
    .res(res => res.json())
)

export const createTimeEntry = createAsyncThunk(
  CREATE_TIME_ENTRY,
  async ({ id, ...payload }, { getState, dispatch }) => await apiClient({
    dispatch,
    token: getState().user.token
  }, apiUrls.entries.root(id))
    .post(payload)
    .res(res => res.json())
)

const timesSlice = createSlice({
  name: 'times',
  initialState,
  extraReducers: {
    [fetchTimes.fulfilled]: (state, { payload }) => {
      state.items = payload
    },
    [createTime.pending]: (state) => {
      state.loading.create = true
    },
    [createTime.fulfilled]: (state, { payload }) => {
      state.items.unshift(payload)
      state.loading.create = null
    },
    [createTime.rejected]: (state) => {
      state.loading.create = false
    },
    [createTimeEntry.pending]: (state) => {
      state.loading.entryCreate = true
    },
    [createTimeEntry.fulfilled]: (state, { payload }) => {
      state.items = state.items.map(i => {
        if (i.id === payload.parentId) {
          i.times.unshift(payload.data)
        }

        return i
      })
      state.loading.entryCreate = null
    },
    [createTimeEntry.rejected]: (state) => {
      state.loading.entryCreate = false
    }
  }
})

export default timesSlice.reducer
