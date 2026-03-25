import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const countries = [
    { name: "USA - English", code: "us", flag: "https://flagcdn.com/us.svg" },
    {
      name: "Canada - English",
      code: "ca",
      flag: "https://flagcdn.com/ca.svg",
    },
    {
      name: "Mexico - Español",
      code: "mx",
      flag: "https://flagcdn.com/mx.svg",
    },
  ];

  // Bahar click karne par dropdown band karne ke liye
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-20 max-w-7xl">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="/" className="block">
            <img
              src="/images/Book my Flight online logo png.png"
              alt="FlightsChannel Logo"
              className="h-30 md:h-55 w-auto object-contain"
            />
          </a>
        </div>

        {/* Right Section */}
        {/* <div className="flex items-center"> */}

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-7 font-semibold text-Lg text-blue-950 mr-10">
          <Link to="/my-booking">
            <a
              href="/search-booking"
              className="hover:text-blue-900  text-lg transition-colors"
            >
              My Booking
            </a>
          </Link>
          <a href="/blog" className="hover:text-blue-900 text-lg  transition-colors">
            Blogs
          </a>
          <Link to="/packages">
            <a
              href="/packages"
              className="hover:text-blue-900 transition-colors  text-lg"
            >
              Packages
            </a>
          </Link>
        </nav>

        <div className="flex items-center gap-4 ">
          {/* Phone Button */}
          <a
            href="tel:+1-844-609-9922"
            className="flex items-center gap-2 bg-[#f0f4ff] text-[#1e40af] px-4 py-2 rounded-full border hover:bg-blue-900 hover:text-white border-[#dbeafe]  transition-all group"
          >
            <div className="w-6 h-6 bg-[#2b59ff] rounded-full flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
              </svg>
            </div>
            <span className="font-bold text-[14px] md:text-[15px] text-black hover:text-white ">
              +1-844-609-9922
            </span>
          </a>

          <div className="h-8 w-[1px] bg-gray-200 hidden sm:block"></div>

          {/* Country Selector with Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity py-2"
            >
              <img
                src="https://flagcdn.com/us.svg"
                alt="Current"
                className="w-6 h-auto rounded-[2px] border border-gray-100"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>

            {/* Dropdown Box */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl z-[100] overflow-hidden animate-fadeIn">
                <div className="p-2 bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  Select Language & Region
                </div>
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 px-4 py-1 hover:bg-blue-50 cursor-pointer transition-colors border-b border-gray-50 last:border-none"
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-5 h-auto rounded-[1px]"
                    />
                    <span className="text-[13px] font-semibold text-gray-700">
                      {country.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* </div> */}
      </div>
    </header>
  );
};

export default Navbar;
