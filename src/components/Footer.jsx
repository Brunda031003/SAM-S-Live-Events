import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-sm text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        
        {/* Left: Logo */}
        <div className="font-heading text-base font-semibold text-white">
          Sams Live Events
        </div>

        {/* Right: Copyright & Credit */}
        <div className="flex flex-col items-center gap-1 md:flex-row md:gap-3">
          <span>© 2026 All rights reserved.</span>
          <span className="hidden md:inline">|</span>
          <a
            href="https://instagram.com/firstecho"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-[var(--color-primary)]"
          >
            Designed & Developed by <span className="font-medium">First Echo</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
