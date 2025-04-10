import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? 'bg-[#e5e2e0]/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/"
        className={` ${
          isScrolled ? 'text-gray-600' : 'text-[#e5e2e0]'
        } text-2xl font-semibold`}
        >
          {/* <img src="/logo.png" alt="Logo" className="h-8 w-auto" /> */}
          THE BIG E
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={` ${
              isScrolled ? 'text-gray-600' : 'text-[#e5e2e0]'
            } hover:text-gray-900`}
          >
            HOME
          </Link>
          {/* <a href="#" className="text-gray-600 hover:text-gray-900">
            HOMEOWNERS
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            ARCHITECT
          </a> */}
          <a
            href="products"
            className={` ${
              isScrolled ? 'text-gray-600' : 'text-[#e5e2e0]'
            } hover:text-gray-900`}
          >
            OUR PRODUCTS
          </a>
          <Link
            to="/projects"
            className={` ${
              isScrolled ? 'text-gray-600' : 'text-[#e5e2e0]'
            } hover:text-gray-900`}
          >
            OUR PROJECTS
          </Link>
        </div>
      </div>
    </nav>
  );
};
