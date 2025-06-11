import { Calendar } from 'lucide-react';

import { ContactButton } from '@/app/components/ContactButton';
import { ContactButtonSize, ContactFormType } from '@/enums';

const ProjectCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your Custom Solution?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {"Let's discuss your project requirements and create a custom solution that drives your business forward."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ContactButton
            type={ContactFormType.Project}
            size={ContactButtonSize.Large}
            className=" bg-emerald-600 hover:bg-emerald-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Start Your Project
          </ContactButton>
          <ContactButton
            size={ContactButtonSize.Large}
            className=" bg-emerald-600 hover:bg-emerald-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Calendar className="mr-2 w-4 md:w-5 h-4 md:h-5" />
            Schedule Consultation
          </ContactButton>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;
