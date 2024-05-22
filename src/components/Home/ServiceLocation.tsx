import location from "@/assets/blood-location.png";
import Image from "next/image";
const ServiceLocation: React.FC = () => {
  const defaultUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930095498!2d90.25487217580321!3d23.781067239709326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1716396389171!5m2!1sen!2sbd";

  return (
    <div className="container mx-auto my-20 text-center">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-orange-500">Available City</h2>
        <p>Service available in</p>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
        <div>
          <iframe
            src={defaultUrl}
            className="w-full h-full min-h-[300px] rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div>
          <Image src={location} className="rounded-lg" alt="Blood-location" />
        </div>
      </div>
    </div>
  );
};

export default ServiceLocation;
