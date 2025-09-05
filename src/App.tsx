import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FloatingWidget from './components/FloatingWidget';
import FeatureSection from './components/FeatureSection';
import Roadmap from './components/RoadMap';
import Footer from './components/Footer';
import Tokenomics from './components/Tokenomic';
import { benefitsFeatures, servicesFeatures, activitiesFeatures } from './data/features';


function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-16">
      <Header />

      <HeroSection />
      <AboutSection />
      <FloatingWidget />
      <FeatureSection
        title="Why OKBURN ?"
        accentWord="OKBURN"
        subtitle="OKBURN lets you burn tokens to earn points, unlocking future rewards, whitelists, and airdrops — all with full on-chain transparency on XLayer."
        features={benefitsFeatures}
        backgroundColor="white"
      />
      
      <FeatureSection
        title="How It Works ?"
        accentWord="Works"
        subtitle="Burn tokens in the vault, earn points, and track everything transparently on the dashboard."
        features={servicesFeatures}
        backgroundColor="light"
      />
      
      <FeatureSection
        title="Core Products"
        accentWord="Products"
        subtitle="Burn Vault, Points, Explorer, and Burn Pools — transparent burns, rewards, tracking, and fundraising."
        features={activitiesFeatures}
        backgroundColor="white"
      />
      <Tokenomics />
      
      <Roadmap />

      <Footer />
    </div>
  );
  
}

export default App;