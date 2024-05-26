import prepare from "@/assets/prepar.png";
import Image from "next/image";
const DonationTips = () => {
  const tips = [
    {
      id: 1,
      tip: "Drink an extra 16 oz. of water (or other nonalcoholic drink) before your appointment.",
    },
    {
      id: 2,
      tip: "Eat a healthy meal, avoiding fatty foods like hamburgers, fries or ice cream.",
    },
    {
      id: 3,
      tip: "Wear a shirt with sleeves that you can roll up above your elbows.",
    },
    {
      id: 4,
      tip: "Let us know if you have a preferred arm or particular vein that has been used successfully in the past to draw blood.",
    },
    {
      id: 5,
      tip: "Wear a shirt with sleeves that you can roll up above your elbows.",
    },
    {
      id: 6,
      tip: "Relax, listen to music, talk to other donors or read while you donate",
    },
  ];
  return (
    <div className="container my-32 mx-auto">
      <h1 className="my-10 text-center text-3xl text-orange-500 font-bold">
        Donation Tips
      </h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="flex flex-col">
          <div className="h-full">
            <h1 className="text-3xl font-bold mb-10 mt-4">
              Additional tips for the day of your donation
            </h1>
            <div className="rounded-lg bg-gray-100 p-7 flex-1">
              <ul className="list-disc">
                {tips.map((tip, i) => (
                  <li key={i} className="my-3">
                    {tip.tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border rounded flex items-center">
          <Image src={prepare} className="w-full h-ful rounded" alt="prepare" />
        </div>
      </div>
    </div>
  );
};

export default DonationTips;
