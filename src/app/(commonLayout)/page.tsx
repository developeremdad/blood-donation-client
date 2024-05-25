import AboutSection from "@/components/Home/AboutSection";
import DonorsSection from "@/components/Home/DonorsSection";
import Hero from "@/components/Home/Hero";
import ServiceLocation from "@/components/Home/ServiceLocation";
import Testimonial from "@/components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <DonorsSection />
      <ServiceLocation />
      <Testimonial />
    </div>
  );
};

export default Home;