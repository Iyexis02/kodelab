'use client';

import { useModal } from '../contexts/ModalContext';
import { Button } from './ui/Button';
import { ArrowRight, Briefcase, Code, Home, Mail, Menu, Phone, Users, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ContactFormType } from '@/enums';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navClass = 'text-dark hover:text-dark transition-colors';

  type NavItem = {
    label: string;
    url: string;
    icon: React.ElementType;
  };

  const navConfig: NavItem[] = [
    { label: 'Home', url: '/', icon: Home },
    { label: 'Services', url: '/services', icon: Code },
    { label: 'Team', url: '/team', icon: Users },
    { label: 'Products', url: '/products', icon: Briefcase },
    { label: 'About us', url: '/about-us', icon: Briefcase },
  ];

  const baseNavItems = navConfig.map(({ label, url }) => ({ label, url }));

  const mobileNavItems = navConfig;
  const pathname = usePathname();
  const { openContactForm } = useModal();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    openContactForm(ContactFormType.Default);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="hidden md:flex items-center space-x-8">
        {baseNavItems.map((navItem: LayoutLink, index: number) => {
          const href = navItem.url;
          const isSelected = pathname === href;
          return (
            <Link
              key={navItem.label + '-' + index}
              href={href}
              className={navClass + (isSelected ? ' border-b-2 border-emerald-500 pb-1' : '')}>
              {navItem.label}
            </Link>
          );
        })}
        <Button
          onClick={() => openContactForm(ContactFormType.Default)}
          size="sm"
          className="bg-emerald-600 hover:bg-emerald-700 text-background-primary px-4 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          Contact us
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
      <>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          aria-label="Open navigation menu">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-all duration-300 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        <div
          className={`fixed inset-y-0 left-0 z-[9999] w-80 max-w-[85vw] h-[100dvh] bg-white shadow-2xl transform transition-all duration-300 ease-in-out md:hidden flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Kodelab</span>
                <span className="block text-sm text-white/80">d.o.o</span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close navigation menu">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          <nav className="flex-1 px-6 py-8 bg-white overflow-y-auto">
            <ul className="space-y-3">
              {mobileNavItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname === item.url;
                return (
                  <li key={item.label + '-mobile-' + index}>
                    <Link
                      href={item.url}
                      onClick={handleNavClick}
                      className={`flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-200 group ${
                        isActive
                          ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg transform scale-[1.02]'
                          : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 hover:shadow-md'
                      }`}>
                      <Icon
                        className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${
                          isActive ? 'text-white' : 'text-gray-500 group-hover:text-emerald-600'
                        }`}
                      />
                      <span className="font-medium text-lg">{item.label}</span>
                      {isActive && <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Quick Info</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📧 info@kodelab.com</p>
                <p>📍 Zagreb, Croatia</p>
                <p>🕒 Mon-Fri 9:00-17:00</p>
              </div>
            </div>
          </nav>
          <div className="p-6 border-t bg-gradient-to-r from-gray-50 to-emerald-50 shadow-inner">
            <div className="space-y-4">
              <Button
                onClick={handleContactClick}
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-6 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <Mail className="mr-3 w-5 h-5" />
                Contact Us
              </Button>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Ready to start your project?</p>
                <a
                  href="tel:+385123456789"
                  className="flex items-center justify-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors font-medium">
                  <Phone className="w-4 h-4" />
                  <span>+385 12 345 6789</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Navigation;
