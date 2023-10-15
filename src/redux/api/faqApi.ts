import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const FAQ_API = "/faq";

const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allFaq: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: FAQ_API,
          method: "GET",
          params: arg,
        };
      },
      transformErrorResponse: (response: any, meta: IMeta) => {
        return {
          faq: response,
          meta,
        };
      },
    }),
  }),
});

export const { useAllFaqQuery } = faqApi;
