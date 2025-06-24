import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Sun, Moon, Menu, X } from "lucide-react";
import LogoClair from "../assets/Images/LogoClair.png";
import LogoNight from "../assets/Images/LogoNight.png";

const Header = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`w-full ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} py-4 fixed top-0 left-0 z-50 font-worksans`}>
      <div className="w-full mx-auto flex items-center justify-between px-4 md:px-8 lg:px-[150px]">

        {/* Logo dynamique selon le thème */}
        <img
          src={theme === 'light' ? LogoClair : LogoNight}
          alt="Logo"
          className="w-[120px] h-auto object-contain"
        />

        {/* Navigation desktop */}
        <nav className="hidden lg:flex ml-[10%]">
          <ul className="flex flex-row gap-2 font-medium text-[16px] items-center whitespace-nowrap">
            <li className="relative cursor-pointer ">
              <NavLink to="/" className={({ isActive }) => (isActive ? "" : "px-5")}>Home</NavLink>
            </li>
            <li className="relative cursor-pointer ">
              <NavLink to="/Blog" className={({ isActive }) => (isActive ? "" : "px-5")}>Blog</NavLink>
            </li>
            <li className="relative cursor-pointer ">
              <NavLink to="/singlepost" className={({ isActive }) => (isActive ? "" : "px-5")}>Single Post</NavLink>
            </li>
            <li className="relative cursor-pointer ">
              <NavLink to="/page" className={({ isActive }) => (isActive ? "" : "px-5")}>Pages</NavLink>
            </li>
            <li className="relative cursor-pointer ">
              <NavLink to="/Contact" className={({ isActive }) => (isActive ? "" : "px-5")}>Contact</NavLink>
            </li>

            {/* Barre de recherche */}
            <div
              className={`hidden lg:flex justify-between items-center px-4 py-2 rounded-[7px] min-w-[200px] md:ml-[10%] ${
                theme === 'light' ? 'bg-[#F4F4F5] text-[#A1A1AA]' : 'bg-[#242535] text-[#A1A1AA]'
              }`}
            >
              <span className="text-[16px]">Search</span>
              <Search className={`w-5 h-5 ${theme === 'light' ? 'text-gray-600' : 'text-white'}`} />
            </div>
          </ul>
        </nav>

        {/* Toggle Theme (desktop) */}
        <button
          onClick={toggleTheme}
          className="hidden lg:flex items-center ml-[10%] p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? (
            <Moon className="text-gray-800" size={20} />
          ) : (
            <Sun className="text-yellow-400" size={20} />
          )}
        </button>

        {/* Mobile menu & toggle theme */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="mr-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? (
              <Moon className="text-gray-800" size={20} />
            ) : (
              <Sun className="text-yellow-400" size={20} />
            )}
          </button>

          <button onClick={toggleMenu} className="light:text-gray-800 dark:text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden fixed top-[64px] left-0 w-full z-40 px-6 py-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${theme === 'light' ? 'bg-gray-800' : 'bg-gray-800'}`}
      >
        <ul className={`flex flex-col font-medium text-[16px] gap-6 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${theme === 'light' ? ' text-black' : ' text-white'}`}>
          <li className="text-white">
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="text-white">
            <Link to="/Blog" onClick={toggleMenu}>Blog</Link>
          </li>
          <li className="text-white">
            <Link to="/singlepost" onClick={toggleMenu}>Single Posts</Link>
          </li>
          
          <li className="text-white">
            <Link to="/page" onClick={toggleMenu}>Pages</Link>
          </li>
          <li className="text-white">
            <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
