import { useEffect, useRef, useState } from "react";

export default function TestimonialsCollage() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-24 md:min-h-screen overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-12 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
          Loved by Couples
        </h2>
        <p className="mt-4 text-white">
          Honest words from real weddings
        </p>
      </div>

      {/* Collage Wrapper */}
      <div className="relative max-w-7xl mx-auto h-[650px] hidden md:block">

        {/* CENTER CARD */}
        <TestimonialCard
          visible={visible}
          className="top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px]"
          delay="delay-0"
          large
          name="Riya & Arjun"
          text="Every photo felt alive. Samsmedia captured emotions, not just moments."
          image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
        />

        {/* LEFT TOP */}
        <TestimonialCard
          visible={visible}
          className="top-0 left-30 w-64 rotate-[-2deg]"
          delay="delay-150"
          name="Neha & Kunal"
          text="Professional, warm, and incredibly creative."
          image="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
        />

        {/* RIGHT TOP */}
        <TestimonialCard
          visible={visible}
          className="top-0 right-16 w-60 rotate-[2deg]"
          delay="delay-300"
          name="Sneha & Varun"
          text="We relive our wedding every time we open the album."
          image="https://images.unsplash.com/photo-1525286116112-b59af11adad1"
        />

        {/* LEFT BOTTOM */}
        <TestimonialCard
          visible={visible}
          className="top-50  left-20 w-64 rotate-[-3deg]"
          delay="delay-450"
          name="Pooja & Aman"
          text="Highly recommended for couples who value emotions."
          image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
        />

        {/* RIGHT BOTTOM */}
        <TestimonialCard
          visible={visible}
          className="bottom-24 right-24 w-60 rotate-[-1deg]"
          delay="delay-600"
          name="Aditi & Rohit"
          text="The storytelling was unreal. Every frame had meaning."
          image="https://images.unsplash.com/photo-1607082349566-187342175e2f"
        />

        <TestimonialCard
        visible={visible}
        className="bottom-24 left-36 -translate-y-1/2 w-60 rotate-[-3deg]"
        delay="delay-750"
        name="Kriti & Anmol"
        text="The candid moments were our favorite. Nothing felt forced."
        image="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
        />

        <TestimonialCard
        visible={visible}
        className="top-50 right-6 -translate-y-1/2 w-60 rotate-[3deg]"
        delay="delay-900"
        name="Isha & Rohan"
        text="Every detail was captured beautifully. We felt so comfortable."
        image="https://images.unsplash.com/photo-1525286116112-b59af11adad1"
        />


        <TestimonialCard
        visible={visible}
        className="bottom-45 left-1/2 -translate-x-1/2 w-56 rotate-[1deg]"
        delay="delay-[1050ms]"
        name="Megha & Siddharth"
        text="The team blended in seamlessly and captured pure magic."
        image="https://images.unsplash.com/photo-1607082349566-187342175e2f"
        />


      </div>

      {/* MOBILE ENHANCED CAROUSEL */}
<div className="md:hidden relative overflow-hidden">
  <div
    className={`flex gap-6 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide
      transition-all duration-700
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
    onScroll={(e) => {
      const cards = e.target.querySelectorAll(".testimonial-card");
      const center =
        e.target.scrollLeft + e.target.offsetWidth / 2;

      cards.forEach((card) => {
        const cardCenter =
          card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(center - cardCenter);

        const scale = Math.max(0.9, 1 - distance / 600);
        const opacity = Math.max(0.5, 1 - distance / 500);
        const rotate = (center - cardCenter) / 80;

        card.style.transform = `
          scale(${scale})
          rotate(${rotate}deg)
        `;
        card.style.opacity = opacity;
      });
    }}
  >
    {[
      {
        name: "Riya & Arjun",
        text: "Every photo felt alive. Samsmedia captured emotions, not just moments.",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      },
      {
        name: "Neha & Kunal",
        text: "Professional, warm, and incredibly creative.",
        image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
      },
      {
        name: "Sneha & Varun",
        text: "We relive our wedding every time we open the album.",
        image: "https://images.unsplash.com/photo-1525286116112-b59af11adad1",
      },
      {
        name: "Pooja & Aman",
        text: "Highly recommended for couples who value emotions.",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      },
      {
        name: "Aditi & Rohit",
        text: "The storytelling was unreal. Every frame had meaning.",
        image: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
      },
      {
        name: "Kriti & Anmol",
        text: "The candid moments were our favorite. Nothing felt forced.",
        image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
      },
      {
        name: "Isha & Rohan",
        text: "Every detail was captured beautifully.",
        image: "https://images.unsplash.com/photo-1525286116112-b59af11adad1",
      },
      {
        name: "Megha & Siddharth",
        text: "The team blended in seamlessly and captured pure magic.",
        image: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="testimonial-card snap-center shrink-0 w-[85%]
          bg-[#F7F4EA] rounded-3xl shadow-2xl p-6
          transition-all duration-300 will-change-transform"
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={item.image}
            alt={item.name}
            className="h-14 w-14 rounded-full object-cover"
          />
          <h4 className="font-semibold text-gray-800">
            {item.name}
          </h4>
        </div>
        <p className="text-gray-700 text-base leading-relaxed">
          “{item.text}”
        </p>
      </div>
    ))}
  </div>

  {/* Swipe hint */}
  <p className="text-center text-sm text-gray-700 mt-6 tracking-wide">
    Swipe → Feel the stories
  </p>
</div>

    </section>
  );
}

/* Card Component */
function TestimonialCard({
  name,
  text,
  image,
  className,
  delay,
  visible,
  large,
}) {
  return (
    <div
      className={`absolute ${className}
        bg-[#F7F4EA] rounded-3xl shadow-2xl p-6
        transition-all duration-1000 ease-out ${delay}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
        animate-[float_6s_ease-in-out_infinite]
      `}
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className={`rounded-full object-cover ${
            large ? "h-16 w-16" : "h-12 w-12"
          }`}
        />
        <h4 className="font-semibold text-gray-800">{name}</h4>
      </div>
      <p className={`text-gray-700 ${large ? "text-lg" : "text-sm"}`}>
        “{text}”
      </p>
    </div>
  );
}

