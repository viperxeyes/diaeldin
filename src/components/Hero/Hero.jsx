import React from "react";

export default function Hero() {
  return (
    <div className=" flex flex-col min-h-screen  mx-auto max-w-[1000px] justify-center items-start space-y-5 ">
      <h2 className="text-blue-500 font-SFMono text-lg transition-opacity opacity-5 ">
        Hi, my name is
      </h2>
      <h2 className="text-gray-300  font-Calibre font-semibold   text-4xl md:text-7xl sm:text-5xl">
        Dia Eldin Attia.
      </h2>
      <h2 className="text-gray-400  font-Calibre font-semibold   text-4xl md:text-7xl sm:text-5xl">
        I build things for computers and mobiles.
      </h2>
      <p className="max-w-xl font-Calibre font-normal  text-md sm:text-xl pb-10">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </p>
      <button className="text-blue-500   max-w-xs md:max-w-[220px]  border-solid border rounded-md border-blue-500 hover:bg-blue-900 hover:bg-opacity-40  transition-all duration-300 ease-in-out">
        <div className="md:p-4    px-6 py-4  transition-all  duration-150 ease-in-out ">
          Check me out !
        </div>
      </button>
    </div>
  );
}
