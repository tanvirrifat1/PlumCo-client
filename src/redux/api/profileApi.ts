import { IMeta, IUserProfile } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const PROFILE_URL = "/profile";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    profile: build.query({
      query: (id) => {
        return {
          url: `${PROFILE_URL}/${id}`,
          method: "GET",
        };
      },
      transformResponse: (response: IUserProfile, meta: IMeta) => {
        return {
          profile: response,
          meta,
        };
      },
      providesTags: [tagTypes.profile],
    }),
    updatedUser: build.mutation({
      query: (data) => {
        return {
          url: `${PROFILE_URL}/${data?.id}`,
          method: "PATCH",
          data: data.body,
        };
      },

      invalidatesTags: [tagTypes.profile],
    }),

    getSingleUser: build.query({
      query: (id) => ({
        url: `${PROFILE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useProfileQuery,
  useUpdatedUserMutation,
  useGetSingleUserQuery,
} = profileApi;
