import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div className='h-screen bg-[url("https://images.pexels.com/photos/10771000/pexels-photo-10771000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-cover bg-center bg-no-repeat relative'>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container h-full flex flex-col justify-center items-start pl-10 relative z-10">
        <div className="mb-4">
          <p className="text-white text-lg md:text-xl lg:text-2xl mb-2">
            It is about creating something bigger than yourself
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Unlocking <br />
            Digital Excellence
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-white text-black py-3 px-8 rounded-lg flex items-center gap-2 text-lg shadow-md hover:bg-gray-100">
            Let's work <MdArrowOutward size={24} />
          </button>

          <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
            <FaArrowDownLong size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
