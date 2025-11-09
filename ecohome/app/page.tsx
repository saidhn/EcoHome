import FeaturedModels from "./models/featuerModels";
import Hero from "./Components/hero";
import NavBar from "./Components/Navbar";
import WhyUs from "./Components/whyus";
import Footer from "./Components/footer";
import Partner  from "./Components/partner";
export default function Home() {
  return (
    <>
    <NavBar />
    <Hero />
    <FeaturedModels />
    <WhyUs />
    <Partner />
    <Footer />
    </>
  );
}
