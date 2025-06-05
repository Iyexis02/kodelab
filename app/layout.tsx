import Header from './components/Header';
import Footer from './components/ui/Footer';
import { ModalProvider } from './contexts/ModalContext';
import './globals.css';

import ApolloWrapper from '@/lib/apollo/provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ModalProvider>
        <body className="font-glober">
          <header className="border-b bg-white backdrop-blur-sm sticky top-0 z-50">
            <Header />
          </header>
          <ApolloWrapper>{children}</ApolloWrapper>
          <footer className="bg-dark text-white py-12">
            <Footer />
          </footer>
        </body>
      </ModalProvider>
    </html>
  );
}
