import {
  TMyDonationRequests,
  TRequestDonation,
} from "@/types/donationRequest.type";
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
    getMyBloodDonationRequests: builder.query({
      query: () => {
        return {
          url: "/my-donations",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TMyDonationRequests[]>) => {
        return response.data;
      },
      providesTags: ["request"],
    }),
    updateDonationRequestStatus: builder.mutation({
      query: (payload) => {
        const { status, id } = payload;
        return {
          url: `/donation-request/${id}`,
          method: "PUT",
          body: status,
        };
      },
      invalidatesTags: ["request"],
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
  useGetMyBloodDonationRequestsQuery,
  useUpdateDonationRequestStatusMutation,
} = donationRequestManagementApi;
