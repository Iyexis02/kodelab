'use client';

import { ContactForm } from '../components/ContactForm';
import { ModalSlide } from '../components/ModalSlide';
import { type ReactNode, createContext, useContext, useState } from 'react';

import { ContactFormType } from '@/enums';

type ModalContextType = {
  openContactForm: (variant: ContactFormType) => void;
  closeModal: () => void;
  isModalOpen: boolean;
  modalContent: ContactFormType | null;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProviderProps = {
  children: ReactNode;
};

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ContactFormType | null>(null);

  const openContactForm = (variant: ContactFormType) => {
    switch (variant) {
      case ContactFormType.Careers:
        setModalContent(ContactFormType.Careers);
        break;
      case ContactFormType.Contact:
        setModalContent(ContactFormType.Contact);
        break;
      case ContactFormType.Project:
        setModalContent(ContactFormType.Project);
        break;
      case ContactFormType.Consultation:
        setModalContent(ContactFormType.Consultation);
        break;
      case ContactFormType.Default:
        setModalContent(ContactFormType.Default);
        break;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalContent(null), 300);
  };

  const handleFormSubmit = (data: any) => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  return (
    <ModalContext.Provider value={{ openContactForm, closeModal, isModalOpen, modalContent }}>
      {children}
      <ModalSlide isOpen={isModalOpen && modalContent !== null} onClose={closeModal} title="Contact Us">
        <ContactForm onSubmit={handleFormSubmit} isModal={true} />
      </ModalSlide>
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
