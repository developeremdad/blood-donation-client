"use client";
import { useGetAllDonorsQuery } from "@/redux/features/user/userManagement.api";
import Image from "next/image";
import Link from "next/link";

const DonorsSection = () => {
  const { data: donors } = useGetAllDonorsQuery(undefined);
  // const donors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="">
      <div className="container mx-auto py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 text-orange-500">
            Find Blood Donors
          </h1>
          <p className="text-gray-500">
            Search for available blood donors near you
          </p>
        </div>
        <div className="bg-white  rounded-lg shadow-md p-6 mb-8">
          <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700  mb-1"
                htmlFor="blood-type"
              >
                Blood Type
              </label>
              <select
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                id="blood-type"
              >
                <option value="">All</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700  mb-1"
                htmlFor="location"
              >
                Location
              </label>
              <input
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                id="location"
                placeholder="Enter location"
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700  mb-1"
                htmlFor="availability"
              >
                Availability
              </label>
              <select
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                id="availability"
              >
                <option value="">All</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
            <div className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-end">
              <button
                className="bg-orange-500 hover:bg-orange-600 rounded-full px-4 py-2 text-white"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {donors?.data?.slice(0, 10)?.map((donor, index) => (
            <div
              key={index}
              className="bg-white  rounded-lg  shadow-sm hover:shadow-lg border border-orange-500 overflow-hidden"
            >
              <div className="aspect-w-4 text-center aspect-h-3 p-3 bg-gray-600">
                {donor?.photo ? (
                  <Image
                    alt="Donor Photo"
                    height={200}
                    width={200}
                    className="size-20 mx-auto rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2"
                    src={donor?.photo}
                  />
                ) : (
                  <div className="avatar placeholder">
                    <div className="bg-gray-200 text-neutral-content rounded-full w-20 ring ring-orange-500 ring-offset-base-100 ring-offset-2">
                      <span className="text-3xl text-gray-500">D</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="text-lg font-medium mb-1">{donor?.name}</h3>
                <p className="text-gray-500 mb-2">
                  Blood Type: {donor?.bloodType ? donor?.bloodType : "N/A"}
                </p>
                <p className="text-gray-500 mb-2">
                  Location: {donor?.location ? donor?.location : "N/A"}
                </p>
                <p className="font-medium mb-2">
                  {donor?.availability ? (
                    <span className="text-green-500">Available</span>
                  ) : (
                    <span className="text-red-500">Unavailable</span>
                  )}
                </p>
                <Link className="" href={`/donor-list/${donor?.id}`}>
                  <button className="btn btn-sm rounded bg-orange-500 text-white w-full hover:bg-orange-700">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonorsSection;
