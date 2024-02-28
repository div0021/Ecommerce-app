import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./Slices/cartSlice"
import productReducer from "./Slices/productSlice"
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product:productReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch