import { TResponseRedux } from "@/types/global";
import { TUser } from "@/types/user.types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonors: builder.query({
      query: () => {
        return {
          url: "/donor-list",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return { data: response.data, meta: response.meta };
      },
      providesTags: ["user"],
    }),
    getUserDetails: builder.query({
      query: (id) => {
        return {
          url: `/user-details/${id}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TUser>) => {
        return response.data;
      },
      providesTags: ["user"],
    }),
    getMyProfile: builder.query({
      query: () => {
        return {
          url: "/my-profile",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TUser>) => {
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

export const {
  useGetAllDonorsQuery,
  useGetMyProfileQuery,
  useGetUserDetailsQuery,
  useUpdateUserProfileMutation,
} = userManagementApi;
