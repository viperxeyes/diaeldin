import React from "react";

export default function TextHover({ text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative  text-blue-400   py-0.5 group "
    >
      <span className=" absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-0.5 bg-blue-400 left-0 bottom-0"></span>
      <span className="relative"> {text}</span>
    </a>
  );
}
