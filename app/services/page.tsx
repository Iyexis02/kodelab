import AdditionalServices from './components/AdditionalServices';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Hero from './components/Hero';
import Process from './components/Process';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AdditionalServices />
      <Process />
      <Benefits />
      <CTA />
    </div>
  );
}
