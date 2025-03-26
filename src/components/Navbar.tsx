
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full py-5">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-7 w-7 flex items-center justify-center">
            <span className="text-xl">𐰆𐱃</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-medium text-sm">SAROVI</span>
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
        
        <a href="https://test.sarovi.pl" className="hidden md:flex items-center text-sm font-medium uppercase bg-dark text-white px-4 py-2 rounded-lg shadow-sm hover:bg-dark/90 transition-colors">
          Get Started
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
        
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
