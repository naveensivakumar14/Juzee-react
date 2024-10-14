import { useState } from "react";
import { Link } from "react-scroll"; // or from 'react-router-dom' if using React Router

import orangeIcon from "../assets/images/orange-slice.png"

function Navbar({ bgColor }) {
  // State management for clicking toggle button
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex justify-between bg-black text-white items-center ${bgColor} py-4 px-4 md:px-14 z-10 sticky top-0`}>
      {/* Logo */}
      <div className="flex items-center">
        <img className="size-8" src={orangeIcon} alt="icon" />
        <h1 className="text-2xl font-bold py-2 px-4">Juzee</h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex md:gap-14 md:text-lg font-semibold">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="bestseller" smooth={true} duration={500}>Top</Link></li>
        <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Desktop Nav Icons */}
      <div className="hidden md:flex md:gap-6">
        {/* Profile Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        {/* Bag Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </div>

      {/* Toggle Button for Mobile Menu */}
      <button onClick={toggleMenu} className="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-bold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-16 right-0 h-screen min-w-[50%] bg-black text-white flex flex-col items-center gap-4 font-semibold text-lg transition-transform duration-500 ease-in-out transform 
        ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <ul className="w-full">
          <li className="list-none w-full text-center p-2"><Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
          <li className="list-none w-full text-center p-2"><Link to="bestseller" smooth={true} duration={500} onClick={toggleMenu}>Top</Link></li>
          <li className="list-none w-full text-center p-2"><Link to="products" smooth={true} duration={500} onClick={toggleMenu}>Products</Link></li>
          <li className="list-none w-full text-center p-2"><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
