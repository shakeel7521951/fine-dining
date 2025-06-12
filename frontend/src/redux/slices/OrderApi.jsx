import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BACKEND_URL from "../../../Base_Url";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.user?.profile?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["Order"],
  endpoints: (builder) => ({

    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/create-order",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["Order"],
    }),

    getUserOrders: builder.query({
      query: () => "/my-orders",
      providesTags: ["Order"],
    }),

    getAllOrders: builder.query({
      query: () => "/all-orders",
      providesTags: ["Order"],
    }),

    updateOrderStatus: builder.mutation({
      query: ({ orderId, status }) => ({
        url: `/${orderId}/status`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetUserOrdersQuery,
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} = orderApi;
