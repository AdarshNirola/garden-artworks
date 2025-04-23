// src/components/Navbar.js
'use client';
import Link from 'next/link';
import { useCart } from './CartContext';
import { useState } from 'react';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cart } = useCart();
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Collection', href: '/collection' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    setSearchQuery('');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-green-700">
            Garden Artworks
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 flex-1 max-w-xl mx-4">
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search flowers..."
                  className="w-full px-4 py-2 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
              </div>
            </form>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-700 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/cart" className="flex items-center gap-1">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
              <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-700"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearch} className="px-2 pt-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search flowers..."
                  className="w-full px-4 py-2 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
              </div>
            </form>

            <div className="mt-2 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/cart"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCartIcon className="h-5 w-5" />
                Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Add to your existing CartContext imports:
import { ShoppingCartIcon } from '@heroicons/react/24/outline';