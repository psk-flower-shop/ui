import { TypedUseSelectorHook } from "react-redux";
import store from "./store";
import storeReducer from "./storeReducer";

export type State = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;

export type Selector = TypedUseSelectorHook<State>;

export type Store = ReturnType<typeof storeReducer>;
