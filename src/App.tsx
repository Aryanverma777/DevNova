
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ClientsSection } from './components/ClientsSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ReviewsSection />
      <ClientsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
