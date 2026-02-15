import Hero from '@/components/landing/hero';
import ProductGrid from '@/components/landing/product-grid';
import Navbar from './components/common/navbar';
import React from 'react';

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="space-y-10 px-4">
        <Hero />
        <ProductGrid />
      </div>
    </React.Fragment>
  );
}
