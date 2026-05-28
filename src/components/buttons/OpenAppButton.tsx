import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";
type propsType = {
  text: string;
  onClick: React.MouseEventHandler;
  icon: boolean;
};

const OpenAppButton = ({ text, onClick, icon = true }: propsType) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-3 text-base text-text-primary bg-bg-surface rounded-md border border-border-default cursor-pointer flex flex-row gap-2 items-center justify-center transition-all duration-150 ease-in hover:opacity-75"
    >
      <span>{text}</span>
      <span>{icon && <SquareArrowOutUpRight size={24} />}</span>
    </button>
  );
};

export default OpenAppButton;
