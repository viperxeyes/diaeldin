import React from "react";
import SectionHead from "../Utilities/SectionHead";

import discordClone from "../../images/discordClone.png";
export default function Projects() {
  return (
    <div className="max-w-[1000px] mx-auto  min-h-screen py-16 md:py-20 lg:py-24     ">
      <SectionHead Title="Some Stuff I've Built" Number="03" />

      <div className="flex flex-col space-y-5 items-center   ">
        <div className=" relative grid grid-cols-12  rounded-md   w-full items-center   ">
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
            <div className="md:items-end flex flex-col p-5">
              <span className="text-blue-400 text-xs font-bold tracking-wide pb-2">
                Featured Project
              </span>
              <span className="text-3xl font-bold text-gray-200 font-Calibre">
                Discord Clone
              </span>
              <div className="md:bg-gray-850   shadow-lg md:text-right  max-w-lg  p-6 my-5 text-lg leading-tight  font-Calibre">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </div>
              <div className="flex space-x-5 ">
                <span className="">VS</span>
                <span>C#</span>
                <span>React</span>
                <span>tailwind</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative rtl grid grid-cols-12 border rounded-md  border-rounded-md border-blue-400 w-full  ">
          <div className="col-span-7   row-span-full col-start-1 self-center">
            <img className="w-full h-full " src={discordClone} />
          </div>
          <div className="col-span-7 row-span-full col-start-6  items-end flex flex-col ">
            <span>Featured Project</span>
            <span>Discord Clone</span>
            <div className="bg-gray-600 text-left   max-w-lg  mt-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              aperiam consectetur recusandae hic autem ab cum eos adipisci
              dignissimos harum?
            </div>
            <div className="flex space-x-5 ">
              <span className="mx-5">VS</span>
              <span>C#</span>
              <span>React</span>
              <span>tailwind</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 border-2 border-blue-400 w-full justify-items-center">
          <div className="col-span-6">Image</div>
          <div className="col-span-6">Content</div>
        </div>
      </div>
    </div>
  );
}
