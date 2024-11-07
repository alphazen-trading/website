import React from "react";
import { NavigationMenuDemo } from "@/components/header/navigation_menu";

const Header = () => (
  <header className="sticky top-0 z-20 h-[57px] bg-white dark:bg-[hsl(218,_13%,_12%,_.95)] w-full max-w-full flex items-center border-b border-dashed border-blue-200 dark:border-blue-300/15">
    <div className="w-full relative mx-3 md:mx-12 flex border-l border-r border-dashed border-blue-200 dark:border-blue-300/15">
      <div className="absolute h-2 w-2 z-10 rounded-[1px] rotate-45 border border-blue-300 dark:border-blue-500/60 bg-white/80 dark:bg-black left-[-4.5px] bottom-[-4.5px]" />
      <div className="absolute h-2 w-2 z-10 rounded-[1px] rotate-45 border border-blue-300 dark:border-blue-500/60 bg-white/80 dark:bg-black right-[-4.5px] bottom-[-4.5px]" />
      <nav
        aria-label="Site's main navigation"
        data-orientation="horizontal"
        dir="ltr"
        className="relative z-[2] md:max-w-[1248px] md:mx-auto w-full py-3 px-4 md:px-6 flex justify-between gap-4 lg:gap-0"
      >
        <div className="flex gap-3 items-center flex-none">
          <NavigationMenuDemo />
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
