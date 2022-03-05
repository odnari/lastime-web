import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './userSlice'
import timesReducer from './timesSlice'

export default combineReducers({
  user: persistReducer({ key: 'user', storage, whitelist: ['token', 'profile'] }, userReducer),
  times: timesReducer,
})
