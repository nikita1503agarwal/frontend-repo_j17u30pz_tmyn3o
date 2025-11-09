import React from 'react';
import { X, Trash2 } from 'lucide-react';

const CartDrawer = ({ open, onClose, items, onIncrement, onDecrement, onRemove, onCheckout }) => {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-slate-900/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h3 className="text-lg font-semibold text-slate-900">Your Cart</h3>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-slate-100"><X size={18} /></button>
        </div>

        <div className="p-4 h-[calc(100%-160px)] overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-slate-500">Your cart is empty. Add some water packs to hydrate your day!</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-slate-900">{item.name} <span className="text-slate-500">• {item.size}</span></p>
                    <p className="text-sm text-slate-500">₹{item.price} each</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => onDecrement(item.id)} className="w-8 h-8 rounded-md border hover:bg-slate-50">-</button>
                    <span className="w-6 text-center">{item.qty}</span>
                    <button onClick={() => onIncrement(item.id)} className="w-8 h-8 rounded-md border hover:bg-slate-50">+</button>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">₹{item.price * item.qty}</p>
                    <button onClick={() => onRemove(item.id)} className="text-sm text-red-600 inline-flex items-center gap-1 mt-1"><Trash2 size={14}/> Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t p-4 bg-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-semibold text-slate-900">₹{total}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            Proceed to checkout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
