"use client";
import Loading from "@/components/shared/Loading";
import {
  useGetMyBloodRequestReceivedQuery,
  useUpdateDonationRequestStatusMutation,
} from "@/redux/features/donation-request/donationRequestManagement.api";
import { useState } from "react";
import { toast } from "sonner";

const MyRequest = () => {
  const [toastId, setToastId] = useState<string | number>(0);
  const { data: requests, isFetching } =
    useGetMyBloodRequestReceivedQuery(undefined);
  const [updateDonationRequestStatus, { data: rData }] =
    useUpdateDonationRequestStatusMutation();

  if (rData) {
    toast.success(rData?.message, { id: toastId });
  }

  if (isFetching) {
    <Loading />;
  }

  const handleStatusChange = (id: any, newStatus: string) => {
    const toastId = toast.loading("Status Updating...");
    setToastId(toastId);

    const updateStatusData = {
      status: {
        status: newStatus,
      },
      id: id,
    };
    updateDonationRequestStatus(updateStatusData);
  };
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center text-orange-500">
          My Blood Request Received
        </h2>
        <hr className="my-2" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {requests?.map((request, index) => (
            <div
              key={index}
              className="p-4 border rounded bg-white shadow  border-orange-500"
            >
              <p className="capitalize">
                <strong>Requesters Name:</strong> {request?.requester?.name}
              </p>
              <p>
                <strong>Blood Type Needed:</strong> {request?.donor?.bloodType}
              </p>
              <p className="capitalize">
                <strong>Status:</strong>{" "}
                {request?.requestStatus === "APPROVED" && (
                  <span className="text-green-500">
                    {request?.requestStatus}
                  </span>
                )}
                {request?.requestStatus === "REJECTED" && (
                  <span className="text-red-500">{request?.requestStatus}</span>
                )}
                {request?.requestStatus === "PENDING" && (
                  <span className="text-yellow-500">
                    {request?.requestStatus}
                  </span>
                )}
              </p>
              {request?.requestStatus === "APPROVED" && (
                <p>
                  <strong>Contact Info:</strong> {request.phoneNumber}
                </p>
              )}
              {request?.requestStatus === "PENDING" && (
                <div className="flex gap-2 mt-2">
                  <button
                    className="bg-blue-500 px-3 py-1 rounded text-white"
                    onClick={() => handleStatusChange(request.id, "APPROVED")}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-orange-500 px-3 py-1 rounded text-white"
                    onClick={() => handleStatusChange(request.id, "REJECTED")}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRequest;
