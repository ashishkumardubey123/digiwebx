"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* HOME */}

        <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Home">
        
        </MenuItem>
        
        </Link>

    

        {/* SERVICES */}
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services">Web Development</HoveredLink>
            <HoveredLink href="/services">SEO Services</HoveredLink>
            <HoveredLink href="/services">Social Media Branding</HoveredLink>
          </div>
        </MenuItem>

        {/* ABOUT */}
       <Link href="/about">
         <MenuItem setActive={setActive} active={active} item="About">
      
        </MenuItem>
       </Link>

        {/* PORTFOLIO */}

        <Link
          href="/portfolio"
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
            <MenuItem
            setActive={setActive}
            active={active}
            item="portfolio"
          ></MenuItem>
        </Link>

        {/* CONTACT */}

        <Link
          href="/contact"
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
