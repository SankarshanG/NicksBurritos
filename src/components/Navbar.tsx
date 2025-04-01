import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-orange-900/95 p-6 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-white hover:text-orange-300 transition"
        >
          <UtensilsCrossed className="h-8 w-8" />
          <span className="text-xl font-bold">Nick's Deli</span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-orange-900/95 p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-white hover:text-orange-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/location" 
                className="text-white hover:text-orange-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </Link>
              <Link 
                to="/reviews" 
                className="text-white hover:text-orange-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-orange-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-orange-300 transition">
            Menu
          </Link>
          <Link to="/location" className="text-white hover:text-orange-300 transition">
            Location
          </Link>
          <Link to="/reviews" className="text-white hover:text-orange-300 transition">
            Reviews
          </Link>
          <Link to="/contact" className="text-white hover:text-orange-300 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}