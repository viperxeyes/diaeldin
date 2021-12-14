import React, { useEffect, useState } from "react";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";

import SideBanners from "../SideBanners/SideBanners";
import ScrollAnimation from "react-animate-on-scroll";
export default function Layout() {
  const [scrollValue, SetScrollValue] = useState(0);
  const [oldScrollValue, setOldScrollValue] = useState(0);
  const scrolling = (e) => {
    SetScrollValue((prevState) => {
      setOldScrollValue(prevState);
      return Math.round(e.target.scrollingElement.scrollTop);
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      scrolling(e);
      console.log(e.target.scrollingElement.scrollTop);
    });
  }, []);
  return (
    <div
      id="ScrollableContainer"
      className=" grid grid-cols-1  bg-gray-900 font-SFMono overflow-hidden   w-full h-full  z-30  "
    >
      <Header scrollValue={scrollValue} oldScrollValue={oldScrollValue} />
      <SideBanners />
      <main
        id="main"
        className="text-gray-400 xl:px-36 md:px-24 sm:px-10 px-6 mx-auto w-full      "
      >
        <Hero />

        <About />

        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="flex flex-col  items-center mx-auto text-gray-400 p-3 text-xs ">
        <span>
          Designed & built by
          <span className="text-blue-400 ml-2">Dia Eldin </span>{" "}
        </span>

        <span>&copy; 2021</span>
      </footer>
    </div>
  );
}
