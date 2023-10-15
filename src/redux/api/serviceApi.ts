import { IMeta, IService } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const SERVICE_API = "/service";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllServices: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: SERVICE_API,
          method: "GET",
          params: arg,
        };
      },
      transformErrorResponse: (response: IService[], meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),

    createService: build.mutation({
      query: (data) => ({
        url: SERVICE_API,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const { useGetAllServicesQuery, useCreateServiceMutation } = serviceApi;
