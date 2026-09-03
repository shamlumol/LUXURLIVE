import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Services() {

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.bento-block').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-page">
      <Helmet>
        <title>Services | LuxurLive Kitchens & Wardrobes</title>
        <meta name="description" content="Explore our bespoke modular kitchen and custom luxury wardrobe services. LuxurLive delivers flawless craftsmanship and sophisticated design." />
        <meta name="keywords" content="Luxury Modular Kitchens, Custom Kitchen Design, Bespoke Wardrobe Design, LuxurLive Services" />
      </Helmet>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');

        /* Global Page Reset */
        .bento-page {
          background-color: #030303;
          color: #ffffff;
          overflow-x: hidden;
          width: 100vw;
          min-height: 100vh;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          padding: 120px 2vw 5vw 2vw; 
        }

        /* --- THE BENTO GRID --- */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(400px, auto);
          gap: 15px;
          max-width: 1600px;
          margin: 0 auto;
        }

        .bento-block {
          background-color: #0a0a0a;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .bento-block.wide-2 {
          grid-column: span 2;
        }
        
        .bento-block.wide-3 {
          grid-column: span 3;
        }

        .bento-block.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Background Colors */
        .bg-charcoal { background-color: #111111; }
        .bg-black { background-color: #050505; }
        .bg-bronze { background-color: #161410; } 

        /* Block Content Padding */
        .bento-content {
          padding: 3rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .bento-content.flex-end {
          justify-content: flex-end;
        }
        
        .bento-content.center {
          align-items: center;
          text-align: center;
        }

        /* Typography */
        .serif-heading {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 400;
          letter-spacing: 0.05em;
          line-height: 1.1;
          color: #e5d3b3; 
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }
        
        .serif-heading.italic {
          font-style: italic;
          text-transform: none;
        }

        .serif-large {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3vw, 4rem);
          font-weight: 400;
          letter-spacing: 0.1em;
          line-height: 1.2;
          color: #ffffff;
          text-transform: uppercase;
        }

        .paragraph {
          font-size: 0.95rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
          font-weight: 300;
          margin-bottom: 1.5rem;
        }

        .tagline {
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c4a173;
          margin-bottom: 1rem;
          display: block;
        }

        /* Image Handling */
        .full-image {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.8) contrast(1.1);
          transition: transform 1.5s ease, filter 1.5s ease;
        }
        
        .bento-block:hover .full-image {
          transform: scale(1.05);
          filter: brightness(1) contrast(1.1);
        }

        .inset-image {
          width: 100%;
          max-height: 100%;
          object-fit: cover;
          margin-bottom: 2rem;
          border: 1px solid rgba(255,255,255,0.1);
        }

        /* Approach Grid inside wide block */
        .approach-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 2rem;
          width: 100%;
        }
        
        .approach-col {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 1.5rem;
        }
        
        .approach-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          color: #fff;
          margin-bottom: 1rem;
        }

        .approach-desc {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.6;
        }

        .explore-link {
          display: inline-block;
          margin-top: 1rem;
          color: #e5d3b3;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.8rem;
          border-bottom: 1px solid rgba(229, 211, 179, 0.3);
          padding-bottom: 5px;
          transition: border-color 0.3s ease;
        }
        .explore-link:hover {
          border-color: #e5d3b3;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bento-block.wide-3 {
            grid-column: span 2;
          }
          .approach-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .bento-page { padding-top: 100px; }
          .bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: minmax(300px, auto);
          }
          .bento-block.wide-2, .bento-block.wide-3 {
            grid-column: span 1;
          }
          .full-image { position: relative; height: 300px; }
          .approach-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="bento-grid">

        {/* ROW 1: Hero-style title block + Kitchen Image */}
        <div className="bento-block bg-charcoal wide-2" style={{ transitionDelay: '0s' }}>
          <div className="bento-content">
            <span className="tagline mt-5">Where Craftsmanship Meets Luxury Living</span>
            <h1 className="serif-large" style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)', margin: 0, color: '#e5d3b3' }}>
              Designed for Living
            </h1>
            <p className="paragraph" style={{ maxWidth: '600px', marginTop: '2rem', fontSize: '1.1rem' }}>
              LuxurLive creates refined luxury living spaces through bespoke architectural design, premium imported materials, and flawless cabinetry craftsmanship. We do not just build—we elevate your lifestyle.
            </p>
          </div>
        </div>

        <div className="bento-block" style={{ transitionDelay: '0.1s' }}>
          <img loading="lazy" decoding="async" src="/wardrobe/wardrobe_detail_2.jpeg" alt="Luxury Bespoke Wardrobe Details Kozhikode" className="full-image" />
        </div>

        {/* ROW 2: Kitchens */}
        <div className="bento-block" style={{ transitionDelay: '0.2s' }}>
          <img loading="lazy" decoding="async" src="/kitchen-3.jpeg" alt="Premium Modular Kitchen Design Calicut" className="full-image" />
        </div>

        <div className="bento-block bg-black" style={{ transitionDelay: '0.3s' }}>
          <div className="bento-content">
            <h2 className="serif-heading" style={{ fontSize: '2.2rem' }}>Bespoke Modular Kitchens</h2>
            <span className="tagline" style={{ color: '#fff' }}>Luxury Architectural Kitchen Design</span>
            <p className="paragraph">
              Engineered for both visual sophistication and premium culinary functionality. Our luxury island kitchens feature bespoke contemporary designs, intelligent space-saving layouts, and high-end custom cabinetry.
            </p>
            <p className="paragraph" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
              Premium Finishes: Lacquer • Melamine • Wood Veneer • Aluminium Frame Glass • 45° Beveled Doors • Quartz Stone • Sintered Stone
            </p>
            <Link to="/modular-kitchens" className="explore-link">Explore Collection</Link>
          </div>
        </div>

        <div className="bento-block bg-bronze" style={{ transitionDelay: '0.4s' }}>
          <div className="bento-content flex-end">
            <img loading="lazy" decoding="async" src="/kitchen_detail_3.jpeg" alt="Bespoke Kitchen Cabinetry Details" className="inset-image" />
            <h2 className="serif-heading italic" style={{ fontSize: '1.8rem', margin: 0, textTransform: 'capitalize' }}>Function & Form</h2>
          </div>
        </div>

        {/* ROW 3: Wardrobes */}
        <div className="bento-block bg-black" style={{ transitionDelay: '0.2s' }}>
          <div className="bento-content">
            <h2 className="serif-heading" style={{ fontSize: '2.2rem' }}>Luxury Custom Wardrobes</h2>
            <span className="tagline" style={{ color: '#fff' }}>Bespoke Walk-in & Sliding Closets</span>
            <p className="paragraph">
              Premium architectural storage solutions designed around your individual lifestyle. We specialize in elegant master bedroom wardrobe designs, scratch-resistant finishes, and bespoke personalized organization.
            </p>
            <p className="paragraph" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
              Details: Leather-wrapped framing • Precision Aluminum Systems • Custom Zinc Alloy Hardware
            </p>
            <Link to="/wardrobes" className="explore-link">Explore Collection</Link>
          </div>
        </div>

        <div className="bento-block wide-2" style={{ transitionDelay: '0.3s' }}>
          <img loading="lazy" decoding="async" src="/wardrobe/serviceward.jpeg" alt="Custom Luxury Wardrobe Manufacturing Kozhikode" className="full-image" />
        </div>

        {/* ROW 4: Design Principles (Wide) */}
        <div className="bento-block bg-charcoal wide-3" style={{ transitionDelay: '0.4s' }}>
          <div className="bento-content">
            <h2 className="serif-heading" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Our Luxury Architecture Approach</h2>
            <span className="tagline" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>Our foundational principles</span>

            <div className="approach-grid">
              <div className="approach-col">
                <div className="approach-title">Personalised Design</div>
                <div className="approach-desc">Solutions shaped around the customer's unique space, taste, and lifestyle.</div>
              </div>
              <div className="approach-col">
                <div className="approach-title">Material Selection</div>
                <div className="approach-desc">A curated selection of premium finishes, surfaces, and precision hardware.</div>
              </div>
              <div className="approach-col">
                <div className="approach-title">Intelligent Planning</div>
                <div className="approach-desc">Layouts engineered to perfectly balance structural aesthetics and everyday functionality.</div>
              </div>
              <div className="approach-col">
                <div className="approach-title">Refined Detailing</div>
                <div className="approach-desc">Carefully considered doors, handles, surfaces, and finishes executed with architectural precision.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;
