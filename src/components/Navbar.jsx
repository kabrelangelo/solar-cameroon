import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <NavLink to="/" className="block text-teal-600">
              <img src="" alt="Logo" className="h-8 w-auto" />
            </NavLink>
          </div>

          {/* Hamburger button for mobile view */}
          <div className="md:hidden">
            <button
              className="text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    to="/"
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    Accueil
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    À Propos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    Nos Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/careers"
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    Carrières
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <nav aria-label="Global">
              <ul className="flex flex-col items-start gap-4 p-4 text-sm">
                <li>
                  <NavLink
                    to="/"
                    className="block w-full text-gray-700 transition hover:text-gray-700/75"
                    onClick={() => setIsOpen(false)}
                  >
                    Accueil
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="block w-full text-gray-700 transition hover:text-gray-700/75"
                    onClick={() => setIsOpen(false)}
                  >
                    À Propos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className="block w-full text-gray-700 transition hover:text-gray-700/75"
                    onClick={() => setIsOpen(false)}
                  >
                    Nos Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/careers"
                    className="block w-full text-gray-700 transition hover:text-gray-700/75"
                    onClick={() => setIsOpen(false)}
                  >
                    Carrières
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="block w-full text-gray-700 transition hover:text-gray-700/75"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
