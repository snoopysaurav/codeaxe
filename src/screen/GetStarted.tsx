import SectionHead from "@/components/SectionHead";
import getStartedOne from "@/assets/get-started-1.png";
import getStartedTwo from "@/assets/get-started-2.png";
import getStartedThree from "@/assets/get-started-3.png";
import { Copy } from "lucide-react";
import { toast, Toaster } from "sonner";
import OpenAppButton from "@/components/buttons/OpenAppButton";

const GetStarted = () => {
  function copyToClipboard() {
    navigator.clipboard.writeText("npm install -g exact-ai");
    toast.success("Copied to clipboard.", {
      duration: 2000,
    });
  }

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
              <img src={getStartedOne} className="w-full" />
            </figure>
            <div className="pt-6 px-3 flex flex-col gap-2">
              <span className="text-xl text-text-primary">
                Start in your terminal
              </span>
              <span className="text-base text-text-secondary">
                Powerful terminal integration. Works with your CLI tools
                alongside any workflow.
              </span>
              <div className="flex flex-col gap-2">
                <div className="w-full p-1 bg-bg- border border-border-emphasis rounded-md flex flex-row">
                  <div className="flex-2 flex items-center py-2 px-3 justify-between text-text-primary">
                    <div>
                      <span className="text-text-accent">npm</span> install -g
                      exact-ai
                    </div>
                    <div>
                      <button onClick={copyToClipboard}>
                        <Copy className="text-text-secondary cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </div>
                <span className="text-base text-text-secondary">
                  Or{" "}
                  <span className="underline cursor-pointer">
                    read the documentation
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <figure>
              <img src={getStartedTwo} className="w-full" />
            </figure>
            <div className="pt-6 px-3 flex flex-col gap-2">
              <span className="text-xl text-text-primary">
                Integrate your edior
              </span>
              <span className="text-base text-text-secondary">
                Native extensions for VS Code and JetBrains. Full context, right
                in your editor.
              </span>
            </div>
            <div className="pt-6 px-3 flex flex-row gap-3">
              <OpenAppButton text="VS Code" />
              <OpenAppButton text="Jet Brains" />
            </div>
          </div>
          <div className="flex flex-col">
            <figure>
              <img src={getStartedThree} className="w-full" />
            </figure>
            <div className="pt-6 px-3 flex flex-col gap-2">
              <span className="text-xl text-text-primary">Access anywhere</span>
              <span className="text-base text-text-secondary">
                Instant access from the browser. Great for quick reviews and
                exploring codebases.
              </span>
            </div>
            <div className="pt-6 px-3 flex flex-row gap-3">
              <OpenAppButton text="Open in browser" />
              <OpenAppButton text="Download App" icon={false} />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default GetStarted;
