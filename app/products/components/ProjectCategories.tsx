import { BarChart3, Globe, ShoppingCart, Smartphone } from 'lucide-react';

import { Card, CardContent } from '@/app/components/ui/Card';

const ProjectCategories = () => {
  const projectCategories = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Custom web platforms and business applications tailored to your specific needs.',
      count: '15+ Projects',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing, inventory management, and analytics.',
      count: '8+ Projects',
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Cross-platform mobile apps for iOS and Android with native performance.',
      count: '12+ Projects',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboards',
      description: 'Data visualization and business intelligence solutions for informed decision-making.',
      count: '6+ Projects',
    },
  ];
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">What We Build</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From simple websites to complex enterprise applications, we create custom solutions for every business need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projectCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 text-center cursor-pointer">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{category.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">{category.description}</p>
                  <span className="text-emerald-600 font-semibold text-sm">{category.count}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;
