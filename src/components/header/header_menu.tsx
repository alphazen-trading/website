"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  { href: "/zenbt", label: "ZenBT" },
  { href: "/zentrade", label: "ZenTrade" },
  { href: "/tradingtoolbox", label: "Trading Toolbox" },
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
