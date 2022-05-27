import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsByCategory } from "./productListThunks";
import { ProductsListState } from "./productsListTypes";

const initialState: ProductsListState = {
  products: [],
};

const productsListSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
  initialState,
  name: "productsList",
  reducers: {},
});

const productsListReducer = productsListSlice.reducer;

export default productsListReducer;
