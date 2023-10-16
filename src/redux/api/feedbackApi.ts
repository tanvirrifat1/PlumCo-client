import build from "next/dist/build";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { IMeta } from "@/types";

const FEEDBACK_API = "/feedback";

const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    feedback: build.mutation({
      query: (data) => ({
        url: FEEDBACK_API,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),

    deleteFeedback: build.mutation({
      query: (id) => ({
        url: `${FEEDBACK_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.feedback],
    }),

    getSingleFeedback: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${FEEDBACK_API}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.feedback],
    }),

    getAllFeedBack: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: FEEDBACK_API,
          method: "GET",
          params: arg,
        };
      },
      transformErrorResponse: (response: any, meta: IMeta) => {
        return {
          feedback: response,
          meta,
        };
      },
      providesTags: [tagTypes.feedback],
    }),
  }),
});

export const {
  useFeedbackMutation,
  useGetAllFeedBackQuery,
  useDeleteFeedbackMutation,
  useGetSingleFeedbackQuery,
} = feedbackApi;
