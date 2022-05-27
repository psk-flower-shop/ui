import ProductsList from "./components/ProductsList";
import { selectCategoryProducts } from "./state/productListSelectors";
import productsListReducer from "./state/productListSlice";

export default ProductsList;

export { productsListReducer, selectCategoryProducts };
