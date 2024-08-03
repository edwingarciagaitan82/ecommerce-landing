import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import cartSlice from './cartSlice'
export const store = () => {
  return configureStore({
    reducer: {
        user : userSlice,
        cart : cartSlice
    },
  })
}