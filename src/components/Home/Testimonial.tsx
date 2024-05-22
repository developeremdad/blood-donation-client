import Image from "next/image";

const Testimonial = () => {
  return (
    <div>
      <div className="container mx-auto my-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          What people are saying
        </h2>

        <div className="carousel w-full">
          <div
            id="slide1"
            className="carousel-item relative w-[90%] mx-auto h-[400]"
          >
            <div className="border p-5 mx-auto xl:max-w-lg lg:max-w-md rounded-lg text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
                laborum rerum? Vero hic odio rerum necessitatibus, ex ea quia
                id!
              </p>
              <div className="flex items-center justify-center mt-5 text-start">
                <div>
                  <Image
                    alt="Donor Photo"
                    height={200}
                    width={200}
                    className="size-12 mx-auto rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  />
                </div>
                <div className="ms-3">
                  <h4 className="font-bold">Emdadullah</h4>
                  <small>Full-stack web developer</small>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div
            id="slide1"
            className="carousel-item relative w-[90%] mx-auto h-[400]"
          >
            <div className="border p-5 mx-auto xl:max-w-lg lg:max-w-md rounded-lg text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
                laborum rerum? Vero hic odio rerum necessitatibus, ex ea quia
                id!
              </p>
              <div className="flex items-center justify-center mt-5 text-start">
                <div>
                  <Image
                    alt="Donor Photo"
                    height={200}
                    width={200}
                    className="size-12 mx-auto rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  />
                </div>
                <div className="ms-3">
                  <h4 className="font-bold">Emdadullah</h4>
                  <small>Full-stack web developer</small>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div
            id="slide1"
            className="carousel-item relative w-[90%] mx-auto h-[400]"
          >
            <div className="border p-5 mx-auto xl:max-w-lg lg:max-w-md rounded-lg text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
                laborum rerum? Vero hic odio rerum necessitatibus, ex ea quia
                id!
              </p>
              <div className="flex items-center justify-center mt-5 text-start">
                <div>
                  <Image
                    alt="Donor Photo"
                    height={200}
                    width={200}
                    className="size-12 mx-auto rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  />
                </div>
                <div className="ms-3">
                  <h4 className="font-bold">Emdadullah</h4>
                  <small>Full-stack web developer</small>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
