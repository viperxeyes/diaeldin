import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ title, number, section, setActive }) {
  const onClick = () => {
    setActive(false);
    let main = document.getElementById("main");
    let container = document.getElementById("ScrollableContainer");
    main.classList.remove("blur-md");
    container.classList.add("scrollbar-thin");
    console.log("screen normal");
  };
  return (
    <li>
      <Link
        //className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5"
        className="  flex  flex-col md:flex-row w-full justify-center items-center   cursor-pointer  mr-5 text-xl md:text-xs  "
        to={`#${section}`}
        onClick={() => {
          document
            .getElementById(`${section}`)
            .scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          onClick();
        }}
      >
        <span className=" text-blue-400  ">{number}</span>
        <span className=" text-gray-400 hover:text-blue-400 ">
          {title}
          <span className="text-blue-400 ">.()</span>
        </span>
      </Link>
    </li>
  );
}
