import { TRequestDonation } from "@/types/donationRequest.type";
import { TResponseRedux } from "@/types/global";
import { TUser } from "@/types/user.types";
import { baseApi } from "../../api/baseApi";

const donationRequestManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonationRequest: builder.query({
      query: () => {
        return {
          url: "/donation-request",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return { data: response.data, meta: response.meta };
      },
      providesTags: ["request"],
    }),
    getMyBloodRequestReceived: builder.query({
      query: () => {
        return {
          url: "/donation-request",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TRequestDonation[]>) => {
        return response.data;
      },
      providesTags: ["request"],
    }),
    addDonationRequest: builder.mutation({
      query: (payload) => {
        return {
          url: "/donation-request",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["request"],
    }),
  }),
});

export const {
  useAddDonationRequestMutation,
  useGetMyBloodRequestReceivedQuery,
} = donationRequestManagementApi;
