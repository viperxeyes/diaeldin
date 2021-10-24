import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ title }) {
  return (
    <li className="list-none pb-10 md:pb-0  ">
      <Link
        //className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5"
        className="flex  flex-col md:flex-row w-full justify-center items-center text-base  cursor-pointer  mr-5 pt-2 px-2 hover:text-blue-400 "
        to="#"
      >
        <i className="mr-1 text-blue-400 invisible md:visible">.</i>
        <i>
          {title}
          <i className="ml-1 text-blue-400">.()</i>
        </i>
      </Link>
    </li>
  );
}