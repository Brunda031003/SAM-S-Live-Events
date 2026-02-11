import { Link } from "react-router-dom";

export default function EventsPreview() {
  const events = [
    {
      name: "Wedding ->",
      slug: "wedding",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Reception ->",
      slug: "reception",
      image:
        "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mehendi ->",
      slug: "mehendi",
      image:
        "https://images.unsplash.com/photo-1554787388-9194e4eb57a3?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Haldi ->",
      slug: "haldi",
      image:
        "https://images.unsplash.com/photo-1698460916760-b9e3bba58914?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Engagement ->",
      slug: "engagement",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Pre-Wedding ->",
      slug: "pre-wedding",
      image:
        "https://images.unsplash.com/photo-1525286116112-b59af11adad1?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section 
      className="py-24 relative"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Gallery Of Our Events
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Explore our beautifully captured wedding moments
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <Link
              to={`/events/${event.slug}`}
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.name}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-serif font-bold text-white tracking-wide">
                  {event.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
