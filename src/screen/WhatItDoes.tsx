import SectionHead from "@/components/SectionHead";
import whatItDoesOne from "@/assets/what-is-does-1.png";
import whatItDoesTwo from "@/assets/what-it-does-2.png";
import whatItDoesThree from "@/assets/what-it-does-3.png";

const WhatItDoes = () => {
  return (
    <div>
      <div className="max-w-360 p-12 mx-auto">
        <div className="flex flex-col gap-12">
          <div>
            <SectionHead
              labelText="WHAT IT DOES"
              headingText="Exact reads your codebase. Then it writes code that fits it."
              className="max-w-140"
            />
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <figure>
                <img src={whatItDoesOne} />
              </figure>
              <div className="flex flex-col gap-2 py-2">
                <span className="text-xl text-text-primary">
                  Clone and activate your AI agent
                </span>
                <p className="text-base text-text-secondary max-w-165">
                  Install the GitHub or GitLab app and Together indexes your
                  codebase instantly. Your code stays in your infra — Together
                  reads it, never stores it.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <figure>
                  <img src={whatItDoesTwo} className="rounded-md" />
                </figure>
                <div className="flex flex-col gap-2 py-2">
                  <span className="text-xl text-text-primary">
                    Code that ships with tests already written.
                  </span>
                  <p className="text-base text-text-secondary max-w-125">
                    Exact detects your test framework (Jest, Vitest, Pytest, Go
                    test) and generates matching test files alongside every new
                    function.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <figure>
                  <img src={whatItDoesThree} className="rounded-md" />
                </figure>
                <div className="flex flex-col gap-2 py-2">
                  <span className="text-xl text-text-primary">
                    Clone and activate your AI agent
                  </span>
                  <p className="text-base text-text-secondary max-w-125">
                    Exact detects your test framework (Jest, Vitest, Pytest, Go
                    test) and generates matching test files alongside every new
                    function.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatItDoes;
