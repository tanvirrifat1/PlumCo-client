import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const BOOKING_API = "/booking";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBooked: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BOOKING_API,
          method: "GET",
          params: arg,
        };
      },
      transformErrorResponse: (response: any, meta: IMeta) => {
        return {
          booking: response,
          meta,
        };
      },
      providesTags: [tagTypes.booking],
    }),

    createBooked: build.mutation({
      query: (data) => ({
        url: BOOKING_API,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    getSingleBooks: build.query({
      query: (id) => ({
        url: `${BOOKING_API}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),

    updateBooks: build.mutation({
      query: (data) => ({
        url: `${BOOKING_API}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    deleteBooks: build.mutation({
      query: (id) => ({
        url: `${BOOKING_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useGetAllBookedQuery,
  useCreateBookedMutation,
  useDeleteBooksMutation,
  useUpdateBooksMutation,
} = blogApi;
