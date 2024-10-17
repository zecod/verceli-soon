import { AIfeatures } from "./components/features/AIfeatures";
import { Features } from "./components/features/Features";
import { Languages } from "./components/features/Languages";
import { SSMLDemo } from "./components/features/Ssmldemo";
import { StepsFeature } from "./components/features/SteapsFeature";
import { CTA } from "./components/footer/CTA";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Isolation } from "./components/isolation/Isolation";
import NavBar from "./components/NavBar";
import Usecase from "./components/usecase/Usecase";

const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <Isolation />
      <Features />
      <StepsFeature />
      <SSMLDemo />
      <Languages />
      <AIfeatures />
      <Usecase />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
