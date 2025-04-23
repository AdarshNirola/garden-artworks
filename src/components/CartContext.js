'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('garden-artworks-cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      const newCart = existing
        ? prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...prev, { ...product, quantity }];
      
      localStorage.setItem('garden-artworks-cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(prev => {
      const updatedCart = prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: Math.max(1, newQuantity) } // Minimum 1
          : item
      );
      localStorage.setItem('garden-artworks-cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const newCart = prev.filter(item => item.id !== productId);
      localStorage.setItem('garden-artworks-cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);