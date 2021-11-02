import React from "react";

import discordClone from "../images/discordClone.png";

export default function ProjectSection({ Name, Description, rtl = false }) {
  return (
    <div
      className={`${
        rtl ? "rtl " : null
      }relative  grid grid-cols-12  rounded-md   w-full items-center`}
    >
      <div className="bg-blue-500 col-span-12 hidden md:block md:col-span-7 opacity-100  md:opacity-70 hover:opacity-100 z-10  col-start-1 row-span-full md:col-start-1 self-center  hover:bg-transparent rounded-md transition-all  duration-300 ease-in-out">
        <img
          className="w-full h-[362px] object-cover md:object-cover object-left-top rounded-md filter grayscale hover:filter-none   mix-blend-hard-light   transition-all duration-300 ease-in-out "
          src={discordClone}
        />
      </div>
      <div className=" relative   md:col-span-7 md:bg-transparent col-span-12 row-span-full md:col-start-6 z-20  col-start-1  ">
        <div className="bg-blue-500 absolute bg-opacity-10  w-full h-full md:hidden">
          <img
            src={discordClone}
            className=" w-full h-full opacity-20 object-left-top object-cover"
          />
        </div>
        <div
          className={`${rtl ? " ltr " : "md:items-end "}  flex flex-col p-5 `}
        >
          <span className="text-blue-400 text-xs font-bold tracking-wide pb-2">
            Featured Project
          </span>
          <span className="text-3xl font-bold text-gray-200 font-Calibre">
            Discord Clone
          </span>
          <div
            className={`${
              rtl ? "md:text-left " : "md:text-right "
            } md:bg-gray-850   shadow-lg   max-w-lg rounded-md  p-6 my-5 text-lg leading-tight  font-Calibre`}
          >
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
            and more. Available on Visual Studio Marketplace, Package Control,
            Atom Package Manager, and npm.
          </div>
          <div
            className={`${
              rtl ? "md:space-x-reverse " : "md:flex-row-reverse "
            } md:space-x-5 flex max-w-sm flex-wrap   space-x-2 space-x-reverse `}
          >
            <span
              className={`${rtl ? "md:mr-5 mr-2" : "md:ml-5 md:mr-0 mr-2"}`}
            >
              VS
            </span>
            <span>C#</span>
            <span>React</span>
            <span>tailwind</span>
            <span>NextJS</span>
            <span>Docker</span>
            <span>VS</span>
            <span>C#</span>
            <span>React</span>
            <span>tailwind</span>
            <span>NextJS</span>
            <span>Docker</span>
          </div>
        </div>
      </div>
    </div>
  );
}
