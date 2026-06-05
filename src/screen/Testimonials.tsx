import SectionHead from "@/components/SectionHead";
import { testimonials } from "@/seed/testimonials";
import avatar from "@/assets/alex-carter.jpg";

const Testimonials = () => {
  return (
    <div>
      <div className="max-w-360 mx-auto p-12">
        <div className="flex flex-col gap-12">
          <div>
            <SectionHead
              labelText="Testimonials"
              headingText="What engineers say when the AI finally gets it right."
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {testimonials.map((testimonial) => (
              <div className="bg-bg-surface text-text-primary rounded-md p-6 flex flex-col gap-6">
                <div className="text-xl text-text-primary">
                  "{testimonial.quote}"
                </div>
                <div className="border-t border-border-default pt-5">
                  <div className="flex flex-row items-baseline-last gap-5">
                    <figure className="h-10 w-10 rounded-md overflow-hidden">
                      <img src={avatar} alt="alex carter" className="w-full" />
                    </figure>
                    <div className="flex flex-col gap-1">
                      <span className="text-base text-text-primary">
                        {testimonial.name}
                      </span>
                      <span className="text-sm text-text-secondary">
                        {testimonial.role},{testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
