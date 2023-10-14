import { IMeta, IService } from "@/types";
import { baseApi } from "./baseApi";

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
    }),
  }),
});

export const { useGetAllServicesQuery } = serviceApi;
