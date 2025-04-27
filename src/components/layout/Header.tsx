import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  return <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-4 bg-sky-100">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="font-serif text-2xl font-bold text-navy">Luxe<span className="text-gold">Haven</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#hero" className="text-charcoal hover:text-gold transition-colors">Home</a>
            </li>
            <li>
              <a href="#features" className="text-charcoal hover:text-gold transition-colors">Features</a>
            </li>
            <li className="relative">
              <button className="flex items-center text-charcoal hover:text-gold transition-colors" onClick={toggleDropdown}>
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              {/* Dropdown Menu */}
              {dropdownOpen && <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 min-w-[200px]">
                  <a href="#" className="block px-4 py-2 text-charcoal hover:bg-softGray transition-colors">Service One</a>
                  <a href="#" className="block px-4 py-2 text-charcoal hover:bg-softGray transition-colors">Service Two</a>
                  <a href="#" className="block px-4 py-2 text-charcoal hover:bg-softGray transition-colors">Service Three</a>
                </div>}
            </li>
            <li>
              <a href="#contact" className="text-charcoal hover:text-gold transition-colors">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-navy" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="lg:hidden bg-white">
          <div className="container mx-auto py-4">
            <ul className="space-y-4">
              <li>
                <a href="#hero" className="block text-charcoal hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="block text-charcoal hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>
                  Features
                </a>
              </li>
              <li>
                <button className="flex items-center text-charcoal hover:text-gold transition-colors w-full text-left" onClick={toggleDropdown}>
                  Services <ChevronDown size={16} className="ml-1" />
                </button>
                {dropdownOpen && <div className="pl-4 mt-2 space-y-2">
                    <a href="#" className="block text-charcoal hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>
                      Service One
                    </a>
                    <a href="#" className="block text-charcoal hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>
                      Service Two
                    </a>
                    <a href="#" className="block text-charcoal hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>
                      Service Three
                    </a>
                  </div>}
              </li>
              <li>
                <a href="#contact" className="block text-charcoal hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>}
    </header>;
};
export default Header;