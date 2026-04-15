import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Hours from "./components/Hours";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(): JSX.Element {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Hours />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );
}
