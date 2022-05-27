import { State } from "store/storeTypes";

export const selectCategoryProducts = (state: State) => {
  return state.productsList.products;
};
