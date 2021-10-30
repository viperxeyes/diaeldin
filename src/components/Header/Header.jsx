import React, { useState } from "react";
import Logo from "../icons/logo";
import Navbar from "../Navbar/Navbar";

export default function Header({ scrollValue, oldScrollValue }) {
  const [active, setActive] = useState(false);

  const onClick = () => {
    let container = document.getElementById("ScrollableContainer");
    setActive(!active);
    if (!active) {
      container.classList.remove("scrollbar-thin");
    } else {
      container.classList.add("scrollbar-thin");
    }
  };

  return (
    <header
      className={`${
        scrollValue >= 30 && oldScrollValue < scrollValue
          ? "-translate-y-full"
          : scrollValue < 100
          ? "translate-y-0"
          : oldScrollValue > scrollValue
          ? "translate-y-0"
          : null
      } fixed px-4 md:px-12  flex w-full top-0 h-20 z-50 shadow-lg  font-SFMono md:text-xs bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-md justify-between items-center  transition transform duration-300 ease-in-out`}
    >
      <a href="#" className="hover:fill-current text-blue-400 text-opacity-10">
        <Logo />
      </a>

      <Navbar onClick={onClick} active={active} />
    </header>
  );
}
