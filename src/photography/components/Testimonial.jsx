import { useEffect, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Riya & Arjun",
      review:
        "Every photo felt alive. Samsmedia didn’t just capture moments, they captured emotions. Looking at our wedding album still gives us goosebumps.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Neha & Kunal",
      review:
        "From candid smiles to grand moments, everything was documented beautifully. The team blended in like family.",
      image:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Aditi & Rohit",
      review:
        "Our wedding film feels like a movie. Samsmedia has an incredible eye for storytelling and detail.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section
      className="relative py-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1723203812312-0b0ad8c142b6?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-20">
          Love Stories, In Their Words
        </h2>

        {/* Card Container */}
        <div className="relative h-[420px] flex items-center justify-center">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`absolute w-full max-w-xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 transition-all duration-1000 ease-in-out
                ${
                  index === current
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-20 scale-95"
                }
              `}
            >
              {/* Couple Photo */}
              <div className="flex justify-center -mt-20 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>

              {/* Review */}
              <p className="text-gray-700 text-lg leading-relaxed">
                “{item.review}”
              </p>

              {/* Name */}
              <h4 className="mt-6 text-xl font-semibold text-gray-800">
                {item.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-16 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                current === index
                  ? "bg-[#B87C4C]"
                  : "bg-white/40"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
