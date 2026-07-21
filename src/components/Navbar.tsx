import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/images/dippis_garden_logo_final.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Track Order', path: '/track' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-gradient-to-r from-[#ffcd00] via-[#ffb000] to-[#ff9500] sticky top-0 z-50 shrink-0 border-b border-black/10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="h-16 w-32 md:w-40 flex items-center justify-center shrink-0">
                <img src={logoImg} alt="DG Logo" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-black font-serif italic tracking-normal text-black leading-none">DIPPI GARDEN</span>
                <span className="text-[10px] font-bold text-black/70 tracking-[0.2em] uppercase mt-1">Taste The Perfection</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-black ${
                  isActive(link.path) ? 'text-black border-b-2 border-black py-1' : 'text-black/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link to="/cart" className="relative flex items-center gap-2 bg-black/5 hover:bg-black/10 px-4 py-2 rounded-full border border-black/10 transition-colors text-black font-bold">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm">Cart {cartCount > 0 ? `(${cartCount})` : ''}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-black/70 hover:text-black transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black/70 hover:text-black focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#ffcd00] border-t border-black/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-bold uppercase tracking-widest ${
                    isActive(link.path)
                      ? 'bg-black/10 text-black'
                      : 'text-black/70 hover:bg-black/5 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Running Strip */}
      <div className="bg-[#0F0A08] text-[#ffcd00] py-2 overflow-hidden border-b border-white/10 relative">
        <div className="whitespace-nowrap flex animate-[slide_30s_linear_infinite]">
          <style>{`
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div className="flex items-center">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8 text-xs font-bold uppercase tracking-widest shrink-0">
                🎉 10% discount on first 10 customer orders
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
