
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from '../components/Navbar';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gold-light">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-4 text-dark">404</h1>
          <p className="text-xl text-dark/80 mb-6">Page not found</p>
          <Link to="/" className="nav-item inline-block px-6 py-3 border border-dark/20 hover:border-dark/40 transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
