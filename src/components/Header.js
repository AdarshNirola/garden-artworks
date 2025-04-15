'use client';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from './CartContext';

export default function Header() {
  const { cart } = useCart();
  
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-700">
          Garden Artworks
        </Link>
        
        <Link href="/cart" className="flex items-center gap-1">
          <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
          <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        </Link>
      </nav>
    </header>
  );
}