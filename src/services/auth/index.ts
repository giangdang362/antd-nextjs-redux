import { api } from "../api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<
      API.SignInWithPasswordResponse,
      API.SignInWithPasswordPayload
    >({
      query: (data: API.SignInWithPasswordPayload) => ({
        url: "/auth/login/",
        method: "POST",
        body: data,
      }),
    }),
    logout: build.mutation<API.LogoutResponse, API.LogoutPayload>({
      query: (body: API.LogoutPayload) => ({
        url: "/auth/logout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
