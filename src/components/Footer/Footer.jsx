import React from "react";
import { footerText } from "../../constants/constants";
import { ImGithub, ImWhatsapp, ImTwitter } from "react-icons/im";
import { FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Footer() {
  return (
    <section className="   flex  flex-col  min-h-screen justify-start items-center  max-w-md sm:max-w-full px-5 lg:px-48">
      <div className="text-blue-500 font-mono w-full flex justify-center  pb-5 ">
        <h2>.What's Next.()</h2>
      </div>
      <div className="font-mono text-4xl w-full justify-center flex text-gray-300 pb-5 font-bold">
        <h2>Get In Touch</h2>
      </div>
      <div
        className="    text-gray-400 w-3/4 lg:w-1/2 justify-center pb-10 font-mono text-center lg:text-justify align-top  "
        style={{ textAlignLast: "center" }}
      >
        <p>{footerText}</p>
      </div>
      <button className="text-white border-solid border rounded-md border-blue-500 hover:bg-blue-500 hover:bg-opacity-30  transition-all duration-300 ease-in-out ">
        <div className="px-8 py-4 w-auto">Say Hello</div>
      </button>

      <div className="text-gray-400 mt-auto mb-5 text-sm font-mono items-center justify-center flex flex-col">
        <div className="text-gray-400 mb-5 lg:hidden flex flex-row  justify-evenly w-full ">
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
