import BuiltDifferent from "@/screen/BuiltDifferent";
import Comparision from "@/screen/Comparision";
import Faqs from "@/screen/Faqs";
import GetStarted from "@/screen/GetStarted";
import Hero from "@/screen/Hero";
import Pricing from "@/screen/Pricing";
import Testimonials from "@/screen/Testimonials";
import WhatItDoes from "@/screen/WhatItDoes";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <BuiltDifferent />
      <WhatItDoes />
      <Comparision />
      <Testimonials />
      <Pricing />
      <GetStarted />
      <Faqs />
    </main>
  );
};

export default Homepage;
