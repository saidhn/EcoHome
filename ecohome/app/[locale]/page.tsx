import FeaturedModels from "./models/featuerModels";
import Hero from "./Components/hero";
import NavBar from "./Components/Navbar";
import WhyUs from "./Components/whyus";
import Footer from "./Components/footer";
import Partner  from "./Components/partner";
import TestTranslation from "./Components/TestTranslation";

export default function Home() {
  return (
    <>
    <TestTranslation />
    <NavBar />
    <Hero />
    <FeaturedModels />
    <WhyUs />
    <Partner />
    <Footer />
    </>
  );
}
