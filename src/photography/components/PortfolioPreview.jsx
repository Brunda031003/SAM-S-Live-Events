import { useState } from "react";

export default function PortfolioPreview() {
  const images = ["https://images.unsplash.com/photo-1638005116063-fa6806480571?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1638005116063-fa6806480571?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1638005116063-fa6806480571?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1638005116063-fa6806480571?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl text-center font-bold mb-12">
          Portfolio Section
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="rounded-xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} className="max-h-[90vh]" />
        </div>
      )}
    </section>
  );
}
