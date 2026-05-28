import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
type PrimaryButtonProps = {
  children: ReactNode;
  className: object | string;
};

const ActionButton = ({ children, className }: PrimaryButtonProps) => {
  return (
    <button
      className={cn(
        "flex flex-row items-center justify-center gap-2 rounded-lg py-2.5 px-3 bg-bg-inverseSurface text-base font-medium text-text-inversePrimary cursor-pointer hover:shadow-white transition-all delay-50 ease-in-out",
        className,
      )}
    >
      <span>{children}</span>
      <span>
        <ArrowRight />
      </span>
    </button>
  );
};

export default ActionButton;
