import { CartProvider } from '@/components/CartContext';
import Header from '@/components/Header';
import '@/styles/globals.css';

export const metadata = {
  title: 'Garden Artworks - Floral Elegance',
  description: 'Premium floral arrangements and garden artworks',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <CartProvider>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}