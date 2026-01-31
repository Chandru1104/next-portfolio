"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const links = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "expertise",
  },
  {
    name: "experience",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" z-10   max-md:px-5 flex  h-16  fixed w-full top-0 flex-row justify-between items-center px-14  bg-background rounded-md bg-clip-padding backdrop-filter backdrop-blur-md  border border-gray-100 dark:border-none">
      <Link href="/">
        <h1 className=" font-bold text-2xl cursor-pointer">
          Rajesh <span className=" text-accent"> Rajendran</span>{" "}
        </h1>
      </Link>

      <div className=" capitalize h-full flex flex-row items-center gap-7  max-md:gap-4  relative  ">
        <ul
          className={`capitalize bg-secondary border-l border-gray-700 py-8 bg-clip-padding backdrop-filter backdrop-blur-xl items-center gap-7 fixed top-16 right-0 flex-col w-[250px] z-30 h-[calc(100vh-4rem)] transition-transform duration-300 ease-in-out flex ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {links.map((link, index) => (
            <li
              onClick={() => setToggle(!toggle)}
              key={index}
              className=" text-accent text-sm font-bold     cursor-pointer hover:border-b-2 border-primary  py-2 "
            >
              <Link href={`#${link.name}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex  items-center gap-5 max-md:hidden ">
          {links.map((link, index) => (
            <li
              key={index}
              className=" text-sm   duration-150 cursor-pointer hover:border-b-2 border-accent  py-2 "
            >
              <Link href={`#${link.name}`}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div
          className=" hidden max-md:block "
          onClick={() => setToggle((toggle) => !toggle)}
        >
          {toggle ? <X /> : <Menu />}{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
