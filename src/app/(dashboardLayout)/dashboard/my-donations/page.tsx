"use client";
import { useState } from "react";
const MyDonations = () => {
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
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center text-orange-500">
          Requests For Blood
        </h2>
        <hr className="my-2" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {bloodRequestsMade.map((request, index) => (
            <div
              key={index}
              className="mb-4 p-4 border rounded border-orange-500"
            >
              <p>
                <strong>Donor&apos;s Name:</strong> {request.donorName}
              </p>
              <p>
                <strong>Blood Type:</strong> {request.bloodType}
              </p>
              <p>
                <strong>Status:</strong> {request.status}
              </p>
              {request.status === "approved" && (
                <p>
                  <strong>Contact Info:</strong> {request.contactInfo}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDonations;
