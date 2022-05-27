import { Categories } from "utils/enums";

export type ProductType = {
  id: string;
  category: Categories;
  price: number;
  name: string;
  amount: number;
  quantity?: number;
};

export type ProductsListState = {
  products: ProductType[];
};
