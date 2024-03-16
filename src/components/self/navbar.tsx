import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Menu, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Command, CommandInput } from "../ui/command";

const NavigationBar = () => {
  return (
    <div className="h-min pt-10 pb-4 flex justify-between items-center sticky top-0 z-50 border-b bg-background">
      <section className="hidden md:flex md:gap-4 lg:gap-8 text-sm mx-20">
        <Link href={"#"} className="hover:underline ">
          HOME
        </Link>
        <Link href={"#"} className="hover:underline ">
          SHOP
        </Link>
        <Link href={"#"} className="hover:underline ">
          ABOUT US
        </Link>
        <Link href={"#"} className="hover:underline ">
          CONTACT US
        </Link>
      </section>
      <section className="absolute left-1/2 transform -translate-x-1/2">
        <Image
          height={"90"}
          width={"90"}
          alt="logo"
          src={"/assets/grithub.png"}
          quality={100}
        />
      </section>
      <section className="flex md:gap-4 lg:gap-8 ml-auto  mx-20">
        <Command>
          <CommandInput placeholder="Search" />
        </Command>
        <div className="relative">
          <Button size={"icon"}>
            <ShoppingBag className="w-4 h-4 opacity-80" />
          </Button>
          <div className="absolute rounded-full w-5 h-5 bg-black text-white text-xs flex items-center justify-center left-6 -top-1">
            1
          </div>
        </div>
        <Button size={"icon"} className="hidden md:flex opacity-80">
          <Menu className="w-4 h-4" />
        </Button>
      </section>
    </div>
  );
};

export default NavigationBar;
