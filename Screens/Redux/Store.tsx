import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './features/Counterslice'
import  AuthSlice  from './features/Counterslice'


export const store = configureStore({
  reducer: {
    counter:counterSlice,
    auth:AuthSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch