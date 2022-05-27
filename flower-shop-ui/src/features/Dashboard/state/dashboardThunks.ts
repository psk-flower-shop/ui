import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "services/api/productService";

export const fetchProducts = createAsyncThunk(
  "dashboard/fetchDashboard",
  async () => {
    try {
      const response = await getProducts();
      return response;
    } catch (e) {
      return [];
    }
  }
);
