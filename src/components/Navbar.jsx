import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f0f]/95 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a
          href="/"
          className="font-heading text-xl font-bold tracking-wide text-white"
        >
          Sams Live Events
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <a href="#about" className="hover:text-[var(--color-primary)]">
            About
          </a>
          <a href="#services" className="hover:text-[var(--color-primary)]">
            Services
          </a>
          <a href="#event-types" className="hover:text-[var(--color-primary)]">
            Expertise
          </a>
          <a
            href="/photography"
            className="hover:text-[var(--color-primary)]"
          >
            Photography
          </a>
          <a href="#contact" className="hover:text-[var(--color-primary)]">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
