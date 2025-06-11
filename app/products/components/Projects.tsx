import ProjectList from './ProjectList';

const Projects = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {
              "Explore some of our most successful custom development projects and the impact they've made for our clients."
            }
          </p>
        </div>
        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;
