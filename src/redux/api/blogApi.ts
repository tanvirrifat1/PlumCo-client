import { IMeta } from "@/types";
import { baseApi } from "./baseApi";

const BLOG_API = "/blog";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAllBlogs: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BLOG_API,
          method: "GET",
          params: arg,
        };
      },
      transformErrorResponse: (response: any, meta: IMeta) => {
        return {
          blogs: response,
          meta,
        };
      },
    }),
  }),
});

export const { useAddAllBlogsQuery } = blogApi;
