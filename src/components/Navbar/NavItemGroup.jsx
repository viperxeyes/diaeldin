import React from "react";

export default function NavItemGroup(props) {
  return (
    <ul
      className={`${
        props.active ? "translate-x-0" : " translate-x-full "
      } fixed  w-7/12 md:w-full right-0 top-0 bottom-0  z-10 min-h-screen flex flex-col text-gray-400 justify-center items-center bg-gray-850/95 space-y-5 transform transition duration-150 ease-linear  md:relative md:flex md:flex-row md:min-h-0 md:space-y-0 md:space-x-1 md:translate-x-0 md:justify-center md:items-center md:bg-transparent md:transform-none md:transition-none `}
    >
      {props.children}
    </ul>
  );
}
