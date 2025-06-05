import Navigation from './Navigation';
import { Code } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b bg-white backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-dark">Kodelab</span>
          </div>
          <Navigation />
        </nav>
      </div>
    </header>
  );
};

export default Header;
