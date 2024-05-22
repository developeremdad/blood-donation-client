import AboutSection from "@/components/Home/AboutSection";
import DonorsSection from "@/components/Home/DonorsSection";
import Hero from "@/components/Home/Hero";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <DonorsSection />
      <Testimonial />
    </div>
  );
}
