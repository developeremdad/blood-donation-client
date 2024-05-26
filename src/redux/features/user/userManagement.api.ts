import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => {
        return {
          url: "/my-profile",
          method: "GET",
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
      providesTags: ["user"],
    }),
    updateUserProfile: builder.mutation({
      query: (payload) => {
        return {
          url: "/update-profile",
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetMyProfileQuery, useUpdateUserProfileMutation } =
  userManagementApi;
