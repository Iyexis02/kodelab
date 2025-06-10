'use client';

import { useModal } from '../contexts/ModalContext';
import { Button } from './ui/Button';

import { ContactButtonSize, ContactButtonVariant, ContactFormType } from '@/enums';

type ContactButtonProps = {
  variant?: ContactButtonVariant;
  size?: ContactButtonSize;
  className?: string;
  children?: React.ReactNode;
  type?: ContactFormType;
};

export function ContactButton({
  variant = ContactButtonVariant.Default,
  size = ContactButtonSize.Default,
  className = '',
  children,
  type = ContactFormType.Contact,
}: ContactButtonProps) {
  const { openContactForm } = useModal();

  const getButtonText = () => {
    if (children) return children;

    switch (type) {
      case ContactFormType.Careers:
        return 'Join Our Team';
      case ContactFormType.Project:
        return 'Start a Project';
      default:
        return 'Contact Us';
    }
  };

  return (
    <Button variant={variant} size={size} onClick={() => openContactForm(type)} className={className}>
      {getButtonText()}
    </Button>
  );
}
