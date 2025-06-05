import Hero from './components/Hero';
import HowWeHelp from './components/HowWeHelp';
import Services from './components/Services';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-secondary">
      <Hero />
      <Services />
      <HowWeHelp />
    </div>
  );
}
