import React, { useState } from "react";
import { jobs } from "../../constants/constants";
import SectionHead from "../Utilities/SectionHead";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (id) => {
    setActiveTab(id);
  };

  return (
    <div
      id="experience"
      className="  max-w-[700px] py-16 md:py-20 lg:py-24 mx-auto  min-h-screen "
    >
      <SectionHead Title="Where I've Worked" Number="02" />

      <div className="flex flex-col md:flex-row  ">
        <div className="relative flex  md:flex-col md:list-none overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-rounded-md scrollbar-track-rounded-md  scrollbar-track-gray-850">
          {jobs &&
            jobs.map((job, i) => {
              return (
                <button
                  id={"btn"}
                  key={i}
                  onClick={() => toggleTab(i)}
                  className="  md:px-5 px-0 h-10 pb-[2px] flex  md:flex-auto  min-w-[120px]  items-center text-md font-SFMono  border-t-2 md:border-t-0  md:border-l-2 border-blue-400/25  justify-center md:text-left md:justify-start  md:hover:bg-blue-900/25 focus:bg-blue-900/25 transition duration-500 ease-in-out"
                >
                  <span
                    className={`${
                      activeTab !== i ? "text-gray-400" : "text-blue-400"
                    }`}
                  >
                    {job.company}
                  </span>
                </button>
              );
            })}

          <div
            className={`absolute rounded-md bg-blue-400  md:h-10  md:w-[3px]  h-[2px] md:top-0 md:left-0 w-full top-0 bottom-0   `}
            style={{
              maxWidth: `120px`,
              transform:
                window.innerWidth >= 768
                  ? `translateY(calc(${activeTab} * 40px))`
                  : `translateX(calc(${activeTab}*120px))`,
              transition:
                "transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
              transitionDelay: "0.1s",
            }}
          ></div>
        </div>
        <div className="ml-5 ">
          {jobs.map((job, i) => {
            return (
              <div
                key={i}
                style={{
                  transition:
                    "opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
                }}
                className={`${
                  activeTab !== i ? "  opacity-0    " : "  opacity-100   "
                } "   absolute  flex flex-col px-1 py-2  "`}
              >
                <h3 className="text-xl font-Calibre text-gray-200 font-medium leading-none  ">
                  {job.title}
                  <span className="text-blue-400 text-2xl">
                    @ {job.company}
                  </span>
                </h3>
                <div className="text-xs">
                  <span>{job.startDate} - </span>
                  <span>{job.endDate}</span>
                </div>
                <div>
                  <ul className="font-normal font-Calibre text-md space-y-1 max-w-lg mt-4">
                    {job.tasks &&
                      job.tasks.map((task, i) => {
                        return (
                          <li key={i} className="flex">
                            <span className="text-lg pr-2   text-blue-400">
                              ▹
                            </span>
                            <span className="tracking-wide text-lg leading-tight font-Calibre ">
                              {task}
                            </span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
