import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const TextOne = ({ children, className }: Props) => {
  return (
    <div className={cn("text-white text-muted-foreground", className)}>
      {children}
    </div>
  );
};

export default TextOne;
