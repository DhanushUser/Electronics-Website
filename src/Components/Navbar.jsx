import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky,setSticky] = useState(false);

  const navigate = useNavigate();


  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const handleCart = ()=>{
    navigate('cart');
  }

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={` ${sticky ? 'bg-blue-200 w-screen border-gray-200 lg:px-20 md:px-20 sm:px-0 fixed top-0 z-50 ' : "bg-transparent w-screen border-gray-200 lg:px-20 md:px-20 sm:px-0 fixed top-0 z-50 " } `}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            Apparel
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto my-auto transition-transform ${
            menuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col my-auto p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 sm:bg-blue-500 md:bg-transparent lg:bg-transparent  sm:text-white z-[1000]">
            <li>
              <AnchorLink href="#home" offset={50} className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0 md:dark:text-blue-500 sm:dark:text-white">
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#Section" offset={50} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Services
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#products" offset={50} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Products
              </AnchorLink>
            </li>
            <li onClick={handleCart}>
              <AnchorLink href="#cart" offset={50} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Cart
              </AnchorLink>
            </li>
            <li>
              <button className="bg-sky-600 text-white p-1 rounded text-small py-1 px-3 text-center">
                Visit Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
