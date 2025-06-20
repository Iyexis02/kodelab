import { Code } from 'lucide-react';
import Link from 'next/link';

import { LayoutLink } from '@/types';

const Footer = () => {
  const footerLinks: LayoutLink[] = [
    { label: 'Privacy Policy', url: '/' },
    { label: 'Portfolio', url: '/products' },
    { label: 'Meet the Team', url: '/team' },
  ];
  const urlClass = 'text-background-secondary hover:text-emerald-400 transition-colors';

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Kodelab d.o.o</span>
          </div>
          <div className="text-center md:text-left">
            <p className="text-background-secondary mb-2">© 2025 Dream Bigger. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              {footerLinks.map((footerLink: LayoutLink, index: number) => {
                return (
                  <Link key={footerLink.label + '-' + index} href={footerLink.url} className={urlClass}>
                    {footerLink.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
