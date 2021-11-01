import React, { useState } from "react";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";

import SideBanners from "../SideBanners/SideBanners";

export default function Layout() {
  const [scrollValue, SetScrollValue] = useState(0);
  const [oldScrollValue, setOldScrollValue] = useState(0);
  const scrolling = (e) => {
    SetScrollValue((prevState) => {
      setOldScrollValue(prevState);
      return Math.round(e.target.scrollTop);
    });
  };
  return (
    <div
      id="ScrollableContainer"
      className="absolute grid grid-cols-1  bg-gray-900 overflow-hidden font-SFMono    w-full h-full  z-30 scrollbar-thumb-gray-600 scrollbar-track-gray-850 scrollbar-thin   scrollbar-thumb-rounded-md scrollbar-track-rounded-md  "
      onScroll={(e) => {
        scrolling(e);
      }}
    >
      <Header scrollValue={scrollValue} oldScrollValue={oldScrollValue} />
      <SideBanners />
      <main
        id="main"
        className="text-gray-400 xl:px-36 md:px-24 sm:px-10 px-6 mx-auto w-full       "
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
