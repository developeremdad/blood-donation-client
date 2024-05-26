"use client";
import Loading from "@/components/shared/Loading";
import { useGetAllDonorsQuery } from "@/redux/features/user/userManagement.api";
import { useDebounced } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DonorsList = ({
  searchParams,
}: {
  searchParams: { searchTerm: string };
}) => {
  const [page, setPage] = useState<number>(1);
  const [availability, setAvailability] = useState<boolean | string>("all");
  const [bloodType, setBloodType] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams?.searchTerm || ""
  );

  const debounced = useDebounced({ searchQuery: searchTerm, delay: 700 });

  const queries = [
    availability !== "all" && { name: "availability", value: availability },
    bloodType !== "all" && { name: "bloodType", value: bloodType },
    debounced && { name: "searchTerm", value: debounced },
    { name: "page", value: page },
  ].filter(Boolean);

  useEffect(() => {
    setPage(1);
  }, [availability, bloodType, searchTerm]);

  const { data: donors, isFetching } = useGetAllDonorsQuery([...queries]);

  const handleChangePage = (pageNumber: number) => {
    if (pageNumber < 1) {
      return;
    }
    setPage(pageNumber);
  };

  const handleAvailability = (data: string) => {
    if (data === "available") {
      setAvailability(true);
    }
    if (data === "unavailable") {
      setAvailability(false);
    }
    if (data === "all") {
      setAvailability("all");
    }
  };

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
        <div className="bg-gray-100  rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700  mb-1"
                htmlFor="location"
              >
                Search Donor And Location
              </label>
              <input
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                id="location"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                placeholder="Search donor and location. . ."
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700  mb-1"
                htmlFor="blood-type"
              >
                Blood Type
              </label>
              <select
                onChange={(e) => setBloodType(e.target.value)}
                value={bloodType}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                id="blood-type"
              >
                <option value="all">All</option>
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
                htmlFor="availability"
              >
                Availability
              </label>
              <select
                onChange={(e) => handleAvailability(e.target.value)}
                value={
                  availability === "all"
                    ? "all"
                    : availability
                    ? "available"
                    : "unavailable"
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                id="availability"
              >
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
          </div>
        </div>

        {!isFetching ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {donors?.data?.map((donor, index) => (
              <div
                key={index}
                className="bg-white  rounded-lg rounded-b-none shadow-sm hover:shadow-md border overflow-hidden"
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
                  <h3 className="text-lg font-medium mb-1 capitalize">
                    {donor?.name}
                  </h3>
                  <p className="text-gray-500 mb-2">
                    Blood Type: {donor?.bloodType}
                  </p>
                  <p className="text-gray-500 mb-2">
                    Location: {donor?.location}
                  </p>
                  <div className="text-green-500 font-medium mb-2">
                    {donor?.availability ? (
                      <span className="text-green-500">Available</span>
                    ) : (
                      <span className="text-red-500">Unavailable</span>
                    )}
                  </div>
                  <button className="btn btn-sm rounded bg-orange-500 text-white w-full hover:bg-orange-700">
                    <Link className="" href={`/donor-list/${donor?.id}`}>
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Loading />
        )}

        <div className="flex items-center justify-center my-20 ">
          <div className="join">
            <button
              className="join-item btn btn-sm bg-orange-500 text-xl text-white"
              onClick={() => handleChangePage(page - 1)}
              disabled={page === 1}
            >
              «
            </button>
            {new Array(donors?.meta?.totalPage)
              .fill(undefined)
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleChangePage(index + 1)}
                  className={`join-item btn btn-sm ${
                    page === index + 1 && "bg-orange-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            <button
              className="join-item btn btn-sm bg-orange-500 text-xl text-white"
              onClick={() => handleChangePage(page + 1)}
              disabled={donors?.meta?.totalPage === page}
            >
              »
            </button>
          </div>
        </div>

        {!donors?.data?.length && (
          <div className="bg-orange-50 p-4 text-center rounded-md">
            <h2 className="text-xl">No search result found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonorsList;
