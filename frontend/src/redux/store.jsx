import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./slices/UserApi";
import userReducer from "./slices/UserSlice";
import { orderApi } from "./slices/OrderApi";
import { menuApi } from "./slices/MenuApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
    [orderApi.reducerPath]:orderApi.reducer,
    [menuApi.reducerPath]:menuApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware,orderApi.middleware,menuApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
