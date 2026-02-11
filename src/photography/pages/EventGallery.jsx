import { useParams } from "react-router-dom";
import { useState } from "react";

export default function EventGallery() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  // Event-specific image collections from Unsplash
  const eventImages = {
    wedding: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600",
    ],
    reception: [
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=600",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600",
      "https://images.unsplash.com/photo-1519167758481-83f29da8c768?w=600",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600",
      "https://images.unsplash.com/photo-1484156818044-c040dec6529a?w=600",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600",
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600",
      "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=600",
      "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=600",
    ],
    mehendi: [
      "https://images.unsplash.com/photo-1554787388-9194e4eb57a3?w=600",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600",
      "https://images.unsplash.com/photo-1514849302-984523450cf4?w=600",
      "https://images.unsplash.com/photo-1609083401890-681a5a5e6994?w=600",
      "https://images.unsplash.com/photo-1614914135224-925b39308f77?w=600",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e196b?w=600",
      "https://images.unsplash.com/photo-1605193723533-c5c51d20b253?w=600",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600",
      "https://images.unsplash.com/photo-1609083467139-4b4c093fc1ef?w=600",
      "https://images.unsplash.com/photo-1609083400962-c4527ea0dbb4?w=600",
      "https://images.unsplash.com/photo-1617627161456-7d4841c9f00d?w=600",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600",
    ],
    haldi: [
      "https://images.unsplash.com/photo-1698460916760-b9e3bba58914?w=600",
      "https://images.unsplash.com/photo-1609083400962-c4527ea0dbb4?w=600",
      "https://images.unsplash.com/photo-1614914135224-925b39308f77?w=600",
      "https://images.unsplash.com/photo-1609083467139-4b4c093fc1ef?w=600",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e196b?w=600",
      "https://images.unsplash.com/photo-1605193723533-c5c51d20b253?w=600",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600",
      "https://images.unsplash.com/photo-1554787388-9194e4eb57a3?w=600",
      "https://images.unsplash.com/photo-1617627161456-7d4841c9f00d?w=600",
      "https://images.unsplash.com/photo-1609083401890-681a5a5e6994?w=600",
      "https://images.unsplash.com/photo-1514849302-984523450cf4?w=600",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600",
    ],
    engagement: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600",
      "https://images.unsplash.com/photo-1525258974676-f0c1f7293f9b?w=600",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600",
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600",
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600",
    ],
    "pre-wedding": [
      "https://images.unsplash.com/photo-1525286116112-b59af11adad1?w=600",
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600",
      "https://images.unsplash.com/photo-1525258974676-f0c1f7293f9b?w=600",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600",
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600",
    ],
  };

  const images = eventImages[slug] || eventImages.wedding;

  return (
    <div className="min-h-screen bg-[#F7F4EA] pt-32 px-8 pb-16">
      <h1 className="text-4xl font-serif font-bold text-center capitalize mb-12">
        {slug.replace("-", " ")} Gallery
      </h1>

      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${slug} ${i + 1}`}
            className="rounded-xl shadow-lg object-cover w-full h-64 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
}
