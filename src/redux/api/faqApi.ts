import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const FAQ_API = "/faq";

const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allFaq: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: FAQ_API,
          method: "GET",
          params: arg,
        };
      },
      transformErrorResponse: (response: any, meta: IMeta) => {
        return {
          faq: response,
          meta,
        };
      },
      providesTags: [tagTypes.faq],
    }),

    deleteFaq: build.mutation({
      query: (id) => ({
        url: `${FAQ_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faq],
    }),

    getSingleFaq: build.query({
      query: (id) => ({
        url: `${FAQ_API}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),

    createFaq: build.mutation({
      query: (data) => ({
        url: FAQ_API,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),

    updateFaq: build.mutation({
      query: (data) => ({
        url: `${FAQ_API}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
  }),
});

export const { useAllFaqQuery, useDeleteFaqMutation, useCreateFaqMutation } =
  faqApi;
