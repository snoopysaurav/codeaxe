import SectionHead from "@/components/SectionHead";
import builtDifferentOne from "@/assets/builtDifferent1.png";
import builtDifferentTwo from "@/assets/builtDifferent2.png";

const BuiltDifferent = () => {
  return (
    <div className="">
      <div className="max-w-360 mx-auto p-12">
        <div className="flex flex-col items-start gap-12">
          <div>
            <SectionHead
              labelText="Built Different"
              headingText="Not a smarter autocomplete. A structural understanding of your code"
            />
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row gap-6 w-full">
            <div className="flex-1 flex flex-col border border-border-default rounded-md bg-bg-surface">
              <figure className="w-full flex justify-center items-center py-12 px-14">
                <img src={builtDifferentOne} />
              </figure>
              <div className="p-8 flex flex-col gap-3">
                <span className="text-text-primary text-xl">
                  Clone and activate your AI agent
                </span>
                <span className="text-text-secondary max-w-125">
                  Install the GitHub or GitLab app and Together indexes your
                  codebase instantly. Your code stays in your infra — Together
                  reads it, never stores it.
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col border border-border-default rounded-md bg-bg-surface">
              <figure className="w-full flex justify-center items-center py-12 px-14">
                <img src={builtDifferentTwo} />
              </figure>
              <div className="p-8 flex flex-col gap-3">
                <span className="text-text-primary text-xl">
                  Review and apply AI suggestions
                </span>
                <span className="text-text-secondary max-w-125">
                  Together posts structured inline comments with context from
                  your whole codebase — not just the diff. Review its reasoning,
                  apply the fix, or push back in the thread.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltDifferent;
