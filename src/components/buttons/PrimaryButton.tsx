import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  classname: object | string;
};

const PrimaryButton = ({ children, classname }: PrimaryButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-lg py-2.5 px-3 bg-bg-inverseSurface text-base font-medium text-text-inversePrimary cursor-pointer hover:shadow-white transition-all delay-50 ease-in-out",
        classname,
      )}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
