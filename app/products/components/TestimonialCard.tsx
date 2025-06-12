import { Star } from 'lucide-react';

import { Card, CardContent } from '@/app/components/ui/Card';
import { Testimonial } from '@/types';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed mb-6 italic">{'"' + testimonial.content + '"'}</p>
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
  );
};

export default TestimonialCard;
