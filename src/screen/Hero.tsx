import PrimaryButton from "@/components/buttons/PrimaryButton";
import bgImage from "@/assets/bgImage.png";
import heroImage from "@/assets/heroImg.png";
import companiesImage from "@/assets/logo-strip-container.png";

const Hero = () => {
  return (
    <div>
      <div className="max-w-360 p-12 mx-auto flex flex-col gap-8">
        <div className="max-w-200 mx-auto flex flex-col gap-5">
          <h1 className="text-text-primary text-center">
            The AI-native code editor that gets it exactly right.
          </h1>
          <p className="text-text-secondary text-xl text-center max-w-155 mx-auto">
            No approximation. No bloat. Exact understands your codebase at the
            structural level — and generates code that compiles, fits your
            architecture, and passes your tests the first time.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-3">
          <PrimaryButton classname="">Start Coding Free</PrimaryButton>
          <PrimaryButton classname="text-text-primary bg-transparent border border-border-default hover:opacity-75 hover:shadow-none!">
            Watch a 2-min demo
          </PrimaryButton>
        </div>
        <div className="mx-auto rounded-sm overflow-hidden relative">
          <img src={bgImage} className="w-full h-full" />
          <img
            src={heroImage}
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-8 py-12 px-45 justify-center items-center">
          <span className="text-xl text-text-primary">
            Trusted by engineers who can't afford to be wrong.
            {/* Clients image container */}
          </span>
          <div>
            <img src={companiesImage} alt="companies who trused us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
