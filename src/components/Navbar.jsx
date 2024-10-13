import { useState } from "react";
import { Link } from "react-scroll"; // or from 'react-router-dom' if using React Router

function Navbar({ bgColor }) {
  // State management for clicking toggle button
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex justify-between bg-black text-white items-center ${bgColor} py-2 px-4 md:px-14 z-10 sticky top-0`}>
      {/* Logo */}
      <div>
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
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
