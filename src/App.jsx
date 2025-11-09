import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import OrderTracker from './components/OrderTracker';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [orderStatus, setOrderStatus] = useState('placed');

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.qty, 0), [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const increment = (id) => setCart(prev => prev.map(i => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const decrement = (id) => setCart(prev => prev.flatMap(i => (i.id === id ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i])));
  const removeItem = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const detectLocation = async () => {
    if (!('geolocation' in navigator)) {
      alert('Geolocation not supported. Please enter your address during checkout.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        alert(`Detected location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}. Nearby suppliers will be shown at checkout.`);
      },
      () => alert('Could not access your location. Please allow permission or enter address manually.')
    );
  };

  const checkout = () => {
    if (cart.length === 0) return;
    setOrderStatus('out');
    setCart([]);
    setCartOpen(false);
    setTimeout(() => setOrderStatus('delivered'), 4000);
    alert('Checkout simulated. Integrate Razorpay/Stripe and backend orders for production.');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onCartClick={() => setCartOpen(true)} cartCount={cartCount} />
      <main>
        <Hero onDetectLocation={detectLocation} />
        <ProductGrid onAddToCart={addToCart} />
        <OrderTracker status={orderStatus} />
        <section id="about" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold mb-4">Why AquaSwift?</h3>
            <p className="text-slate-600 leading-relaxed">
              Built for households and offices, AquaSwift brings trusted brands, fast delivery, and an effortless ordering experience. Save addresses, track orders live, and reorder in seconds.
            </p>
          </div>
        </section>
      </main>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onIncrement={increment}
        onDecrement={decrement}
        onRemove={removeItem}
        onCheckout={checkout}
      />

      <footer className="py-8 border-t text-center text-slate-500">
        <p>© {new Date().getFullYear()} AquaSwift — Purified water, delivered right.</p>
      </footer>
    </div>
  );
}

export default App;
