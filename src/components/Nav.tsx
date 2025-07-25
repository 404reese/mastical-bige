import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

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
              onClick={() => setShowProduct(!showProduct)}
              className={`${
                isScrolled ? 'text-[#e5e2e0]' : 'text-[#e5e2e0]'
              } hover:text-gray-900 flex items-center gap-1 relative`}
            >
              OUR PRODUCT       <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  showProduct ? 'rotate-180' : ''
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
            {showProduct && (
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-[#292929]/95 rounded-md shadow-lg py-1"
              >
                <Link
                  to="/products"
                  className="block w-full text-left px-4 py-2 text-sm text-[#e5e2e0] hover:bg-[#393939]"
                  onClick={() => setShowProduct(false)}
                >
                  All Products
                </Link>
                <Link
                  to="/products/solid-wood-floors"
                  className="block w-full text-left px-4 py-2 text-sm text-[#e5e2e0] hover:bg-[#393939]"
                  onClick={() => setShowProduct(false)}
                >
                  Solid Wood Floors
                </Link>
                <Link
                  to="/products/engineered-wood-floors"
                  className="block w-full text-left px-4 py-2 text-sm text-[#e5e2e0] hover:bg-[#393939]"
                  onClick={() => setShowProduct(false)}
                >
                  Engineered Wood Floors
                </Link>
                <Link
                  to="/parquet-flooring"
                  className="block w-full text-left px-4 py-2 text-sm text-[#e5e2e0] hover:bg-[#393939]"
                  onClick={() => setShowProduct(false)}
                >
                  Parquet Wooden Flooring
                </Link>
                
                <Link
                  to="/deck-flooring"
                  className="block w-full text-left px-4 py-2 text-sm text-[#e5e2e0] hover:bg-[#393939]"
                  onClick={() => setShowProduct(false)}
                >
                  Deck Flooring
                </Link>
                <Link
                  to="/wall-cladding-soffit"
                  className="block w-full text-left px-4 py-2 text-sm text-[#e5e2e0] hover:bg-[#393939]"
                  onClick={() => setShowProduct(false)}
                >
                  Indoor and Outdoor Wall Cladding & Soffit
                </Link>
                <Link
                  to="/lumber-panels"
                  className="block w-full text-left px-4 py-2 text-sm text-[#e5e2e0] hover:bg-[#393939]"
                  onClick={() => setShowProduct(false)}
                >
                  Lumber & Panels
                </Link>
                <Link
                  to="/laminate-flooring"
                  className="block w-full text-left px-4 py-2 text-sm text-[#e5e2e0] hover:bg-[#393939]"
                  onClick={() => setShowProduct(false)}
                >
                  Laminate Flooring
                </Link>
                <Link
                  to="/spc-flooring"
                  className="block w-full text-left px-4 py-2 text-sm text-[#e5e2e0] hover:bg-[#393939]"
                  onClick={() => setShowProduct(false)}
                >
                  SPC Flooring
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
            onClick={() => setShowProduct(!showProduct)}
            className="w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-200 text-[#e5e2e0]"
          >
            OUR PRODUCT     <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                showProduct ? 'rotate-180' : ''
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
          {showProduct && (
            <div className="bg-[#393939]">
              <Link
                to="/products"
                className="block w-full text-left px-8 py-2 text-sm hover:bg-gray-200 text-[#e5e2e0]"
                onClick={() => setShowProduct(false)}
              >
                All Products
              </Link>
              <Link
                to="/products/solid-wood-floors"
                className="block w-full text-left px-8 py-2 text-sm hover:bg-gray-200 text-[#e5e2e0]"
                onClick={() => setShowProduct(false)}
              >
                Solid Wood Floors
              </Link>
              <Link
                to="/products/engineered-wood-floors"
                className="block w-full text-left px-8 py-2 text-sm hover:bg-gray-200 text-[#e5e2e0]"
                onClick={() => setShowProduct(false)}
              >
                Engineered Wood Floors
              </Link>
              <Link
                to="/parquet-flooring"
                className="block w-full text-left px-8 py-2 text-sm hover:bg-gray-200 text-[#e5e2e0]"
                onClick={() => setShowProduct(false)}
              >
                Parquet Wooden Flooring
              </Link>
              <Link
                to="/deck-flooring"
                className="block w-full text-left px-8 py-2 text-sm hover:bg-gray-200 text-[#e5e2e0]"
                onClick={() => setShowProduct(false)}
              >
                Deck Flooring
              </Link>
              <Link
                to="/wall-cladding-soffit"
                className="block w-full text-left px-8 py-2 text-sm hover:bg-gray-200 text-[#e5e2e0]"
                onClick={() => setShowProduct(false)}
              >
                Indoor and Outdoor Wall Cladding & Soffit
              </Link>
              <Link
                to="/lumber-panels"
                className="block w-full text-left px-8 py-2 text-sm hover:bg-gray-200 text-[#e5e2e0]"
                onClick={() => setShowProduct(false)}
              >
                Lumber & Panels
              </Link>
              <Link
                to="/laminate-flooring"
                className="block w-full text-left px-8 py-2 text-sm hover:bg-gray-200 text-[#e5e2e0]"
                onClick={() => setShowProduct(false)}
              >
                Laminate Flooring
              </Link>
              <Link
                to="/spc-flooring"
                className="block w-full text-left px-8 py-2 text-sm hover:bg-gray-200 text-[#e5e2e0]"
                onClick={() => setShowProduct(false)}
              >
                SPC Flooring
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
