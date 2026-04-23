import WebsiteFeaturesSection from "./components/Aboutsection";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import HeroSection from "./components/Herosection";
import SolutionsSection from "./components/InternshipSection";
import GrowBusinessSection from "./components/JobPlacementSection";
import SpeedyDigitalSection from "./components/StudyAbroadSection";
import ActNowSection from "./components/SuccessStories";
import TrustedBrandsSection from "./components/TrainingSection";

const App = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', system-ui, sans-serif; overflow-x: hidden; background: #fff; }
        input::placeholder { color: rgba(255,255,255,0.55); }
        a { cursor: pointer; }
      `}</style>

<Header/>
      <HeroSection />
      <TrustedBrandsSection />
      <SolutionsSection />
      <GrowBusinessSection />
      <SpeedyDigitalSection />
      <WebsiteFeaturesSection />
      <ActNowSection />
      <FooterSection />
    </>
  );
};

export default App;