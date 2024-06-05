const clientReviews = [
  {
    id: 1,
    name: "Abdul Rahman",
    role: "School Teacher",
    review:
      "The blood donation process was smooth and well-organized. The team was very supportive, and I felt confident donating blood. It’s amazing to be able to help save lives.",
    photo:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Muhammad Ali",
    role: "Engineer",
    review:
      "I recently needed blood for a family member, and the response from this platform was incredible. The donor was prompt and very cooperative. Thank you for the life-saving service.",
    photo:
      "https://images.unsplash.com/photo-1603415526960-f8f1f82be42f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Hassan Ahmed",
    role: "Business Owner",
    review:
      "As a regular blood donor, I appreciate the professionalism and care shown by the team. The process is quick, and they ensure everything is safe and hygienic.",
    photo:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Faisal Karim",
    role: "Doctor",
    review:
      "The platform is a great initiative. It connects donors and recipients efficiently. I have recommended it to many of my patients who needed urgent blood transfusions.",
    photo:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Ibrahim Khalil",
    role: "Software Developer",
    review:
      "I donated blood through this website, and it was a rewarding experience. The staff was kind and explained everything clearly. I will definitely donate again.",
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "Rashidul Islam",
    role: "Journalist",
    review:
      "The ease of finding a donor through this site is commendable. It took just a few hours to arrange for blood when my cousin needed surgery. Thank you for the prompt assistance.",
    photo:
      "https://images.unsplash.com/photo-1573497019364-6c9b7bd99ed5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    name: "Sajid Mahmood",
    role: "University Student",
    review:
      "Donating blood was a new experience for me, and the team made it comfortable and stress-free. I encourage everyone to donate and help those in need.",
    photo:
      "https://images.unsplash.com/photo-1603415526960-f8f1f82be42f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    name: "Zakir Hossain",
    role: "Teacher",
    review:
      "I am grateful for the blood donation platform. My father needed a rare blood type, and we were able to find a donor quickly. The donor was very understanding and helpful.",
    photo:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Testimonial = () => {
  return (
    <div className="container mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
        What people are saying
      </h2>
      <div className="carousel w-full">
        {clientReviews.map((review, index) => (
          <div
            key={review.id}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full mx-auto min-h-[250px]"
          >
            <div className="border p-5 mx-auto xl:max-w-lg lg:max-w-md rounded-lg text-justify flex flex-col justify-between">
              <p className="line-clamp-6">{review.review}</p>
              <div className="mt-5 text-center">
                <div className="ms-3">
                  <h4 className="font-bold">{review.name}</h4>
                  <small>{review.role}</small>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${
                  ((index + clientReviews.length - 1) % clientReviews.length) +
                  1
                }`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${((index + 1) % clientReviews.length) + 1}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    // <div>
    //   <div className="container mx-auto my-20">
    //     <h2 className="text-3xl font-bold text-center mb-8">
    //       What people are saying
    //     </h2>

    //     <div className="carousel w-full">
    //       <div
    //         id="slide1"
    //         className="carousel-item relative w-full mx-auto min-h-[250px]"
    //       >
    //         <div className="border p-5 mx-auto xl:max-w-lg lg:max-w-md rounded-lg text-center flex flex-col justify-between">
    //           <p className=" line-clamp-6">
    //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
    //             laborum rerum? Vero hic odio rerum necessitatibus, ex ea quia
    //             id!
    //           </p>
    //           <div className="flex items-center justify-center mt-5 text-start">
    //             <div>
    //               <Image
    //                 alt="Donor Photo"
    //                 height={200}
    //                 width={200}
    //                 className="size-12 mx-auto rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2"
    //                 src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    //               />
    //             </div>
    //             <div className="ms-3">
    //               <h4 className="font-bold">Emdadullah</h4>
    //               <small>Full-stack web developer</small>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //           <a href="#slide2" className="btn btn-circle">
    //             ❮
    //           </a>
    //           <a href="#slide2" className="btn btn-circle">
    //             ❯
    //           </a>
    //         </div>
    //       </div>

    //       <div
    //         id="slide2"
    //         className="carousel-item relative w-full mx-auto min-h-[250px]"
    //       >
    //         <div className="border p-5 mx-auto xl:max-w-lg lg:max-w-md rounded-lg text-center flex flex-col justify-between">
    //           <p className=" line-clamp-6">
    //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
    //             laborum rerum? Vero hic odio rerum necessitatibus, ex ea quia
    //             id!
    //           </p>
    //           <div className="flex items-center justify-center mt-5 text-start">
    //             <div>
    //               <Image
    //                 alt="Donor Photo"
    //                 height={200}
    //                 width={200}
    //                 className="size-12 mx-auto rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2"
    //                 src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    //               />
    //             </div>
    //             <div className="ms-3">
    //               <h4 className="font-bold">Emdadullah</h4>
    //               <small>Full-stack web developer</small>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //           <a href="#slide1" className="btn btn-circle">
    //             ❮
    //           </a>
    //           <a href="#slide1" className="btn btn-circle">
    //             ❯
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Testimonial;
