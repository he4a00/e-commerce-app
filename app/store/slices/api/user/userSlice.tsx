import { User } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://e-commerce123.runasp.net/api/Account",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user: User) => ({
        url: "/register-Client",
        method: "POST",
        body: user,
      }),
    }),
    loginUser: builder.mutation({
      query: ({ email, password }: { email: string; password: string }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
      async onQueryStarted({ email, password }, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("token", data.token);
        } catch (error) {
          console.error("Login Error:", error);
        }
      },
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        } catch (error) {
          console.error("Logout Error:", error);
        }
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = userSlice;
