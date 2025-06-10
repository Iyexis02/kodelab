import React from 'react';

const Story = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '6', label: 'Team Members' },
    { number: '5', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Founded in 2020 with a simple mission: to help businesses thrive in the digital age through innovative
              technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Building the Future, One Project at a Time
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Kodelab was born from a shared passion for technology and a desire to create meaningful digital
                  solutions. Our founders, Ana and Marko, recognized the growing need for businesses to have a strong
                  digital presence and decided to build a company that could bridge that gap.
                </p>
                <p>
                  {
                    "What started as a small team of two has grown into a diverse group of talented professionals, each bringing unique skills and perspectives to every project. We've had the privilege of working with startups, established businesses, and everything in between."
                  }
                </p>
                <p>
                  {
                    "Today, we continue to push the boundaries of what's possible in web and mobile development, always staying ahead of the curve with the latest technologies and best practices."
                  }
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</div>
                      <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
