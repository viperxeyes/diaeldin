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
      console.log(container);
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
      } fixed font-mono flex w-full top-0 h-20  shadow-lg bg-gray-900  justify-between items-center px-4 lg:px-12 transition transform duration-300 ease-in-out`}
    >
      <a href="#" className="hover:fill-current text-blue-400 text-opacity-10">
        <Logo />
      </a>

      <Navbar onClick={onClick} active={active} />
    </header>
  );
}
