import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/images/logo_dippis_garden_1784535903245.jpg';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Track Order', path: '/track' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#0f0402]/80 backdrop-blur-md sticky top-0 z-50 shrink-0 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-shadow group-hover:shadow-[0_0_25px_rgba(255,78,0,0.4)] bg-[#fdfbf7] flex items-center justify-center shrink-0">
                <img src={logoImg} alt="DG Logo" className="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" onError={(e) => e.currentTarget.style.opacity = '0'} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold tracking-tighter text-white leading-none">DIPPIS<span className="text-[#ff4e00]">GARDEN</span></span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-white ${
                  isActive(link.path) ? 'text-[#ffcd00] border-b-2 border-[#ffcd00] py-1' : 'text-white/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link to="/cart" className="relative flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-colors text-white font-bold">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm">Cart {cartCount > 0 ? `(${cartCount})` : ''}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-white/70 hover:text-white transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/4 -translate-y-1/4 bg-[#ffcd00] rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/70 hover:text-white focus:outline-none transition-colors"
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
            className="md:hidden bg-[#1a0a05] border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-bold uppercase tracking-widest ${
                    isActive(link.path)
                      ? 'bg-white/5 text-[#ffcd00]'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
