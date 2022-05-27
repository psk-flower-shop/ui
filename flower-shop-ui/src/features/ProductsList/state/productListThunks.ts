import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsByCategory } from "services/api/productService";

export const fetchProductsByCategory = createAsyncThunk(
  "projectList/fetchProductsByCategory",
  async (category: string, { rejectWithValue }) => {
    try {
      const response = await getProductsByCategory(category);
      return response;
    } catch (e) {
      return rejectWithValue(undefined);
    }
  }
);
