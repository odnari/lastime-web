import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const index = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: {
    name: 'Lastime'
  }
})

if (process.env.NODE_ENV !== 'production' && import.meta.hot) {
  import.meta.hot.accept('./rootReducer', () => index.replaceReducer(rootReducer))
}

export default index
