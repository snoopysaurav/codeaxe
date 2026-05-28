import Comparision from "@/screen/Comparision";
import Faqs from "@/screen/Faqs";
import Pricing from "@/screen/Pricing";

const Homepage = () => {
  return (
    <main>
      <section>
        <Pricing />
      </section>
      <section>
        <Comparision />
      </section>
      <section>
        <Faqs />
      </section>
    </main>
  );
};

export default Homepage;
