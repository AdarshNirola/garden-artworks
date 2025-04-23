'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartContext';
import { toast } from 'react-hot-toast';

export default function ProductCard({ product }) {
  const { addToCart, cart } = useCart();
  
  const currentQuantity = cart.find(item => item.id === product.id)?.quantity || 0;

  const handleAddToCart = () => {
    const existingItem = cart.find(item => item.id === product.id);
    const newQuantity = existingItem ? existingItem.quantity + 1 : 1;
    
    addToCart(product);
    
    toast.success(
      `${product.name} added to cart (${newQuantity} in total)`,
      {
        icon: '🌸',
        duration: 2000,
        style: {
          background: '#4CAF50',
          color: '#fff',
        },
      }
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      </Link>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-700">${product.price}</span>
          <button
        onClick={handleAddToCart}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
        </div>
      </div>
    </div>
  );
}