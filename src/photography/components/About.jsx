export default function About() {
  return (
    <section className="relative min-h-screen flex items-center" style={{ zIndex: 10, marginTop: '40px', padding: '40px 20px' }}>
      {/* Card */}
      <div className="max-w-7xl mx-auto w-full  overflow-hidden shadow-2xl" style={{ backgroundColor: '#A8BBA3' }}>
        <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12">

          {/* Left: Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              About Samsmedia
            </h2>

            <p className="text-lg leading-relaxed opacity-90 mb-6 text-white">
              Samsmedia is a creative wedding and corporate storytelling brand,
              capturing emotions, elegance, and unforgettable moments through
              timeless photography and cinematic films.
            </p>

            <p className="text-lg leading-relaxed opacity-90 text-white">
              With a passion for storytelling and an eye for detail, we turn your
              most precious moments into memories that last forever.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1667538960183-82690c60a2a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Samsmedia"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
