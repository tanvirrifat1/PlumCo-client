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

    getUpcomingService: build.query({
      query: () => ({
        url: SERVICE_API,
        method: "GET",
      }),
      providesTags: [tagTypes.upcomingService],
    }),

    deleteService: build.mutation({
      query: (id: string) => ({
        url: `${SERVICE_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.upcomingService],
    }),
  }),
});

export const {
  useCreateUpComingMutation,
  useGetUpcomingServiceQuery,
  useDeleteServiceMutation,
} = UpcomingServiceApi;
