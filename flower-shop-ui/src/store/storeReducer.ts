import { combineReducers } from "@reduxjs/toolkit";
import { dashboardReducer } from "features/Dashboard";
import productsListReducer from "features/ProductsList/state/productListSlice";

export default combineReducers({
  dashboard: dashboardReducer,
  productsList: productsListReducer,
});
