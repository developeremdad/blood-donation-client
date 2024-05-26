"use client";
import { useGetUserDetailsQuery } from "@/redux/features/user/userManagement.api";
import Image from "next/image";
import Link from "next/link";

const DonorDetailsPage = ({ params }: any) => {
  console.log(params?.donorId);
  const { data: donor } = useGetUserDetailsQuery(params?.donorId, {
    skip: !params?.donorId,
  });
  console.log(donor);
  // const donor = {
  //   name: "John Doe",
  //   photo:
  //     "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual photo path
  //   bloodType: "O+",
  //   location: "New York, NY",
  //   availability: "Available",
  //   contact: "01625360571",
  // };

  return (
    <div className="container mx-auto my-10">
      <div className="card max-w-sm mx-auto bg-base-100 shadow-xl border border-orange-500">
        <h1 className="text-2xl text-center text-orange-500 my-5 font-bold mb-6">
          Donor Details
        </h1>
        <figure className="px-10">
          {donor?.photo ? (
            <Image
              src={donor?.photo || ""}
              alt={donor?.name || "image"}
              width={150}
              height={150}
              className="size-25 mx-auto rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2"
            />
          ) : (
            <div className="avatar placeholder">
              <div className="bg-gray-200 text-neutral-content rounded-full w-24 ring ring-orange-500 ring-offset-base-100 ring-offset-2">
                <span className="text-3xl text-gray-500">D</span>
              </div>
            </div>
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center uppercase">
            <span>{donor?.name}</span>
          </h2>
          <div className="flex-grow">
            <p className="text-gray-500 mb-2">
              Blood Type: {donor?.bloodType ? donor?.bloodType : "N/A"}
            </p>
            <p className="text-gray-500 mb-2">
              Location: {donor?.location ? donor?.location : "N/A"}
            </p>
            <p className="text-gray-500 mb-2">
              Availability:{" "}
              {donor?.availability ? (
                <span className="text-green-500">Available</span>
              ) : (
                <span className="text-red-500">Unavailable</span>
              )}
            </p>
            {/* {donor?.contact && (
              <p className="text-gray-500 mb-2">Contact: {donor?.contact}</p>
            )} */}
          </div>
          <div className="card-actions justify-center mt-4">
            {donor?.availability ? (
              <Link href={`/blood-request?donorId=${donor?.id}`}>
                <button className="bg-orange-500 py-2 px-6 rounded-full text-white">
                  Request Blood
                </button>
              </Link>
            ) : (
              <button
                disabled
                className="bg-gray-200 py-2 px-6 rounded-full text-white"
              >
                Request Blood
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDetailsPage;
