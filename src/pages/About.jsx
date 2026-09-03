import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function About() {

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
    <div className="bento-page">
      <Helmet>
        <title>About LuxurLive | Bespoke Wardrobe & Kitchen Craftsmanship</title>
        <meta name="description" content="Learn about LuxurLive's philosophy. We specialize in luxury modular kitchens and custom bespoke wardrobes in Kozhikode." />
        <meta name="keywords" content="About LuxurLive, Luxury Wardrobes, Craftsmanship, Bespoke Kitchens, Premium Materials" />
      </Helmet>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');

        /* Global Page Reset for this page */
        .bento-page {
          background-color: #030303;
          color: #ffffff;
          overflow-x: hidden;
          width: 100vw;
          min-height: 100vh;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          padding: 120px 2vw 5vw 2vw; /* Top padding for navbar */
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

        .bento-block.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Background Colors */
        .bg-charcoal { background-color: #111111; }
        .bg-black { background-color: #0a0a0a; }
        .bg-bronze { background-color: #161410; } /* Very dark warm tone */

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
          font-size: 2.8rem;
          font-weight: 400;
          letter-spacing: 0.05em;
          line-height: 1.1;
          color: #e5d3b3; /* Soft gold/champagne */
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

        /* Image Handling */
        .full-image {
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
          max-height: 200px;
          object-fit: cover;
          margin-bottom: 2rem;
          border: 1px solid rgba(255,255,255,0.1);
        }

        /* Specific Block Tweaks */
        .brand-logo-block h1 {
          font-size: 4rem;
          font-weight: 200;
          letter-spacing: 0.15em;
          margin: 0;
          color: #e5d3b3;
        }
        .brand-logo-block span {
          display: block;
          font-size: 0.8rem;
          letter-spacing: 0.4em;
          color: rgba(255,255,255,0.5);
          margin-top: 1rem;
          text-transform: uppercase;
        }

        .methodology-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .methodology-list li {
          margin-bottom: 1.5rem;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          color: #fff;
          display: flex;
          align-items: center;
        }
        .methodology-list li span {
          font-family: 'Helvetica Neue', sans-serif;
          font-size: 0.8rem;
          color: #c4a173;
          margin-right: 1rem;
          letter-spacing: 0.2em;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .bento-page { padding-top: 100px; }
          .bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: minmax(300px, auto);
          }
          .full-image { height: 400px; }
        }
      `}</style>

      <div className="bento-grid">

        {/* ROW 1 */}
        {/* Block 1: Image */}
        <div className="bento-block" style={{ transitionDelay: '0s' }}>
          <img loading="lazy" decoding="async" src="/about/aboutkitchen1.jpeg" alt="Bespoke Modular Kitchen Manufacturing Kozhikode" className="full-image" />
        </div>

        {/* Block 2: Text + Inset */}
        <div className="bento-block bg-charcoal" style={{ transitionDelay: '0.1s' }}>
          <div className="bento-content">
            <h1 className="serif-heading">Luxury Design Philosophy</h1>
            <p className="paragraph">
              At LuxurLive, we believe true high-end wardrobe and kitchen design is found in the bespoke details — in premium scratch-resistant finishes, intelligent modular kitchen layouts, and luxury living spaces thoughtfully shaped around your lifestyle.
            </p>
            <p className="paragraph">
              As expert architectural designers, we craft bespoke modular kitchens and luxury custom wardrobes that seamlessly blend stunning modern aesthetics with everyday functionality, creating sophisticated sanctuary spaces tailored to your individual taste.
            </p>


            <img loading="lazy" decoding="async" src="/about/aboutwarddetail.jpeg" alt="Luxury Custom Wardrobe Cabinetry Detail" className="inset-image" style={{ marginTop: 'auto', marginBottom: 0 }} />
          </div>
        </div>

        {/* Block 3: Image */}
        <div className="bento-block" style={{ transitionDelay: '0.2s' }}>
          <img loading="lazy" decoding="async" src="/about/aboutward.jpeg" alt="High-End Custom Wardrobe Design Kozhikode" className="full-image" />
        </div>


        {/* ROW 2 */}
        {/* Block 4: Title + Inset */}
        <div className="bento-block bg-black" style={{ transitionDelay: '0.1s' }}>
          <div className="bento-content flex-end">
            <img loading="lazy" decoding="async" src="/about/wardrobe_detail_7.jpeg" alt="LuxurLive Wardrobe Manufacturing Craftsmanship" className="inset-image" />
            <h2 className="serif-heading" style={{ margin: 0 }}>Designing<br />Excellence</h2>
          </div>
        </div>

        {/* Block 5: Center Brand Logo */}
        <div className="bento-block bg-bronze brand-logo-block" style={{ transitionDelay: '0.2s' }}>
          <div className="bento-content center">
            <img loading="lazy" decoding="async" src="/logo.png" alt="LuxurLive Bespoke Kitchens and Wardrobes" style={{ height: '50px', objectFit: 'contain' }} />
            <div className="brand-subtitle">Kitchens &middot; Wardrobes</div>

            <div style={{ width: '50px', height: '1px', background: 'rgba(255,255,255,0.2)', margin: '2rem auto 0' }}></div>
          </div>
        </div>

        {/* Block 6: Large Text */}
        <div className="bento-block bg-charcoal" style={{ transitionDelay: '0.3s' }}>
          <div className="bento-content center">
            <h2 className="serif-large">
              Transform Your Space With Luxury Modular Kitchens & Bespoke Wardrobes
            </h2>
          </div>
        </div>


        {/* ROW 3 */}
        {/* Block 7: Image */}
        <div className="bento-block" style={{ transitionDelay: '0.2s' }}>
          <img loading="lazy" decoding="async" src="/about/wardrobe_detail_1.jpeg" alt="Bespoke Walk-in Wardrobe Architecture" className="full-image" />
        </div>

        {/* Block 8: Methodology */}
        <div className="bento-block bg-charcoal" style={{ transitionDelay: '0.3s' }}>
          <div className="bento-content">
            <h2 className="serif-heading italic" style={{ textTransform: 'capitalize', fontSize: '2rem' }}>Our Bespoke Process</h2>
            <ul className="methodology-list">
              <li><span>01</span> Initial Space Consultation</li>
              <li><span>02</span> Premium Cabinetry Architecture</li>
              <li><span>03</span> Precision Cabinetry Engineering</li>
              <li><span>04</span> Luxury Installation & Realization</li>
            </ul>
          </div>
        </div>

        {/* Block 9: Call to action / Quote */}
        <div className="bento-block bg-black" style={{ transitionDelay: '0.4s' }}>
          <div className="bento-content center">
            <p className="paragraph" style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#e5d3b3', marginBottom: '2rem' }}>
              "True bespoke luxury is not excess. It is the art of executing every cabinetry and wardrobe detail with absolute perfection."
            </p>
            <Link to="/contact" style={{
              display: 'inline-block', padding: '1rem 2.5rem',
              border: '1px solid rgba(229, 211, 179, 0.5)', color: '#e5d3b3',
              textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.15em',
              fontSize: '0.8rem', transition: 'all 0.3s ease'
            }}
              onMouseOver={(e) => { e.target.style.background = '#e5d3b3'; e.target.style.color = '#000'; }}
              onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#e5d3b3'; }}
            >
              Begin Your Project
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
