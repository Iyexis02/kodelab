'use client';

import { ContactForm } from '../components/ContactForm';
import { ModalSlide } from '../components/ModalSlide';
import { type ReactNode, createContext, useContext, useState } from 'react';

interface ModalContextType {
  openContactForm: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProviderProps = {
  children: ReactNode;
};

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<'contact' | null>(null);

  const openContactForm = () => {
    setModalContent('contact');
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
    <ModalContext.Provider value={{ openContactForm, closeModal, isModalOpen }}>
      {children}
      <ModalSlide isOpen={isModalOpen && modalContent === 'contact'} onClose={closeModal} title="Contact Us">
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
