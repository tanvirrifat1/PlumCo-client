import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

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

    createBlog: build.mutation({
      query: (data) => ({
        url: BLOG_API,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const { useAddAllBlogsQuery, useCreateBlogMutation } = blogApi;
