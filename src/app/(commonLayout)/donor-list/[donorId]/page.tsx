import Image from "next/image";
import Link from "next/link";

const DonorDetailsPage = ({ params }) => {
  //   const { donorId } = query;
  console.log(params);
  const donor = {
    name: "John Doe",
    photo:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual photo path
    bloodType: "O+",
    location: "New York, NY",
    availability: "Available",
    contact: "01625360571",
  };

  return (
    <div className="container mx-auto my-10">
      <div className="card max-w-sm mx-auto bg-base-100 shadow-xl border border-orange-500">
        <h1 className="text-2xl text-center text-orange-500 my-5 font-bold mb-6">
          Donor Details
        </h1>
        <figure className="px-10">
          <Image
            src={donor.photo}
            alt={donor.name}
            width={150}
            height={150}
            className="size-25 mx-auto rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">
            <span>{donor.name}</span>
          </h2>
          <div className="flex-grow">
            <p className="text-gray-500 mb-2">Blood Type: {donor.bloodType}</p>
            <p className="text-gray-500 mb-2">Location: {donor.location}</p>
            <p className="text-gray-500 mb-2">
              Availability:{" "}
              <span className="text-green-500">{donor.availability}</span>
            </p>
            {donor.contact && (
              <p className="text-gray-500 mb-2">Contact: {donor.contact}</p>
            )}
          </div>
          <div className="card-actions justify-center mt-4">
            <Link href="/blood-request">
              <button className="bg-orange-500 py-2 px-6 rounded-full text-white">
                Request Blood
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDetailsPage;
