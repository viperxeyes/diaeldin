import React from "react";
import SectionHead from "../Utilities/SectionHead";

import discordClone from "../../images/discordClone.png";
import ProjectSection from "../../constants/ProjectSection";
export default function Projects() {
  return (
    <div className="max-w-[1000px] mx-auto  min-h-screen py-16 md:py-20 lg:py-24  space-y-32    ">
      <SectionHead Title="Some Stuff I've Built" Number="03" />
      <ProjectSection />
      <ProjectSection rtl />
      <ProjectSection />
    </div>
  );
}
