import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USER_URL = "/user";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //user create
    getAllUser: build.query({
      query: (data) => ({
        url: USER_URL,
        method: "GET",
        data,
      }),
      providesTags: [tagTypes.user],
    }),
    //user login
  }),
});

export const { useGetAllUserQuery } = userApi;
