import { IMeta, IUserProfile, PaginationInfo } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USER_URL = "/user";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //user create
    getAllUser: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: USER_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any, meta: PaginationInfo) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),

    getSingleUser: build.query({
      query: (id: string | string[] | undefined) => {
        return {
          url: `${USER_URL}/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.user],
    }),

    updateUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
} = userApi;
