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
      providesTags: [tagTypes.blog],
    }),

    createBlog: build.mutation({
      query: (data) => ({
        url: BLOG_API,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),

    getSingleBlogs: build.query({
      query: (id) => ({
        url: `${BLOG_API}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),

    updateBlog: build.mutation({
      query: (data) => ({
        url: `${BLOG_API}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.blog],
    }),

    deleteBlog: build.mutation({
      query: (id) => ({
        url: `${BLOG_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useAddAllBlogsQuery,
  useCreateBlogMutation,
  useGetSingleBlogsQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
