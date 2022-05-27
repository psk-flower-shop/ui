import Dashboard from "./components/Dashboard";
import {
  selectAllProducts,
  selectProductById,
} from "./state/dashboardSelectors";
import dashboardReducer from "./state/dashboardSlice";
import { fetchProducts } from "./state/dashboardThunks";

export default Dashboard;

export {
  dashboardReducer,
  fetchProducts,
  selectAllProducts,
  selectProductById,
};
