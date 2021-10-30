import React from "react";
import { FaHtml5 } from "react-icons/fa";
import Me from "../../images/Me.jpeg";
import {
  Arduino,
  CSharp,
  CSS,
  Docker,
  DotNet,
  DotNetCore,
  Electron,
  Firebase,
  HTML5,
  Javascript,
  MongoDB,
  Nginx,
  NodeJS,
  PostgresSQL,
  ReactJS,
  Tailwind,
} from "../icons/Logos";
import SectionHead from "../Utilities/SectionHead";
import TextHover from "../Utilities/TextHover";

export default function About() {
  return (
    <div className="  max-w-[900px] py-16 md:py-20 lg:py-24 mx-auto min-h-screen">
      <SectionHead Title="About Me" Number="01" />

      <div className="grid  grid-cols-1 md:grid-cols-2  gap-4    font-Calibre text-lg">
        <div className="space-y-5 tracking-wider md:col-span-1 col-span-2 md:text-justify ">
          <p>
            Hello! My name is <span className="text-blue-400">Dia Eldin </span>
            and yes my name is complex Arabian name, I love creation in general
            thats why development is my joy.My journey started back in 2006
            after my graduation project wich was written in C# and was kind of
            house automatiion, not long after that I was tweaking the system
            every now and then but never tried to do anything related to the
            web.
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege meeting great
            people in my life and learning new technologies and entered the
            world of Web Development.My life has changed completely when I
            travelled to Saudi Arabia and Joined
            <TextHover text="KAUST" link="https://www.kaust.edu.sa/" /> (King
            Abdullah University of Science and Technology) a huge place with
            state of the art techs everywhere.
          </p>
        </div>
        <div className="relative    w-[70%] lg:w-[70%] sm:w-[70%] md:[w-70%] h-full    place-self-center  ">
          <div className="relative group   bg-blue-500 h-0 pb-[100%] hover:bg-transparent rounded-md transition-all  duration-300 ease-in-out">
            <img
              src={Me}
              alt="Me"
              className=" absolute z-20 brightness-150 rounded-md   filter grayscale hover:filter-none  mix-blend-multiply transfrom hover:mix-blend-normal transition-all duration-300 ease-in-out"
            />
            <div className=" absolute z-10 h-full w-full  top-4 ml-4  border-2 rounded-md border-blue-500 transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all"></div>
          </div>
        </div>
        <div className="col-span-2 ">
          <div className="flex flex-col">
            <span className="pb-5">
              Technologies I use mostly for development :
            </span>
            <ul className="flex items-center  space-x-5  space-y-5 flex-wrap justify-center ">
              <li className="justify-center items-center flex">
                <CSharp
                  color="#429df4"
                  color2="#2978c2"
                  className="w-14 h-14 ml-5 mt-5 "
                />
              </li>

              <li>
                <Javascript className="w-14 h-14 " color="#429df4" />
              </li>

              <li>
                <HTML5 className="w-14 h-14" color="#429df4" color2="#2978c2" />
              </li>

              <li>
                <CSS color="#429df4" color2="#2978c2" className="w-14 h-14" />
              </li>

              <li>
                <ReactJS className="w-14 h-14 " color="#429df4" />
              </li>

              <li>
                <NodeJS className="w-14 h-14 " color="#429df4" />
              </li>
              <li>
                <Electron className="w-14 h-14" color="#429df4" />
              </li>
              <li>
                <Tailwind
                  className="w-14 h-14 "
                  color="#429df4"
                  color2="#2978c2"
                />
              </li>
              <li>
                <PostgresSQL
                  className="w-14 h-14 "
                  color="#429df4"
                  color2="#2978c2"
                />
              </li>
              <li>
                <Firebase className="w-14 h-14" color="#429df4" />
              </li>
              <li>
                <MongoDB className="w-14 h-14" color="#429df4" />
              </li>
              <li>
                <DotNet className="w-14 h-14" color="#429df4" />
              </li>

              <li>
                <DotNetCore className="w-14 h-14" color="#429df4" />
              </li>
              <li>
                <Nginx className="w-14 h-14 " color="#429df4" />
              </li>
              <li>
                <Docker className="w-14 h-14" color="#429df4" />
              </li>
              <li>
                <Arduino color="#429df4" className="w-14 h-14 " />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
