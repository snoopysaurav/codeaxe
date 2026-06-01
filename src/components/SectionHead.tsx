import { cn } from "@/lib/utils";

type propsType = {
  labelText: string;
  headingText: string;
  className?: string;
};

const SectionHead = ({ labelText, headingText, className }: propsType) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm text-text-secondary">// {labelText}</span>
      <h2 className={cn("max-w-135 text-text-primary", className)}>
        {headingText}
      </h2>
    </div>
  );
};

export default SectionHead;
