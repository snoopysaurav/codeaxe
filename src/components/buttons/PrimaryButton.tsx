import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
};

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <button className="rounded-lg py-2.5 px-3 bg-bg-inverseSurface text-base font-medium text-text-inversePrimary cursor-pointer hover:shadow-white transition-all delay-50 ease-in-out ">
      {children}
    </button>
  );
};

export default PrimaryButton;
