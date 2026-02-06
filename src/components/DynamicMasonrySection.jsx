import React, { useEffect, useState } from 'react';

export default function DynamicMasonrySection() {
  const [Comp, setComp] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('./Masonry.jsx')
      .then(mod => {
        if (!mounted) return;

        // Preferred: default export is the component
        if (typeof mod?.default === 'function') {
          setComp(() => mod.default);
          return;
        }

        // Common fallback: module itself is a function (rare)
        if (typeof mod === 'function') {
          setComp(() => mod);
          return;
        }

        // Named export `Masonry`
        if (typeof mod?.Masonry === 'function') {
          setComp(() => mod.Masonry);
          return;
        }

        // Nothing valid — log detailed module shape to help debugging
        // eslint-disable-next-line no-console
        console.error('Invalid Masonry export (module):', mod);
        try {
          // eslint-disable-next-line no-console
          console.error('keys:', Object.keys(mod));
          // eslint-disable-next-line no-console
          console.error('own property names:', Object.getOwnPropertyNames(mod));
          // eslint-disable-next-line no-console
          console.error('own keys:', Reflect.ownKeys(mod));
          for (const k of Reflect.ownKeys(mod)) {
            // eslint-disable-next-line no-console
            console.error(k, '->', typeof mod[k]);
          }
        } catch (e) {
          // ignore
        }

        setError(new Error('Masonry must export a React component (default export). See console for module shape.'));
        return;
      })
      .catch(err => {
        if (!mounted) return;
        setError(err instanceof Error ? err : new Error(String(err)));
        // eslint-disable-next-line no-console
        console.error('Failed to dynamically import Masonry:', err);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const items = [
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200',
    url: 'https://example.com/one',
    height: 400
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200',
    url: 'https://example.com/two',
    height: 250
  },
  {
    id: '3',
    img: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1200',
    url: 'https://example.com/three',
    height: 600
  },
  {
    id: '4',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200',
    url: 'https://unsplash.com',
    height: 500
  },
  {
    id: '5',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200',
    url: 'https://unsplash.com',
    height: 480
  },
  {
    id: '6',
    img: 'https://images.unsplash.com/photo-1689627528687-e7c118c1e3c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
    url: 'https://istockphoto.com',
    height: 460
  },
  {
    id: '7',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200',
    url: 'https://unsplash.com',
    height: 420
  },
  {
    id: '8',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200',
    url: 'https://unsplash.com',
    height: 440
  },
  {
    id: '9',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200',
    url: 'https://unsplash.com',
    height: 460
  },
  {
    id: '10',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200',
    url: 'https://unsplash.com',
    height: 460
  },
  {
    id: '11',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200',
    url: 'https://unsplash.com',
    height: 460
  },
  {
    id: '12',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200',
    url: 'https://istockphoto.com',
    height: 520
  },
  {
    id: '13',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200',
    url: 'https://istockphoto.com',
    height: 520
  },
  {
    id: '14',
    img: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1200',
    url: 'https://istockphoto.com',
    height: 520
  }
];


  if (error) {
    return (
      <div className="w-full p-6 text-left text-sm text-red-400 bg-black/5">
        <strong>Failed to load Masonry:</strong>
        <pre className="whitespace-pre-wrap">{error.message}</pre>
        <p className="mt-2 text-xs text-gray-400">Check console for module shape and stack trace.</p>
      </div>
    );
  }

  if (!Comp) return null;

  const Masonry = Comp;

  return (
    <div className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-24 flex flex-col items-center min-h-[600px] md:min-h-[800px]">
      <div className="mb-6 md:mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">Portfolio</h2>
      </div>
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />
    </div>
  );
}
