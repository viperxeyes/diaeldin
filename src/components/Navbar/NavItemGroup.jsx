import React from "react";

export default function NavItemGroup(props) {
  return (
    <ul className="mt-20 lg:mt-0  lg:flex lg:flex-row justify-center flex flex-col items-center">
      {props.children}
    </ul>
  );
}
