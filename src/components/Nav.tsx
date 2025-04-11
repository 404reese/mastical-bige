import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

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
        isScrolled ? 'bg-[#292929]/80 backdrop-blur-sm text-[#e5e2e0]' : 'md:bg-transparent bg-[#292929] text-[#e5e2e0]'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/"
        className={` ${
          isScrolled ? 'text-[#e5e2e0]' : 'text-[#e5e2e0]'
        } text-2xl font-semibold`}
        >
          {/* <img src="/logo.png" alt="Logo" className="h-8 w-auto" /> */}
          THE BIG E
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#e5e2e0] hover:text-gray-900 focus:outline-none focus:shadow-outline"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm0 7h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1zm0 7h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={` ${
              isScrolled ? 'text-[#e5e2e0]' : 'text-[#e5e2e0]'
            } hover:text-gray-900`}
          >
            HOME
          </Link>
          <div className="relative">
            <button
              onClick={() => setShowProductsDropdown(!showProductsDropdown)}
              className={`${
                isScrolled ? 'text-[#e5e2e0]' : 'text-[#e5e2e0]'
              } hover:text-gray-900 flex items-center gap-1 relative`}
            >
              OUR PRODUCTS
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  showProductsDropdown ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {showProductsDropdown && (
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-[#292929]/95 rounded-md shadow-lg py-1"
              >
                <Link
                  to="/products/category1"
                  className="block px-4 py-2 text-sm text-[#e5e2e0] hover:bg-[#393939]"
                >
                  Category 1
                </Link>
                <Link
                  to="/products/category2"
                  className="block px-4 py-2 text-sm text-[#e5e2e0] hover:bg-[#393939]"
                >
                  Category 2
                </Link>
                <Link
                  to="/products/category3"
                  className="block px-4 py-2 text-sm text-[#e5e2e0] hover:bg-[#393939]"
                >
                  Category 3
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/projects"
            className={` ${
              isScrolled ? 'text-[#e5e2e0]' : 'text-[#e5e2e0]'
            } hover:text-gray-900`}
          >
            OUR PROJECTS
          </Link>
          <Link
            to="/homeowners"
            className={` ${
              isScrolled ? 'text-[#e5e2e0]' : 'text-[#e5e2e0]'
            } hover:text-gray-900`}
          >
            HOME OWNERS
          </Link>
        </div>
      </div>
      <div className={`md:hidden ${open ? 'block' : 'hidden'} bg-[#292929]`}>
        <Link
          to="/"
          className="block py-2 px-4 text-sm hover:bg-gray-200 text-[#e5e2e0]"
        >
          HOME
        </Link>
        <div className="relative">
          <button
            onClick={() => setShowProductsDropdown(!showProductsDropdown)}
            className="w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-200 text-[#e5e2e0]"
          >
            OUR PRODUCTS
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                showProductsDropdown ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {showProductsDropdown && (
            <div className="bg-[#393939]">
              <Link
                to="/products/category1"
                className="block py-2 px-8 text-sm hover:bg-gray-200 text-[#e5e2e0]"
              >
                Category 1
              </Link>
              <Link
                to="/products/category2"
                className="block py-2 px-8 text-sm hover:bg-gray-200 text-[#e5e2e0]"
              >
                Category 2
              </Link>
              <Link
                to="/products/category3"
                className="block py-2 px-8 text-sm hover:bg-gray-200 text-[#e5e2e0]"
              >
                Category 3
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/projects"
          className="block py-2 px-4 text-sm hover:bg-gray-200 text-[#e5e2e0]"
        >
          OUR PROJECTS
        </Link>
        <Link
          to="/homeowners"
          className="block py-2 px-4 text-sm hover:bg-gray-200 text-[#e5e2e0]"
        >
          HOME OWNERS
        </Link>
      </div>
    </nav>
  );
};
