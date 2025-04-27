
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif mb-4">Luxe<span className="text-gold">Haven</span></h3>
            <p className="text-gray-300 mb-4">Experience luxury and comfort in our premier destinations worldwide. Your journey to extraordinary experiences begins here.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Our Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Destinations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <address className="text-gray-300 not-italic">
              <p className="mb-2">1234 Luxury Avenue</p>
              <p className="mb-2">Paradise City, PC 56789</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p className="mb-2">Email: info@luxehaven.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LuxeHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
