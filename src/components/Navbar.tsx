import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import nicksLogo from '../assets/nicks-logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-xl py-2' 
          : 'bg-black py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center">
            <img 
              src={nicksLogo}
              alt="Nick's Deli" 
              className={`w-auto brightness-200 hover:brightness-125 transition-all duration-500 ${
                isScrolled ? 'h-10' : 'h-14'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" onClick={(e) => handleNavClick(e, '/')} className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">Home</a>
            <a href="/menu" onClick={(e) => handleNavClick(e, '/menu')} className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">Menu</a>
            <a href="/location" onClick={(e) => handleNavClick(e, '/location')} className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">Location</a>
            <a href="/reviews" onClick={(e) => handleNavClick(e, '/reviews')} className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">Reviews</a>
            <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">Contact</a>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+15625985072" 
                className="text-yellow-400 hover:text-white transition-colors text-sm font-medium"
              >
                Seal Beach: (562) 598-5072
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="tel:+15627957766" 
                className="text-yellow-400 hover:text-white transition-colors text-sm font-medium"
              >
                Los Alamitos: (562) 795-7766
              </a>
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
              <div className="flex flex-col gap-2">
                <a 
                  href="tel:+15625985072" 
                  className="text-yellow-400 font-medium hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Seal Beach: (562) 598-5072
                </a>
                <a 
                  href="tel:+15627957766" 
                  className="text-yellow-400 font-medium hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Los Alamitos: (562) 795-7766
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}