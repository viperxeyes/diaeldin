import React from "react";
import { footerText } from "../../constants/constants";
import { ImGithub, ImWhatsapp, ImTwitter } from "react-icons/im";
import { FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Footer() {
  return (
    <section className="   flex flex-1 flex-col p-16 pt-20 h-auto min-h-full justify-start items-center">
      <div className="text-blue-500 font-mono  pb-5 ">
        <h2>.What's Next.()</h2>
      </div>
      <div className="font-mono text-4xl text-gray-300 pb-5 font-bold">
        Get In Touch
      </div>
      <div className="  px-10  text-gray-400 justify-center items-center pb-10 font-mono text-center  ">
        <div className="  w-full">{footerText}</div>
      </div>
      <button className="text-white border-solid border-2 rounded-md border-blue-500 hover:bg-blue-500 hover:bg-opacity-30  transition-all duration-300 ease-in-out ">
        <div className="px-8 py-4 w-auto">Say Hello</div>
      </button>

      <div className="text-gray-400 mt-auto mb-5 text-sm font-mono items-center justify-center flex flex-col">
        <div className="text-gray-400 mb-5 md:hidden flex flex-row  justify-evenly w-full ">
          <IconContext.Provider
            value={{ className: "hover:text-blue-500", size: 24 }}
          >
            <ImGithub />
            <FaFacebook />
            <FaSnapchat />
            <FaInstagram />
            <ImWhatsapp />
            <ImTwitter />
          </IconContext.Provider>
        </div>

        <div className="flex  items-center">Designed & built by Dia Eldin</div>
      </div>
    </section>
  );
}
