import React from 'react';
import { CheckCircle2, CircleDashed, Truck } from 'lucide-react';

const steps = [
  { id: 'placed', label: 'Order Placed', icon: CircleDashed },
  { id: 'out', label: 'Out for Delivery', icon: Truck },
  { id: 'delivered', label: 'Delivered', icon: CheckCircle2 },
];

const OrderTracker = ({ status = 'placed' }) => {
  const currentIndex = steps.findIndex(s => s.id === status);
  return (
    <section id="track" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Track your order</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const active = index <= currentIndex;
            return (
              <li key={step.id} className={`rounded-xl border p-5 ${active ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{step.label}</p>
                    <p className="text-sm text-slate-500">{active ? 'Completed' : 'Pending'}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default OrderTracker;
