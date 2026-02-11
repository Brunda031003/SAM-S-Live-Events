import { useState, useEffect } from 'react';
import element1 from '../Element1.png';

export default function Landing() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5); // Parallax depth
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className="relative text-center text-white px-6"
        style={{ transform: `translateY(-${offset}px)` }}
      >
        <img
          src={element1}
          alt="Element"
          className="mx-auto mb-0 h-20 md:h-28 object-contain"
        />
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-wide">
          Samsmedia
        </h1>
        <p className="mt-4 text-lg md:text-xl tracking-widest uppercase text-[#EBD9D1]">
          Capturing Love. Creating Memories.
        </p>
      </div>
    </section>
  );
}
