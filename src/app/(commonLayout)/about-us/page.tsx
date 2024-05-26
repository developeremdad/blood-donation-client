import donation from "@/assets/Blood-Donation.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container mx-auto text-center my-10">
      <div className="bg-gray-100 text-start mt-10 p-7 rounded">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
          <div>
            <h5 className="text-xl font-semibold">About Us</h5>
            <h2 className="text-3xl font-bold">Out Mission</h2>
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
            <Image src={donation} height={330} alt="donation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
