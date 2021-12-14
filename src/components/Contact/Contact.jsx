import React from "react";
import { footerText } from "../../constants/constants";
import { ImGithub, ImWhatsapp, ImTwitter } from "react-icons/im";
import { FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Contact() {
  return (
    <section
      id="contact"
      className="  relative    max-w-[600px] py-16 md:py-20 lg:py-24 mx-auto  min-h-screen   "
    >
      <div className="text-center  top-1/4 absolute">
        <h2 className="text-blue-400   font-SFMono font-semibold  pb-5 ">
          04. What's Next.()
        </h2>

        <h2 className="font-Calibre md:text-6xl text-4xl   text-gray-300 pb-5 font-bold">
          Get In Touch
        </h2>

        <p
          className="    text-gray-400    font-Calibre  text-xl   "
          style={{ textAlignLast: "center" }}
        >
          {footerText}
        </p>

        <button className="text-white border-solid border m-10   rounded-md border-blue-500 hover:bg-blue-500 hover:bg-opacity-30  transition-all duration-300 ease-in-out ">
          <div className="px-8 py-4 w-auto">Say Hello</div>
        </button>
      </div>
      <div className="text-gray-400 absolute bottom-0 pb-5 lg:hidden flex flex-row  justify-evenly w-full ">
        <IconContext.Provider
          value={{
            className:
              "hover:text-blue-500 transition-all duration-500 ease-in-out",
            size: 24,
          }}
        >
          <ImGithub />
          <FaFacebook />
          <FaSnapchat />
          <FaInstagram />
          <ImWhatsapp />
          <ImTwitter />
        </IconContext.Provider>
      </div>
    </section>
  );
}
