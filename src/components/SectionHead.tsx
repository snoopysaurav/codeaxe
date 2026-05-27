type propsType = {
  labelText: string;
  headingText: string;
};

const SectionHead = ({ labelText, headingText }: propsType) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm text-text-secondary">// {labelText}</span>
      <h2 className="max-w-100.5 text-text-primary">{headingText}</h2>
    </div>
  );
};

export default SectionHead;
