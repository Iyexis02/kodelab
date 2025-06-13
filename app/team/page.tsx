import { ContactButton } from '../components/ContactButton';
import EmployeeList from './components/EmployeeList';

import { ContactButtonSize, ContactButtonVariant, ContactFormType } from '@/enums';

const TeamPage = () => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative">
          <h1 className="text-4xl/normal md:text-6xl/normal font-bold mb-6 leading-tight py-2">
            Meet Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Amazing Team
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Behind every great solution is a passionate team of engineers, designers, and strategists dedicated to
            turning your vision into reality.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <EmployeeList />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to work with us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {"Let's discuss your project and see how our team can help bring your vision to life."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactButton
              type={ContactFormType.Project}
              size={ContactButtonSize.Large}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Start a Project
            </ContactButton>
            <ContactButton
              variant={ContactButtonVariant.Outline}
              size={ContactButtonSize.Large}
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-xl">
              Schedule a Call
            </ContactButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
