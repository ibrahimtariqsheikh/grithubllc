import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const HeadingOne = ({ children, className }: Props) => {
  return (
    <div className={cn("text-3xl font-semibold", className)}>{children}</div>
  );
};

export default HeadingOne;
