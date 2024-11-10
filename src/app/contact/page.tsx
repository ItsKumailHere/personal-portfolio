"use client";

import React from "react";
import Navbar from "../components/navbar";

export default function Contact() {
  const socials = [
    {
      icon: "Gmail",
      color: "",
      hover: "text-orange-700",
    },
    {
      icon: "Instagram",
      color: "",
      hover: "text-purple-700",
    },
    {
      icon: "LinkedIn",
      color: "",
      hover: "text-blue-400",
    },
    {
      icon: "Github",
      color: "",
      hover: "text-white",
    },
  ];
  return (
    <div className="p-6">
      <Navbar />
      <div className="h-full flex flex-col justify-center gap-5 items-center border border-solid  py-8">
        <h1 className="text-5xl font-medium">Let's Work Togehther!</h1>
        <div className="flex gap-5">
          {socials.map((item) => {
            return (
              <h2
                className={`hover:${item.hover} color-slate-600 cursor-pointer`}
              >
                {item.icon}
              </h2>
            );
          })}
        </div>
      </div>
    </div>
  );
}
