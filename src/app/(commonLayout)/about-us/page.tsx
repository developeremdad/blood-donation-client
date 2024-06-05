import donation from "@/assets/about.png";
import teamMembers from "@/utils/teamMembers";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container mx-auto text-center my-10 px-4">
      <div className="text-start mt-10 rounded">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
          <div className="bg-gray-100 rounded-lg p-5">
            <h5 className="text-xl font-semibold">About Us</h5>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 mb-3 text-justify">
              Welcome to the Blood Donation website, a dedicated platform
              committed to facilitating life-saving blood donations by
              connecting donors with recipients. Our mission is to streamline
              the blood donation process, making it easier for those in need to
              find willing donors and ensuring that the entire process is
              secure, efficient, and user-friendly. By leveraging technology, we
              aim to promote the importance of blood donation, support those who
              are in critical need, and ultimately save lives.
            </p>
            <b>Developer:</b>
            <p>Md Emdadullah</p>
            <p>Full-Stack Web Developer</p>
          </div>
          <div className="flex items-center justify-center sm:order-first">
            <Image
              src={donation}
              className="w-full rounded-lg"
              alt="donation"
            />
          </div>
        </div>
      </div>
      <div className="my-20">
        <h4 className="text-lg text-orange-500 font-bold">Team</h4>
        <h1 className="text-4xl font-semibold mb-8">Expert Staff</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card w-full text-start bg-base-100 shadow hover:shadow-xl border border-orange-500"
            >
              <div className="card-body">
                <h3 className="card-title text-lg font-semibold">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm">{member.expert}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
