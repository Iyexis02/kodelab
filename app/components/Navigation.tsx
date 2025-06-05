'use client';

import { useModal } from '../contexts/ModalContext';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const navClass = 'text-dark hover:text-dark transition-colors';

  const navItems: LayoutLink[] = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Team', url: '/team' },
    { label: 'Products', url: '/products' },
    { label: 'About us', url: '/about-us' },
  ];

  const pathname = usePathname();

  const { openContactForm } = useModal();

  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((navItem: LayoutLink, index: number) => {
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
        onClick={openContactForm}
        size="sm"
        className="bg-emerald-600 hover:bg-emerald-700 text-background-primary px-4 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        Contact us
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </div>
  );
};

export default Navigation;
