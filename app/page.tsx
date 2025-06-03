import Header from './components/Header';
import Hero from './components/Hero';
import HowWeHelp from './components/HowWeHelp';
import Technologies from './components/Technologies';
import Footer from './components/ui/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-secondary">
      <Header />
      <Hero />
      <Technologies />
      <HowWeHelp />
      <Footer />
    </div>
  );
}
