import { Star } from 'lucide-react';

import { Card, CardContent } from '@/app/components/ui/Card';

const Testimonials = () => {
  const clientTestimonials = [
    {
      name: 'Dr. Marija Kovač',
      company: 'MediCare Plus',
      role: 'Medical Director',
      content:
        'The patient management system transformed our clinic operations. The team understood our complex requirements and delivered beyond expectations.',
      rating: 5,
      avatar: '/placeholder.svg?height=60&width=60',
      project: 'Healthcare Platform',
    },
    {
      name: 'Petar Novak',
      company: 'EcoShop Croatia',
      role: 'CEO',
      content:
        'Our online sales increased by 200% after launching the new e-commerce platform. The carbon footprint feature sets us apart from competitors.',
      rating: 5,
      avatar: '/placeholder.svg?height=60&width=60',
      project: 'E-commerce Platform',
    },
    {
      name: 'Ana Jurić',
      company: 'Zagreb Tourism Board',
      role: 'Digital Marketing Manager',
      content:
        'The CityGuide app has been a huge success. Tourists love the AR features and offline maps. Downloads exceeded our expectations.',
      rating: 5,
      avatar: '/placeholder.svg?height=60&width=60',
      project: 'Mobile Application',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from businesses that have transformed their operations with our custom solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {clientTestimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">{'"{testimonial.content}"'}</p>
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar || '/placeholder.svg'}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full inline-block">
                  {testimonial.project}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
