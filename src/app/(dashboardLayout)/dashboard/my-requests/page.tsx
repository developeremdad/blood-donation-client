"use client";

import { useState } from "react";

const MyRequest = () => {
  const [bloodRequestsReceived, setBloodRequestsReceived] = useState([
    {
      requesterName: "Jane Smith",
      bloodTypeNeeded: "B-",
      status: "pending",
      phoneNumber: "01625360571",
    },
    {
      requesterName: "Jane Smith",
      bloodTypeNeeded: "B-",
      status: "rejected",
      phoneNumber: "01625360571",
    },
    {
      requesterName: "Jane Smith",
      bloodTypeNeeded: "B-",
      status: "pending",
      phoneNumber: "01625360571",
    },
    {
      requesterName: "Jane Smith",
      bloodTypeNeeded: "B-",
      status: "approved",
      phoneNumber: "01625360571",
    },
    // Add more requests as needed
  ]);

  const handleStatusChange = (index: any, newStatus: string) => {
    const updatedRequests = [...bloodRequestsReceived];
    updatedRequests[index].status = newStatus;
    setBloodRequestsReceived(updatedRequests);
  };
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center text-orange-500">
          My Request
        </h2>
        <hr className="my-2" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {bloodRequestsReceived.map((request, index) => (
            <div
              key={index}
              className="p-4 border rounded bg-white shadow  border-orange-500"
            >
              <p>
                <strong>Requesters Name:</strong> {request.requesterName}
              </p>
              <p>
                <strong>Blood Type Needed:</strong> {request.bloodTypeNeeded}
              </p>
              <p className="capitalize">
                <strong>Status:</strong>{" "}
                {request.status === "approved" && (
                  <span className="text-green-500">{request.status}</span>
                )}
                {request.status === "rejected" && (
                  <span className="text-red-500">{request.status}</span>
                )}
                {request.status === "pending" && (
                  <span className="text-yellow-500">{request.status}</span>
                )}
              </p>
              {request.status === "approved" && (
                <p>
                  <strong>Contact Info:</strong> {request.phoneNumber}
                </p>
              )}
              {request.status === "pending" && (
                <div className="flex gap-2 mt-2">
                  <button
                    className="bg-blue-500 px-3 py-1 rounded text-white"
                    onClick={() => handleStatusChange(index, "approved")}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-orange-500 px-3 py-1 rounded text-white"
                    onClick={() => handleStatusChange(index, "rejected")}
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
