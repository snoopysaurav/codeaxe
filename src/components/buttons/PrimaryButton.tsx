import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
};

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return <button>{children}</button>;
};

export default PrimaryButton;
