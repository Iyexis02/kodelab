import Hero from './components/Hero';
import HowWeHelp from './components/HowWeHelp';
import Technologies from './components/Technologies';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-secondary">
      <Hero />
      <Technologies />
      <HowWeHelp />
    </div>
  );
}
