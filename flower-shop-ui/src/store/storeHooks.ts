import {
  useDispatch as reduxUseDispatch,
  useSelector as reduxUseSelector,
} from "react-redux";
import type { Dispatch, Selector } from "./storeTypes";

export const useDispatch = () => reduxUseDispatch<Dispatch>();

export const useSelector: Selector = reduxUseSelector;
