import React from "react";

export default function NavItemGroup(props) {
  console.log(props);
  return (
    <ul
      className={`${
        props.active ? "translate-x-0" : " translate-x-full "
      } fixed  w-7/12 lg:w-full right-0 top-0 bottom-0  z-10 min-h-screen flex flex-col text-gray-400 justify-center items-center bg-gray-850 space-y-5 transform transition duration-150 ease-linear  lg:relative lg:flex lg:flex-row lg:min-h-0 lg:space-y-0 lg:space-x-1 lg:translate-x-0 lg:justify-center lg:items-center lg:bg-transparent lg:transform-none lg:transition-none `}
    >
      {props.children}
    </ul>
  );
}
