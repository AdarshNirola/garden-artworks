// src/app/products/[id]/ProductDetailsClient.js
'use client';
import { useCart } from '@/components/CartContext';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductDetailsClient({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl font-semibold text-green-700">
            ${product.price.toFixed(2)}
          </p>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, e.target.value))}
              className="w-20 px-3 py-2 border rounded"
            />
            <button
              onClick={() => {
                addToCart(product, quantity);
                toast.success(`${quantity} ${product.name} added to cart`);
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>

          <div className="pt-6 border-t">
            <div className="flex flex-col gap-2 text-gray-600">
              <p><span className="font-semibold">Category:</span> {product.category}</p>
              <p><span className="font-semibold">Care Instructions:</span> {product.careInstructions || 'Low maintenance, water weekly'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  