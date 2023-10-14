import { IMeta } from "@/types";
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
      transformResponse: (response: any, meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
    //user login
  }),
});

export const { useGetAllUserQuery } = userApi;
