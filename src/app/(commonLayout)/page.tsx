import AboutSection from "@/components/Home/AboutSection";
import DonationTips from "@/components/Home/DonationTips";
import DonorsSection from "@/components/Home/DonorsSection";
import Hero from "@/components/Home/Hero";
import ServiceLocation from "@/components/Home/ServiceLocation";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <DonorsSection />
      <ServiceLocation />
      <DonationTips />
    </div>
  );
};

export default Home;
