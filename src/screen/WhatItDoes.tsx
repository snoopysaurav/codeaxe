import SectionHead from "@/components/SectionHead";

const WhatItDoes = () => {
  return (
    <div>
      <div className="max-w-360 p-12 mx-auto">
        <div className="flex flex-col gap-12">
          <div>
            <SectionHead
              labelText="WHAT IT DOES"
              headingText="Exact reads your codebase.Then it writes code that fits it."
              className="max-w-175"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatItDoes;
