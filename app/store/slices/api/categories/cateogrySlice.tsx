import { baseQueryWithReauth } from "@/lib/baseApi";
import { Cateogry } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const categoryslice = createApi({
  reducerPath: "category",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    createCateogry: builder.mutation({
      query: (category: Cateogry) => ({
        url: "Category/addCategory",
        method: "POST",
        body: category,
      }),
    }),
  }),
});
