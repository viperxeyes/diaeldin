import React from "react";
import { ImGithub, ImWhatsapp, ImTwitter } from "react-icons/im";
import { FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
export default function SideBanners() {
  return (
    <>
      <div className="  text-gray-400 font-thin font-SFMono fixed bottom-0 right-14  flex flex-col justify-center items-center invisible lg:visible">
        <div className="transform -rotate-90 w-0">
          serpent_eyesus@hotmail.com
        </div>
        <div className=" border-l  h-28 border-gray-400"></div>
      </div>
      <div className="flex  ">
        <IconContext.Provider
          value={{
            className: "hover:text-blue-500 mb-4 text-gray-400 ",
            size: 20,
          }}
        >
          <div className="  flex flex-1 flex-col  items-center left-12 invisible lg:visible fixed bottom-0 ">
            <ImGithub />
            <FaFacebook />
            <FaSnapchat />
            <FaInstagram />
            <ImWhatsapp />
            <ImTwitter />

            <div className=" border-l  h-28 border-gray-400"></div>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}
