import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../../types/ProductTypes";
import { RootState } from "../store";
// import productData from "../../data/products.json"

export interface productState {
  currentPage: number;
  data: ProductTypes[];
}

const initialState: productState = {
  currentPage: 1,
  data: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    pageChange: (state, action: PayloadAction<number>) => {

      state.currentPage=action.payload
    //   state.data = productData.products.filter((_,index)=>action.payload * 10 > index && action.payload * 10 - 10 <= index)
    },
    pageChangeWithData: (state,action:PayloadAction<ProductTypes[]>)=>{
     state.data=action.payload

    }
  },
});

export const { pageChange,pageChangeWithData } =
  productSlice.actions;

export const selectPage = (state: RootState) => state.product.currentPage;

export const selectProduct = (state: RootState) => state.product.data;

export default productSlice.reducer;
