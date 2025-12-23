"use client";


import ourservices from "../data/services.json";
import Link from "next/link";
import { LucideIcon, ArrowBigRightDash, LaptopMinimal, Search, Instagram } from "lucide-react";
import { Icon } from "@tabler/icons-react";
import { BackgroundGradient } from "./ui/background-gradient";

interface Service {
   id: number,
   icon: LucideIcon;
  name: string;
  description: string;
  points: string[];
}

function Our_services() {
  return (
    <div className="py-12 -mt-5">
      <div className="text-center">
        <h2
          className="flex font-satoshi justify-center items-center gap-1
      bg-white/80 mx-auto backdrop-blur 
      px-2 py-2 
      rounded-lg shadow-sm
      text-sm sm:text-lg 
      font-medium text-gray-900 
      w-fit"
        >
          What We Offer
          <ArrowBigRightDash className="w-4 pt-1 h-5 sm:w-6 sm:h-8 text-black" />
        </h2>

        <p className="mt-2 font-satoshi-bold text-3xl leading-8 font-normal tracking-tight text-white sm:text-8xl">
          Services
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* service cards yahan aayenge */}

        {ourservices.map((service) => {
  const I = service.icon;   // ✅ ab const kaam karega

  return (
    <div key={service.id} className="flex justify-center">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="p-4 sm:p-6 flex flex-col flex-grow">

          {/* <I className="mx-auto mb-4 w-10 h-10 text-white" /> */}

          <h3 className="text-xl text-center font-semibold mb-2 text-gray-900 dark:text-white">
            {service.name}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {service.description}
          </p>

          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {service.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

        </div>
      </BackgroundGradient>
    </div>
  );
})}

        </div>
      </div>

      {/* Button */}
      <div className="mt-20 text-center">
        <Link href="/services">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>

            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
              <span>Services & Solutions</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Our_services;
