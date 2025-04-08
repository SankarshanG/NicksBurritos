import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import nicksLogo from '../assets/nicks-logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-black shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center py-2">
            <img 
              src={nicksLogo}
              alt="Nick's Deli" 
              className="h-14 w-auto brightness-200 hover:brightness-125 transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" onClick={(e) => handleNavClick(e, '/')} className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">Home</a>
            <a href="/menu" onClick={(e) => handleNavClick(e, '/menu')} className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">Menu</a>
            <a href="/location" onClick={(e) => handleNavClick(e, '/location')} className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">Location</a>
            <a href="/reviews" onClick={(e) => handleNavClick(e, '/reviews')} className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">Reviews</a>
            <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">Contact</a>
            <div className="flex flex-col items-end">
              <a 
                href="tel:+15624316474" 
                className="text-yellow-400 font-semibold hover:text-white transition text-sm"
              >
                (562) 431-6474
              </a>
              <span className="text-gray-400">Call to place your order</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 py-3 space-y-4">
            <a 
              href="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className="block text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400"
            >
              Home
            </a>
            <a 
              href="/menu" 
              onClick={(e) => handleNavClick(e, '/menu')}
              className="block text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400"
            >
              Menu
            </a>
            <a 
              href="/location" 
              onClick={(e) => handleNavClick(e, '/location')}
              className="block text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400"
            >
              Location
            </a>
            <a 
              href="/reviews" 
              onClick={(e) => handleNavClick(e, '/reviews')}
              className="block text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400"
            >
              Reviews
            </a>
            <a 
              href="/contact" 
              onClick={(e) => handleNavClick(e, '/contact')}
              className="block text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400"
            >
              Contact
            </a>
            <div className="pt-2 border-t border-gray-800">
              <a 
                href="tel:+15624316474" 
                className="block text-yellow-400 font-semibold hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                (562) 431-6474
              </a>
              <span className="text-gray-400">Call to place your order</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}