import BuiltDifferent from "@/screen/BuiltDifferent";
import Comparision from "@/screen/Comparision";
import Faqs from "@/screen/Faqs";
import GetStarted from "@/screen/GetStarted";
import Hero from "@/screen/Hero";
import Pricing from "@/screen/Pricing";
import WhatItDoes from "@/screen/WhatItDoes";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <BuiltDifferent />
      <WhatItDoes />
      <Comparision />
      <Pricing />
      <GetStarted />
      <Faqs />
    </main>
  );
};

export default Homepage;
