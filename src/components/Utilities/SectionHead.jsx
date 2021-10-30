import React from "react";

export default function SectionHead({ Title, Number }) {
  return (
    <div className="flex items-center py-5 ">
      <span className=" relative flex flex-1 items-center ">
        <div>
          <span className="  text-xl text-blue-400 ">{Number}. </span>
          <span className="text-gray-300 text-2xl md:text-3xl font-Calibre font-bold ">
            {Title}
          </span>
        </div>
        <span className="  border-b border-blue-500/25 flex-auto mx-4 md:flex-none md:max-w-xs md:w-full "></span>
      </span>
    </div>
  );
}
