"use client";
import { BackgroundRippleEffect } from "@/Components/ui/background-ripple-effect";

import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import dynamic from "next/dynamic";
import { ChevronRight, MoveRight } from "lucide-react";

const MaskContainer = dynamic(
  () => import("@/Components/ui/svg-mask-effect").then((m) => m.MaskContainer),
  { ssr: false }
);

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <BackgroundRippleEffect />
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
 
      {/* Hero Content */}

      <div className="p-4 relative z-10  h-full w-full text-center">
        <MaskContainer
          revealText={
            <div
              className="flex flex-col mt-10 items-center justify-center
            "
            >
              <h1 className="mt-10 md:mt-10  text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Elevate Your Online Presence
              </h1>

              <p className="mt-5 font-normal text-2xl md:text-lg text-neutral-300 max-w-xl mx-auto">
                Crafted to elevate your brand, attract the right audience, and
                convert visitors into loyal customers with cutting-edge
                technology and proven marketing tactics.
              </p>

              {/* CTA BUTTON — OUTSIDE MASK */}
              <div className="relative; z-50 gap-5    mt-10 flex justify-center">
                <Link href="/services">
         <button className="
  px-10 py-3
  text-xl
  flex items-center justify-center gap-2
  rounded-full
  bg-gradient-to-b from-blue-500 to-blue-950
  text-white
  focus:ring-2 focus:ring-blue-400
  hover:scale-110 hover:shadow-xl
  transition-transform duration-300 ease-out
">
  Get Started
  <ChevronRight size={22} strokeWidth={1.5} />
</button>

                </Link>

                 
                
                <Link href="tel:+919876543210">
             <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"/>
  <div className="px-8 py-2 flex items-center gap-1 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
   Contact us. <span className="strokeWidth={1.5}  absoluteStrokeWidt "><MoveRight /> </span>
  </div>
</button> 

                </Link>


              </div>
            </div>
          }
          className="  text-white dark:text-black"
        >
          With powerful web solutions{" "}
          <span className="text-blue-500">And result-driven</span> Digital
          marketing strategies.{" "}
          <span className="bg-gradient-to-r text-bold from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">
            And turn visitors into Loyal customers.
          </span>
        </MaskContainer>
      </div>
    </div>
  );
}

export default HeroSection;
