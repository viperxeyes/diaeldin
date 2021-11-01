import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Logo from "../icons/logo";
import Navbar from "../Navbar/Navbar";

export default function Header({ scrollValue, oldScrollValue }) {
  const [active, setActive] = useState(false);

  const onClick = () => {
    let container = document.getElementById("ScrollableContainer");
    let main = document.getElementById("main");
    setActive(!active);
    if (!active) {
      container.classList.remove("scrollbar-thin");
      main.classList.add("blur-md");
    } else {
      container.classList.add("scrollbar-thin");
      main.classList.remove("blur-md");
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setActive(false);
        let main = document.getElementById("main");
        let container = document.getElementById("ScrollableContainer");
        main.classList.remove("blur-md");
        container.classList.add("scrollbar-thin");
        console.log("screen normal");
      }
    });
  }, []);

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
      <Logo />

      <Navbar onClick={onClick} active={active} setActive={setActive} />
    </header>
  );
}
