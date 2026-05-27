import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MouseEventHandler } from "react";

type propsType = {
  classname: string | object;
  text: string;
  onClick: MouseEventHandler;
};

const StartButton = ({ classname, text, onClick }: propsType) => {
  return (
    <button
      className={cn(
        "flex flex-row gap-3 text-text-primary py-2 px-3 rounded-md text-base font-medium border border-border-emphasis w-full hover:bg-bg-elevated cursor-pointer",
        classname,
      )}
      onClick={onClick}
    >
      <span>{text}</span>
      <span>
        <ArrowRight />
      </span>
    </button>
  );
};

export default StartButton;
