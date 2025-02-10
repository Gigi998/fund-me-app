import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge(
        "min-h-screen flex flex-col justify-center  lg:py-20 py-10  lg:px-10 px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
