// src/app/products/[id]/page.js
import { products } from '@/data/products';
import ProductDetailsClient from './ProductDetailsClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export const dynamicParams = false; // Only allow pre-generated paths

export default function ProductDetailsPage({ params }) {
  // Convert ID to number safely
  const productId = Number(params.id);
  
  // Find product in static data
  const product = products.find(p => p.id === productId);

  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}