import PrimaryButton from "@/components/buttons/PrimaryButton";

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
          <PrimaryButton>Start Coding Free</PrimaryButton>
          <PrimaryButton classname="text-text-primary bg-transparent border border-border-default hover:opacity-75 hover:shadow-none!">
            Watch a 2-min demo
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
