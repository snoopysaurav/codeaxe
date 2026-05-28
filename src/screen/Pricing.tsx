import ActionButton from "@/components/buttons/ActionButton";
import SectionHead from "@/components/SectionHead";
import { pricingPlans } from "@/seed/pricingPlans";
import { CircleCheck, X } from "lucide-react";
const Pricing = () => {
  return (
    <div>
      <div className="flex flex-col gap-14 max-w-360 mx-auto p-12">
        <div>
          <SectionHead
            labelText="PRICING"
            headingText="Start free. Scale when it proves itself."
          />
        </div>
        {/* Pricing Section */}
        <div className="flex justify-center items-center gap-3">
          {pricingPlans.map((plan) => (
            <div className="flex-1 rounded-md p-6 bg-bg-surface" key={plan.id}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xl text-text-primary">
                    {plan.title}
                  </span>
                  <span className="text-base text-text-secondary">
                    {plan.description}
                  </span>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row gap-1 items-end">
                    <span className="text-text-primary text-5xl">
                      {plan.price}
                    </span>
                    <span className="mb-1.5 text-text-secondary text-sm">
                      {plan.duration}
                    </span>
                  </div>
                  <ActionButton
                    className={{
                      "bg-transparent border border-border-emphasis text-text-primary hover:shadow-none! hover:opacity-50 transition-all duration-100 ease-in":
                        plan.id !== 2,
                    }}
                  >
                    {plan.buttonText}
                  </ActionButton>
                  <hr className="border-border-default" />
                  {/* Features section */}
                  <div className="flex flex-col gap-4">
                    <span className="text-sm uppercase text-text-secondary">
                      FEATURES INCLUDED
                    </span>
                    <span>
                      <ul className="flex flex-col gap-4 text-text-primary">
                        {plan.features.map((feat, index) => (
                          <li
                            key={index}
                            className="flex flex-row items-center gap-2"
                          >
                            <CircleCheck
                              size={16}
                              className="text-text-accent"
                            />{" "}
                            {feat}
                          </li>
                        ))}
                        {plan.unavailableFeatures?.map((feat, index) => (
                          <li
                            key={index}
                            className="flex flex-row items-center gap-2 text-text-secondary"
                          >
                            <X size={16} />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
