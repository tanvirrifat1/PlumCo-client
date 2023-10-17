import { IAddToCartData, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const ADD_TO_CART_URL = "/addToCart";

export const addToCartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all building
    getCarts: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ADD_TO_CART_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          addToCarts: response,
          meta,
        };
      },
      providesTags: [tagTypes.addToCart],
    }),
    // get single building
    getCart: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ADD_TO_CART_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.addToCart],
    }),
    // create a new building
    addToCart: build.mutation({
      query: (data) => ({
        url: ADD_TO_CART_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.addToCart],
    }),
    // update existing building
    updateCart: build.mutation({
      query: (data) => ({
        url: `${ADD_TO_CART_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.addToCart],
    }),
    // delete existing building
    deleteCart: build.mutation({
      query: (id) => ({
        url: `${ADD_TO_CART_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.addToCart],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useDeleteCartMutation,
  useGetCartQuery,
  useGetCartsQuery,
  useUpdateCartMutation,
} = addToCartApi;
