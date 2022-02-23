import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './userSlice'

export default combineReducers({
  user: persistReducer({ key: 'user', storage, whitelist: ['token', 'profile'] }, userReducer)
})
