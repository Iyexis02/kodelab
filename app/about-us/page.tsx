import CTA from './components/CTA';
import ContactInfo from './components/ContactInfo';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Story from './components/Story';
import Timeline from './components/Timeline';
import Values from './components/Values';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Story />
      <Values />
      <Timeline />
      <Mission />
      <ContactInfo />
      <CTA />
    </div>
  );
}
