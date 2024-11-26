"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  { href: "https://zenbt.alphazen.xyz/", label: "ZenBT" },
  // { href: "/zentrade", label: "ZenTrade" },
  { href: "https://tradingtoolbox.alphazen.xyz/", label: "Trading Toolbox" },
];
export default NavigationMenu;

export function HeaderMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <div className="flex flex-row mr-2">
            <p className="text-primary text-xl font-inter mr-6 pt-[5px] ">
              ALPHAZEN
            </p>
            <Separator
              className="w-[2px] h-[35px] "
              orientation="vertical"
              decorative
            />
          </div>
        </NavigationMenuItem>

        {menuItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-transparent text-gray-700`}
                target="_blank"
              >
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
