import Capabilities from './components/Capabilities';
import ProjectCTA from './components/ProjectCTA';
import ProjectCategories from './components/ProjectCategories';
import ProjectHero from './components/ProjectHero';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProjectHero />
      <ProjectCategories />
      <Projects />
      <Capabilities />
      <Testimonials />
      <ProjectCTA />
    </div>
  );
}
