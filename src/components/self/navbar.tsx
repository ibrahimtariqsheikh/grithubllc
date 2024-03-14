import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { PersonStandingIcon } from "lucide-react";

const NavigationBar = () => {
  return (
    <div className=" h-min p-6 flex justify-between items-center mx-10 sticky top-0 z-50 bg-white">
      <PersonStandingIcon />
      <div className="flex gap-4">
        <Link href={"#"}>Our Products</Link>
        <Link href={"#"}>Contact Us</Link>
        <Link href={"#"}>About Us</Link>
      </div>
      <Button>Sign In</Button>
    </div>
  );
};

export default NavigationBar;
