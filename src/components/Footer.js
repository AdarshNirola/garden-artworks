'use client';
import Link from 'next/link';
import { FaLeaf } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <FaLeaf className="text-green-400 text-3xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Garden Artworks</h3>
            <p className="text-gray-400 text-sm">
              123 Flower Lane<br />
              Green City, GC 12345
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-green-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-green-400">
                <FaFacebook className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400">
                <FaInstagram className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400">
                <FaTwitter className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Garden Artworks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}