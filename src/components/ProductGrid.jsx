import React from 'react';
import { Droplet, Plus } from 'lucide-react';

const PRODUCTS = [
  { id: 'bisleri-1l', name: 'Bisleri', size: '1L Bottle', price: 25, img: 'https://images.unsplash.com/photo-1527998257557-080d21981b84?q=80&w=1200&auto=format&fit=crop' },
  { id: 'bisleri-20l', name: 'Bisleri', size: '20L Can', price: 80, img: 'https://images.unsplash.com/photo-1519669661123-1f1c1268d97b?q=80&w=1200&auto=format&fit=crop' },
  { id: 'kinley-1l', name: 'Kinley', size: '1L Bottle', price: 22, img: 'https://images.unsplash.com/photo-1582183974662-c1f8edc0e1af?q=80&w=1200&auto=format&fit=crop' },
  { id: 'aquafina-500', name: 'Aquafina', size: '500ml', price: 15, img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1200&auto=format&fit=crop' },
];

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="aspect-video overflow-hidden bg-slate-50">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-900 font-semibold">{product.name}</p>
            <p className="text-slate-500 text-sm">{product.size}</p>
          </div>
          <span className="text-blue-600 font-semibold">₹{product.price}</span>
        </div>
        <button
          onClick={() => onAdd(product)}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <Plus size={16} /> Add to cart
        </button>
      </div>
    </div>
  );
};

const ProductGrid = ({ onAddToCart }) => {
  return (
    <section id="products" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 rounded-lg bg-blue-100 text-blue-700"><Droplet size={18} /></div>
          <h2 className="text-2xl font-bold text-slate-900">Popular water packs</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map(p => (
            <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
