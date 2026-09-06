import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="BodyFuel Logo" className="h-10 w-10 rounded-full object-cover border-2 border-orange-500" />
            <span className="text-2xl font-black text-white tracking-tighter uppercase italic">
              Body<span className="text-orange-500">Fuel</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-300 hover:text-orange-500 font-bold transition-colors">Products</a>
            <a href="#benefits" className="text-gray-300 hover:text-orange-500 font-bold transition-colors">Benefits</a>
            <a href="#about" className="text-gray-300 hover:text-orange-500 font-bold transition-colors">Our Story</a>
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-full font-black uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105"
            >
              <ShoppingCart className="w-5 h-5" />
              Shop Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-orange-500 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-orange-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#products" className="block px-3 py-2 text-white font-bold hover:text-orange-500">Products</a>
            <a href="#benefits" className="block px-3 py-2 text-white font-bold hover:text-orange-500">Benefits</a>
            <a href="#about" className="block px-3 py-2 text-white font-bold hover:text-orange-500">Our Story</a>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full mt-4 bg-orange-500 text-black px-6 py-3 rounded-full font-black uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Shop Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
