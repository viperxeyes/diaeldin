import React from "react";

import NavItem from "./NavItem";
import NavItemGroup from "./NavItemGroup";
import { FaTh } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Navbar({ onClick, active }) {
  return (
    <nav className="w-auto">
      <button
        className="lg:hidden z-30  relative border-dashed  "
        onClick={onClick}
      >
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

      <NavItemGroup active={active}>
        <NavItem title="About" number={"01."} />
        <NavItem title="Experience" number={"02."} />
        <NavItem title="Projects" number={"03."} />
        <NavItem title="Contact" number={"04."} />
        <button className="text-white border-solid border rounded-md border-blue-500 hover:bg-blue-500 hover:bg-opacity-30  transition-all duration-300 ease-in-out">
          <div className="lg:p-2 lg:w-24  px-6 py-4 w-36 transition-all transform duration-150 ease-in-out">
            Resume
          </div>
        </button>
      </NavItemGroup>
    </nav>
  );
}
