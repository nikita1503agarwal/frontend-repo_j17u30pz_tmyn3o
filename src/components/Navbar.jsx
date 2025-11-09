import React from 'react';
import { Droplet, ShoppingCart, User } from 'lucide-react';

const Navbar = ({ onCartClick, cartCount }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-600 text-white">
              <Droplet size={20} />
            </div>
            <span className="font-semibold text-slate-800 text-lg">AquaSwift</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-600">
            <a href="#products" className="hover:text-slate-900 transition">Products</a>
            <a href="#track" className="hover:text-slate-900 transition">Track</a>
            <a href="#about" className="hover:text-slate-900 transition">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 transition">
              <User size={18} />
              Sign in
            </button>
            <button
              onClick={onCartClick}
              className="relative inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <ShoppingCart size={18} />
              <span className="text-sm font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs w-5 h-5 rounded-full grid place-items-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
