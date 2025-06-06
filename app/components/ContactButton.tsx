'use client';

import { useModal } from '../contexts/ModalContext';
import { Button } from './ui/Button';

interface ContactButtonProps {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children?: React.ReactNode;
  type?: 'contact' | 'careers' | 'project';
}

export function ContactButton({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  type = 'contact',
}: ContactButtonProps) {
  const { openContactForm } = useModal();

  const getButtonText = () => {
    if (children) return children;

    switch (type) {
      case 'careers':
        return 'Join Our Team';
      case 'project':
        return 'Start a Project';
      default:
        return 'Contact Us';
    }
  };

  return (
    <Button variant={variant} size={size} onClick={openContactForm} className={className}>
      {getButtonText()}
    </Button>
  );
}
