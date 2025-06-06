import { Users } from 'lucide-react';

import { ContactButton } from '@/app/components/ContactButton';
import { Button } from '@/app/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative">
        <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
          About
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
            Kodelab
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          We're a passionate team of developers, designers, and strategists dedicated to building exceptional digital
          experiences that drive business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ContactButton
            type="project"
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Start Your Project
          </ContactButton>
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl backdrop-blur-sm">
            <Users className="mr-2 w-4 md:w-5 h-4 md:h-5" />
            Meet Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
