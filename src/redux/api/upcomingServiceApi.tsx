import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SERVICE_API = "/upcoming";

const UpcomingServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUpComing: build.mutation({
      query: (data) => ({
        url: SERVICE_API,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.upcomingService],
    }),
  }),
});

export const { useCreateUpComingMutation } = UpcomingServiceApi;
