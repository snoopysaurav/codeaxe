import { faqs } from "@/seed/faqs";
import React from "react";
const Faqs = () => {
  return (
    <div className="w-full">
      <div className="max-w-360 mx-auto flex flex-col gap-12 p-12">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <div className="max-w-101.5 flex flex-col gap-4 text-text-primary">
              <h2>Questions engineers actually ask.</h2>
              <p className="max-w-80">
                Straight answers, no marketing. If you have one we haven't
                covered, reach us at hello@exact.ai
              </p>
            </div>
          </div>
          <div className="flex-2 text-text-primary">
            <ul>
              {faqs.map((faq) => (
                <React.Fragment key={faq.question}>
                  <h2>{faq.question}</h2>
                  <p>{faq.answer}</p>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Faqs;
