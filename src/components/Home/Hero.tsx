import image from "@/assets/hero.png";
import Image from "next/image";
import HeroSearchButton from "../UI/HeroSearchButton";
const Hero = () => {
  return (
    <div className="hero">
      <Image
        alt="Mountains"
        src={image}
        placeholder="blur"
        quality={100}
        className="max-h-[500px]"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 lg:text-4xl sm:text-3xl font-bold text-white">
            Save Lives, Donate Blood!
          </h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            eius?
          </p>
          <div className="flex items-center justify-center">
            <HeroSearchButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
