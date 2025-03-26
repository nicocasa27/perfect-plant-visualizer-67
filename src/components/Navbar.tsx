
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full border-b border-dark/20 py-5">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-7 w-7">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <path d="M12 4L4 12L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-medium text-sm">SAROVI</span>
            <span className="font-medium text-sm">MEDICAL AI</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-item uppercase text-sm">Home</Link>
          <div className="relative group">
            <Link to="/services" className="nav-item uppercase text-sm flex items-center">
              Services
              <span className="ml-1">+</span>
            </Link>
          </div>
          <Link to="/blog" className="nav-item uppercase text-sm">Blog</Link>
          <Link to="/about" className="nav-item uppercase text-sm">About</Link>
          <Link to="/contact" className="nav-item uppercase text-sm">Contact</Link>
        </nav>
        
        <Link to="/appointment" className="hidden md:flex items-center text-sm font-medium uppercase">
          Book Appointment
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
