'use client';
import { useCart } from '@/components/CartContext';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    setQuantities(Object.fromEntries(
      cart.map(item => [item.id, item.quantity])
    ));
  }, [cart]);

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, newQuantity)
    }));
    updateQuantity(productId, Math.max(1, newQuantity));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Your Garden Cart</h1>
      
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div className="space-y-6">
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-6 bg-white p-4 rounded-lg shadow-sm">
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <input
                    type="number"
                    min="1"
                    value={quantities[item.id] || 1}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="w-20 px-2 py-1 border rounded text-center"
                  />
                  <p className="text-lg font-bold text-green-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 px-3 py-1"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-2xl font-bold text-right mt-8">
            Total: ${total.toFixed(2)}
          </div>
          
          <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
            Checkout Now
          </button>
        </div>
      )}
    </div>
  );
}