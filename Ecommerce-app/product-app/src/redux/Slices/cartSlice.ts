import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../../types/ProductTypes";
import { RootState } from "../store";

export interface cartState {
  isOpen: boolean;
  data: ProductTypes[];
}

const initialState: cartState = {
  isOpen: false,
  data: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onOpenWithData: (state, action: PayloadAction<ProductTypes>) => {
        // check it already present or not
      const result = state.data.filter(el=>el.title===action.payload.title)

      if(result.length===0){
        state.data.push(action.payload);
      }
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((el) => el.title !== action.payload);
    },
  },
});

export const { onClose, onOpen, onOpenWithData, removeProduct } =
  cartSlice.actions;

export const selectOpen = (state: RootState) => state.cart.isOpen;

export const cartData = (state: RootState) => state.cart.data;

export default cartSlice.reducer;
