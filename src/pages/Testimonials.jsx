import React from 'react';
import { Helmet } from 'react-helmet-async';

const testimonials = [
  {
    name: "FASEELA SHAFEEQUE",
    project: "MANAGING DIRECTOR, ADG GOLD GROUP KOLLAM | MODULAR KITCHEN & WARDROBE",
    quote: "Our new bespoke modular kitchen and custom luxury wardrobes have completely transformed our home. The premium kitchen island layout and bespoke sliding closet doors flawlessly blend high-end bespoke manufacturing with exquisite modern design.",
  },
  {
    name: "FAIROOS TIRUR",
    project: "GLASS PROFILE & SLIDING WARDROBES",
    quote: "The craftsmanship on our custom glass profile wardrobes and space-saving sliding closet doors is absolutely stunning. LuxurLive truly delivered a bespoke luxury masterpiece that elevated our entire bedroom storage experience.",
  },
  {
    name: "ZAYAN TIRUR",
    project: "LUXURLIVE ISLAND KITCHEN",
    quote: "The LuxurLive island kitchen is a pinnacle of modern luxury design. With its tailored cabinetry, premium PU finishes, and bespoke gourmet cooking layout, it stands as the beautiful, functional heart of our home.",
  },
  {
    name: "JAISAL & MUHSINA",
    project: "BESPOKE WARDROBES",
    quote: "Our custom wardrobe design exceeded all expectations. The tailored luxury closet layouts, scratch-resistant laminate doors, and bespoke shelving maximize our storage space while radiating absolute sophistication in every detail.",
  }
];

function Testimonials() {
  return (
    <div className="bg-background min-vh-100 py-5">
      <Helmet>
        <title>Client Testimonials | LuxurLive Kitchens & Wardrobes</title>
        <meta name="description" content="Read testimonials from our satisfied clients about their bespoke modular kitchens and custom luxury wardrobes from LuxurLive." />
        <meta name="keywords" content="LuxurLive Reviews, Client Testimonials, Luxury Kitchen Reviews, Wardrobe Testimonials" />
        <link rel="canonical" href="https://luxurlive.com/testimonials" />
      </Helmet>
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <h1 className="text-center mb-5" style={{ color: '#e5d3b3', fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Client Testimonials
        </h1>

        <div className="row g-5 mt-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="col-md-6 d-flex">
              <div className="p-5 text-center d-flex flex-column justify-content-between" style={{ border: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '4px', width: '100%' }}>
                <blockquote className="text-heading fw-light lh-sm mb-4 fst-italic" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6' }}>
                  “{t.quote}”
                </blockquote>
                <div className="d-flex flex-column gap-2 mt-auto pt-4">
                  <span className="tracking-widest" style={{ fontSize: '13px', letterSpacing: '0.2em', color: '#fff' }}>{t.name}</span>
                  <span className="text-stone tracking-widest" style={{ fontSize: '10px', color: '#BFA054' }}>{t.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
