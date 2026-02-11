import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#F7F4EA] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center">
            <a href="/SAM-S-Live-Events/" className="flex items-center">
            <img
                src="/SAM-S-Live-Events/images/Logo.jpg"
                alt="Samsmedia Logo"
                className="h-10 w-auto object-contain"
            />
            </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          {["Home", "Services", "Albums", "Films", "Contact"].map(
            (item) => (
              <li
                key={item}
                className={`cursor-pointer transition ${
                  scrolled ? "text-gray-800" : "text-white"
                } hover:text-[#B87C4C]`}
              >
                {item}
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F7F4EA] shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {["Home", "Services", "Albums", "Films", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="text-gray-800 font-medium hover:text-[#B87C4C]"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
