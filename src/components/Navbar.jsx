import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <header className="bg-white shadow-md ">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <NavLink to={""} className="block text-teal-600" >
         
          <img src="" alt="" />
        </NavLink>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <NavLink className="text-gray-700 transition hover:text-gray-700/75" > Accueil </NavLink>
            </li>
            <li>
              <NavLink className="text-gray-700 transition hover:text-gray-700/75" > A Propos </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-700 transition hover:text-gray-700/75" > Nos services</NavLink>
            </li>

            <li>
              <NavLink className="text-gray-700 transition hover:text-gray-700/75" > Carrières </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-700 transition hover:text-gray-700/75" > Contact </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
        </div>
    );
};

export default Navbar;