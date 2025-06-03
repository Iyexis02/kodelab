import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Dream bigger.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
            {"We'll build it."}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          We build scalable, modern web and mobile solutions using proven technologies that drive your business forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-background-primary px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Book a free consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-background-primary px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            {"See what we've built"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
