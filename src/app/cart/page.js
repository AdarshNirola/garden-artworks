'use client';
import { useCart } from '@/components/CartContext';
import Image from 'next/image';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
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
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-lg font-bold text-green-700">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          
          <div className="text-2xl font-bold text-right mt-8">
            Total: ${total.toFixed(2)}
          </div>
          
          <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}