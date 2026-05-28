import SectionHead from "@/components/SectionHead";
import getStartedOne from "@/assets/get-started-1.png";
import getStartedTwo from "@/assets/get-started-2.png";
import getStartedThree from "@/assets/get-started-3.png";

const GetStarted = () => {
  return (
    <div>
      <div className="max-w-360 mx-auto p-12 flex flex-col gap-12">
        <div>
          <SectionHead
            labelText="GET STARTED"
            headingText="Three ways to start coding with Exact."
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {/* card section */}
          <div className="flex flex-col">
            <figure>
              <img src={getStartedOne} />
            </figure>
            <div className="pt-6 px-3 flex flex-col gap-2">
              <span className="text-xl text-text-primary">
                Start in your terminal
              </span>
              <span className="text-base text-text-secondary">
                Powerful terminal integration. Works with your CLI tools
                alongside any workflow.
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-6 px-3">
              <span className="text-base text-text-secondary">
                Or read the documentation
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <figure>
              <img src={getStartedTwo} />
            </figure>
          </div>
          <div className="flex flex-col">
            <figure>
              <img src={getStartedThree} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
