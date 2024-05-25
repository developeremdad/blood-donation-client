import { baseApi } from "../../api/baseApi";

const metaDataManagementApi = baseApi.injectEndpoints({
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
    }),
  }),
});

export const { useGetMyProfileQuery } = metaDataManagementApi;
