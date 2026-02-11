import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function ContactSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`
        relative py-32 z-30
        transition-all duration-1000 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading Block */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-[#B87C4C] mb-6">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-serif leading-tight text-white">
            Let’s Talk About Your <br />
            <span className="text-[#B87C4C]">Next Event</span>
          </h2>
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-white/30"></div>

        {/* Contact Info Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 text-white">

          {/* Email */}
          <a
            href="mailto:contact@samsmedia.in"
            className="flex items-center gap-3 text-white/80 hover:text-[#B87C4C] transition"
          >
            <span className="text-[#B87C4C]">✉</span>
            contact@samsmedia.in
          </a>

          {/* Phone */}
          <a
            href="tel:+919999999999"
            className="flex items-center gap-3 text-white/80 hover:text-[#B87C4C] transition"
          >
            <span className="text-[#B87C4C]">📞</span>
            +91 99999 99999
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/samsmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/80 hover:text-[#B87C4C] transition"
          >
            <span className="text-[#B87C4C]">📷</span>
            @samsmedia
          </a>

          {/* CTA */}
          <Link
            to="/"
            className="flex items-center gap-2 text-[#B87C4C] font-semibold hover:gap-4 transition-all"
          >
            Sam's Live Events →
          </Link>
        </div>
      </div>
    </section>
  );
}
