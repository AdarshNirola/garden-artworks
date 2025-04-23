import { CartProvider } from '@/components/CartContext';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import { Toaster } from 'react-hot-toast';
import '@/styles/globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Garden Artworks - Floral Elegance',
  description: 'Premium floral arrangements and garden artworks',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <CartProvider>
          <Navbar />
          <main className="container mx-auto p-4">
            {children}
          </main>
          <Footer/>
          {/* Add Toaster here */}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#4CAF50',
                color: '#fff',
              },
              iconTheme: {
                primary: '#fff',
                secondary: '#4CAF50',
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}