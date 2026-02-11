import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on scroll (optional but clean UX)
  useEffect(() => {
    if (menuOpen) {
      const closeOnScroll = () => setMenuOpen(false);
      window.addEventListener("scroll", closeOnScroll);
      return () => window.removeEventListener("scroll", closeOnScroll);
    }
  }, [menuOpen]);

  const linkClasses =
    "block py-3 text-lg font-medium hover:text-[var(--color-primary)]";

  const logoSrc = `${import.meta.env.BASE_URL}images/Logo.jpg`;

  return (
    <header
      className={`fixed top-0 z-[9999] w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#0f0f0f]/95 backdrop-blur"
          : "bg-[#0f0f0f]/70 md:bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-6 md:py-4">
        
        {/* Logo */}
        <a href="/" className="inline-flex items-center">
          <img
            src={logoSrc}
            alt="Sams Live Events"
            className="h-8 w-auto md:h-10"
            loading="eager"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <a href="#" className="hover:text-[var(--color-primary)]">
            Home
          </a>
          <a href="#about" className="hover:text-[var(--color-primary)]">
            About
          </a>
          <a href="#services" className="hover:text-[var(--color-primary)]">
            Services
          </a>
          <a href="#event-types" className="hover:text-[var(--color-primary)]">
            Expertise
          </a>
          {/* <a
            href={`${import.meta.env.BASE_URL}photography`}
            className="hover:text-[var(--color-primary)]"
          >
            Photography
          </a> */}
          <a href="#contact" className="hover:text-[var(--color-primary)]">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden relative z-[10000] flex h-11 w-11 items-center justify-center rounded-md bg-black/70 text-white backdrop-blur"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-6 text-white">
          <a href="#" onClick={() => setMenuOpen(false)} className={linkClasses}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className={linkClasses}>
            About
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)} className={linkClasses}>
            Services
          </a>
          <a href="#event-types" onClick={() => setMenuOpen(false)} className={linkClasses}>
            Expertise
          </a>
          {/* <a href={`${import.meta.env.BASE_URL}photography`} onClick={() => setMenuOpen(false)} className={linkClasses}>
            Photography
          </a> */}
          <a href="#contact" onClick={() => setMenuOpen(false)} className={linkClasses}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
