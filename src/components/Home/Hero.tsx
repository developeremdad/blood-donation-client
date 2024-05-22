import image from "@/assets/hero.png";
import Image from "next/image";
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
            <div className="group input h-10 input-bordered flex items-center rounded-full max-w-[300px]">
              <input
                type="text"
                className="grow text-black"
                placeholder="Search anything . . ."
              />
              <button className="rounded-full py-1 group-focus-within:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-6 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
