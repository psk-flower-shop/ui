import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./dashboardThunks";
import { DashboardState } from "./dashboardTypes";

const initialState: DashboardState = {
  products: [],
};

const dashboardSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
  initialState,
  name: "dashboard",
  reducers: {},
});

const dashboardReducer = dashboardSlice.reducer;

export default dashboardReducer;
