import { State } from "store/storeTypes";

export const selectAllProducts = (state: State) => {
  return state.dashboard.products;
};

export const selectProductById = (state: State, id?: string) => {
  const product = state.dashboard.products.find((p) => p.id === id);
  return product;
};
