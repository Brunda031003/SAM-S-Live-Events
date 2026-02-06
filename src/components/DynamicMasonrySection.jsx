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
    { id: '1', img: 'https://picsum.photos/id/1015/600/900?grayscale', url: 'https://example.com/one', height: 400 },
    { id: '2', img: 'https://picsum.photos/id/1011/600/750?grayscale', url: 'https://example.com/two', height: 250 },
    { id: '3', img: 'https://picsum.photos/id/1020/600/800?grayscale', url: 'https://example.com/three', height: 600 },
    { id: '4', img: 'https://images.unsplash.com/photo-1566827164985-f39da7c6c550?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D', url: 'https://unsplash.com', height: 500 },
    { id: '5', img: 'https://images.unsplash.com/photo-1632749696383-6afcf89b397e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D', url: 'https://unsplash.com', height: 480 },
    { id: '6', img: 'https://media.istockphoto.com/id/1217553621/photo/morning-in-foggy-mountains-black-and-white-mountain-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=KeYdAgblZJZyd752R_O81w2ngjQZ9GEupuJx9sBMINI=', url: 'https://istockphoto.com', height: 460 },
    { id: '7', img: 'https://images.unsplash.com/photo-1499428665502-503f6c608263?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D', url: 'https://unsplash.com', height: 420 },
    { id: '8', img: 'https://plus.unsplash.com/premium_photo-1673621329410-e4ef5df05b69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D', url: 'https://unsplash.com', height: 440 },
    { id: '9', img: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D', url: 'https://unsplash.com', height: 460 },
    { id: '10', img: 'https://images.unsplash.com/photo-1532517308734-0565178471d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D', url: 'https://unsplash.com', height: 460 },
    { id: '11', img: 'https://images.unsplash.com/photo-1464423163665-75e82891f301?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D', url: 'https://unsplash.com', height: 460 },
    { id: '12', img: 'https://media.istockphoto.com/id/1135480451/photo/man-portrait-in-black-and-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=nHZX8UyO73av3s0MuexBseYTJp9zG4sBFi1yQoPyRK0=', url: 'https://istockphoto.com', height: 520 },
    { id: '13', img: 'https://media.istockphoto.com/id/1135480451/photo/man-portrait-in-black-and-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=nHZX8UyO73av3s0MuexBseYTJp9zG4sBFi1yQoPyRK0=', url: 'https://istockphoto.com', height: 520 },
    { id: '14', img: 'https://media.istockphoto.com/id/1135480451/photo/man-portrait-in-black-and-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=nHZX8UyO73av3s0MuexBseYTJp9zG4sBFi1yQoPyRK0=', url: 'https://istockphoto.com', height: 520 }
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
    <div className="w-full px-8 md:px-12 lg:px-24 flex flex-col items-center" style={{ height: 800 }}>
      <div className="mb-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-white">Portfolio</h2>
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
