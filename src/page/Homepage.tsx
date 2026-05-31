import BuiltDifferent from "@/screen/BuiltDifferent";
import Comparision from "@/screen/Comparision";
import Faqs from "@/screen/Faqs";
import GetStarted from "@/screen/GetStarted";
import Hero from "@/screen/Hero";
import Pricing from "@/screen/Pricing";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <BuiltDifferent />
      <Comparision />
      <Pricing />
      <GetStarted />
      <Faqs />
    </main>
  );
};

export default Homepage;
