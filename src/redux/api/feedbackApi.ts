import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

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
  }),
});

export const { useFeedbackMutation } = feedbackApi;
