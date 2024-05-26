"use client";
import { useGetMyBloodDonationRequestsQuery } from "@/redux/features/donation-request/donationRequestManagement.api";
import { useState } from "react";
const MyDonations = () => {
  const { data, isFetching } = useGetMyBloodDonationRequestsQuery(undefined);
  const [bloodRequestsMade, setBloodRequestsMade] = useState([
    {
      donorName: "John Doe",
      bloodType: "A+",
      status: "approved",
      contactInfo: "01625360571",
    },
    {
      donorName: "John Doe",
      bloodType: "A+",
      status: "pending",
      contactInfo: "01625360571",
    },
    {
      donorName: "John Doe",
      bloodType: "A+",
      status: "approved",
      contactInfo: "01625360571",
    },
    {
      donorName: "John Doe",
      bloodType: "A+",
      status: "approved",
      contactInfo: "01625360571",
    },
    {
      donorName: "John Doe",
      bloodType: "A+",
      status: "rejected",
      contactInfo: "01625360571",
    },
    // Add more requests as needed
  ]);
  console.log(data);

  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center text-orange-500">
          Requests For Blood
        </h2>
        <hr className="my-2" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {data?.map((donation, index) => (
            <div key={index} className="p-3 border rounded border-orange-500">
              <p className="capitalize">
                <strong>Donor&apos;s Name:</strong> {donation?.donor?.name}
              </p>
              <p>
                <strong>Blood Type:</strong> {donation?.donor?.bloodType}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {donation?.requestStatus === "APPROVED" && (
                  <span className="text-green-500 capitalize">
                    {donation?.requestStatus}
                  </span>
                )}
                {donation?.requestStatus === "REJECTED" && (
                  <span className="text-red-500 capitalize">
                    {donation?.requestStatus}
                  </span>
                )}
                {donation?.requestStatus === "PENDING" && (
                  <span className="text-yellow-500 capitalize">
                    {donation?.requestStatus}
                  </span>
                )}
              </p>
              {donation?.requestStatus === "APPROVED" && (
                <p>
                  <strong>Contact Info:</strong> {donation?.donor?.contact}
                </p>
              )}
            </div>
          ))}
        </div>
        {!data?.length && (
          <div className="bg-orange-100 p-5 flex items-center justify-center rounded-lg">
            <h2 className="text-xl font-bold">Data not found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDonations;
