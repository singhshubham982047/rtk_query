import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./api";
import { newReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [newReducer.name]: newReducer.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(postApi.middleware),
});
