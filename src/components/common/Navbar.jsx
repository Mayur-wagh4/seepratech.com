import { ChevronDown, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../constants/content"; // Importing SERVICES array
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false); // Track dropdown visibility
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to toggle dropdown on click
  const toggleDropdown = () => {
    setActiveDropdown((prev) => !prev);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-neutral-900/95 shadow-soft backdrop-blur-sm"
          : "bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo Section */}
          <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
            <img
              src="/logo.png"
              alt="Logo"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="nav-link flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full -left-4 w-48 py-2 mt-2 bg-white dark:bg-neutral-800 rounded-xl shadow-soft transition-all duration-200 ${
                  activeDropdown
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.title.toLowerCase().replace(" ", "-")}`}
                    className="block px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link to="/contact">
              <Button onClick={() => console.log('Get Started clicked')}>Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-4">
            <Link to="/" className="mobile-nav-link">
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="space-y-2">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="flex items-center justify-between px-4 text-neutral-600 dark:text-neutral-300"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    mobileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDropdownOpen && (
                <div className="pl-4 space-y-2">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.title.toLowerCase().replace(" ", "-")}`}
                      className="mobile-nav-link"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/portfolio" className="mobile-nav-link">
              Portfolio
            </Link>
            <Link to="/contact" className="mobile-nav-link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
