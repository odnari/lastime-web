import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import wretch from 'wretch'
import { apiUrls } from '../config'

const initialState = {
  items: [],
  loading: {
    create: false,
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
  async (payload, { getState }) => await wretch(apiUrls.lastTimeByUser(getState().user.profile.username))
    .auth(getState().user.token)
    .get()
    .res(res => res.json())
)

export const createTime = createAsyncThunk(
  CREATE_TIME,
  async (payload, { getState }) => await wretch(apiUrls.lastTime)
    .auth(getState().user.token)
    .post(payload)
    .res(res => res.json())
)

export const createTimeEntry = createAsyncThunk(
  CREATE_TIME_ENTRY,
  async ({id, ...payload}, { getState }) => await wretch(apiUrls.entry(id))
    .auth(getState().user.token)
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
      state.loading.create = false
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
      state.loading.entryCreate = false
    },
    [createTimeEntry.rejected]: (state) => {
      state.loading.entryCreate = false
    }
  }
})

export default timesSlice.reducer
