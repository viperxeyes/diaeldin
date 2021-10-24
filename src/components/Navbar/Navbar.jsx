import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import NavItemGroup from "./NavItemGroup";
import { GrMenu } from "react-icons/gr";
import { FaTh } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <div
      className={` ${
        active && "dark"
      } text-white font-mono text-sm mx-auto h-16 flex items-center justify-between p-5 sm:px-12`}
    >
      <div className="w-14">Logo</div>
      <button className="lg:hidden z-30  border-dashed  " onClick={onClick}>
        {!active ? (
          <FaTh
            size={30}
            className="text-blue-500 dark:text-blue-400 hover:text-blue-600 transition-all duration-150 ease-linear"
            fontSize="1.5em"
          />
        ) : (
          <IoMdClose
            size={30}
            className="text-white dark:text-blue-400"
            fontSize="1.5em"
          />
        )}
      </button>

      <nav
        className={`${
          !active &&
          "bg-gray-850 transform translate-x-full lg:transform-none lg:translate-x-0 "
        } 
         fixed bg-gray-850  
         w-2/3  top-0 h-screen lg:h-full
          right-0 flex justify-center lg:bg-transparent
          lg:static lg:w-auto lg:flex  
          transform transition-transform  duration-100 ease-linear
      `}
      >
        <NavItemGroup>
          <NavItem title="About" />
          <NavItem title="Projects" />
          <NavItem title="Experience" />
          <NavItem title="Contact" />
          <button className="mt-2 border-solid border-2 rounded-lg border-blue-500 hover:bg-gray-700 lg:hover:bg-gray-800 transition-all duration-300 ease-in-out hover:border-transparent">
            <div className="p-2 w-20">Resume</div>
          </button>
        </NavItemGroup>
      </nav>
    </div>
  );
}
