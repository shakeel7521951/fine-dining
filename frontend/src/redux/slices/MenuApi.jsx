import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BACKEND_URL from "../../../Base_Url";

export const menuApi = createApi({
  reducerPath: "menuApi",
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
  tagTypes: ["Menu"],
  endpoints: (builder) => ({
    // Create Menu
    createMenu: builder.mutation({
      query: (menuData) => ({
        url: "/menu",
        method: "POST",
        body: menuData,
      }),
      invalidatesTags: ["Menu"],
    }),

    // Get All Menu Items
    getAllMenuItems: builder.query({
      query: () => "/menu",
      providesTags: ["Menu"],
    }),

    // Delete Menu
    deleteMenu: builder.mutation({
      query: (id) => ({
        url: `/menu/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Menu"],
    }),

    // Update Menu
    updateMenu: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/menu/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["Menu"],
    }),
  }),
});

export const {
  useCreateMenuMutation,
  useGetAllMenuItemsQuery,
  useDeleteMenuMutation,
  useUpdateMenuMutation,
} = menuApi;
