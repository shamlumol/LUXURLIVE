import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function BedroomWardrobes() {
  const navigate = useNavigate();
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll, .section-reveal');
    elements.forEach((el) => observer.observe(el));

    // High-Quality Parallax Effect (using background-position instead of scale/transform)
    const handleScroll = () => {
      requestAnimationFrame(() => {
        document.querySelectorAll('.parallax-bg').forEach((bg) => {
          const parent = bg.parentElement;
          const rect = parent.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // scrollPercent will be between approx 1 (just entering bottom) and -1 (leaving top)
            const scrollPercent = rect.top / window.innerHeight;
            if (bg.classList.contains('crop-bottom')) {
              // Shift focus to the top (crop bottom only)
              const yPos = 15 + (scrollPercent * 15);
              bg.style.backgroundPosition = `center ${yPos}%`;
            } else {
              // Standard equal top/bottom cropping
              const yPos = 50 + (scrollPercent * 15);
              bg.style.backgroundPosition = `center ${yPos}%`;
            }
          }
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wardrobes-page">
      <Helmet>
        <title>Luxury Bedroom Wardrobes | LuxurLive</title>
        <meta name="description" content="Explore our bespoke luxury bedroom wardrobes. Discover custom architectural storage solutions that protect and display with uncompromising elegance." />
        <meta name="keywords" content="Bespoke Wardrobes, Luxury Closets, Custom Wardrobe Design, Kozhikode Furniture" />
        <link rel="canonical" href="https://luxurlive.com/wardrobes" />
        <link rel="preload" as="image" href="/wardrobe/download (2).jpeg" />
      </Helmet>
      <style>{`
        /* Global Page Settings */
        .wardrobes-page {
          background-color: #050505;
          color: white;
          overflow-x: hidden;
        }

        /* Hero Section */
        .kitchen-hero {
          position: relative;
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .hero-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: url("/wardrobe/download (2).jpeg");
          background-size: cover;
          background-position: center;
          z-index: 1;
        }
        
        .hero-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%); 
          z-index: 2; 
        }
        
        .hero-content { 
          position: relative; 
          z-index: 10; 
          text-align: center; 
        }
        
        .hero-title { 
          font-size: clamp(2.5rem, 6vw, 6rem); 
          letter-spacing: 0.05em; 
          margin-bottom: 1.5rem;
          font-weight: 300;
          text-transform: uppercase;
        }

        .hero-subtitle {
          font-size: clamp(11px, 1.5vw, 16px);
          letter-spacing: 0.4em;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
        }

        /* Parallax Sections Base */
        .parallax-section {
          position: relative;
          min-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          overflow: hidden; /* Contains the moving bg */
        }
        
        /* True Parallax Moving Background */
        .parallax-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-size: cover;
          background-position: center 50%;
          image-rendering: high-quality;
          -webkit-font-smoothing: antialiased;
          z-index: 0;
        }
        
        /* Global Black Shade Fog for all Parallax Backgrounds */
        .parallax-section::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.35); /* Added slight dark shade for light images */
          z-index: 1;
        }
        
        .parallax-section.left-shade::before {
          background: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0) 100%);
        }
        
        /* Small Rectangular Glass Cards */
        .small-glass-card {
          background: rgba(255, 255, 255, 0);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 2.5rem 2.5rem;
          color: white;
          width: 380px;
          max-width: 85vw;
          position: relative;
          z-index: 10;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6);
        }
        
        /* Card Placements */
        .small-glass-card.left { margin-left: 10vw; }
        .small-glass-card.right { margin-left: auto; margin-right: 10vw; }
        .small-glass-card.center { margin: 0 auto; }

        /* Floating Subtitles for opposite side */
        .floating-subtitle {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.3);
          font-size: 22px !important;
          letter-spacing: 0.6em;
          text-transform: uppercase;
          z-index: 5;
          pointer-events: none;
        }
        .floating-subtitle.right { right: 10vw; text-align: right; }
        .floating-subtitle.left { left: 10vw; text-align: left; }
        /* Typography inside glass */
        .block-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.6);
          display: block;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        
        .block-title {
          font-size: 2rem;
          font-weight: 300;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }
        
        .block-description {
          font-size: 14px;
          line-height: 1.8;
          color: rgba(255,255,255,0.8);
          font-weight: 300;
          margin-bottom: 2rem;
        }
        
        .gold-text {
          color: #c9a96e;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .block-list-item { margin-bottom: 1.5rem; }
        .block-list-item:last-child { margin-bottom: 0; }
        .block-list-item p { font-size: 13px; color: rgba(255,255,255,0.7); line-height: 1.6; margin: 0; }

        /* Opposite Side Floating Subtitles */
        .floating-subtitle {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: clamp(2rem, 4vw, 4rem);
          font-weight: 200;
          color: rgba(255,255,255,0.15); /* Very subtle */
          letter-spacing: 0.05em;
          z-index: 5;
          text-transform: uppercase;
          pointer-events: none;
        }
        .floating-subtitle.right { right: 10%; text-align: right; }
        .floating-subtitle.left { left: 10%; text-align: left; }

        /* Scroll Animations */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Section Level Reveal (Fade only, no transform to preserve fixed parallax) */
        .section-reveal {
          opacity: 0;
          transition: opacity 1.5s ease-out;
        }
        .section-reveal.reveal-visible {
          opacity: 1;
        }
        
        /* Contact Block */
        .contact-block {
          min-height: 50vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #050505;
          text-align: center;
          padding: 10vh 20px;
        }

        .contact-btn {
          border: 1px solid rgba(255,255,255,0.2);
          background: transparent;
          color: white;
          padding: 15px 40px;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          margin-top: 2rem;
        }
        
        .contact-btn:hover {
          background: white;
          color: black;
        }

        @media (max-width: 768px) {
          .kitchen-hero, .parallax-section {
            min-height: 100vh !important;
            height: 100vh !important;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .parallax-section.left-shade::before {
            background: rgba(0, 0, 0, 0.35); /* Disable left shade on mobile */
          }

          .small-glass-card {
            margin: 0 auto !important;
            padding: 1.5rem !important;
            width: 280px !important; /* Very small rectangular box */
            max-width: 85vw !important;
            background: rgba(255, 255, 255, 0.05) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6) !important;
            text-align: center !important;
            position: relative;
            z-index: 10;
          }
          
          .floating-subtitle {
            display: block !important;
            position: absolute;
            top: -2.5rem;
            left: 0;
            width: 100%;
            transform: none;
            font-size: 10px !important;
            margin: 0;
            text-align: center !important;
            padding: 0;
            color: rgba(255,255,255,0.7);
          }
          
          .floating-subtitle.right, .floating-subtitle.left {
            left: 0; right: 0;
          }

          .block-label {
            font-size: 9px;
            margin-bottom: 0.8rem;
          }

          .block-title {
            font-size: 1.35rem;
            margin-bottom: 0.5rem;
          }
          
          .block-description {
            font-size: 11px;
            line-height: 1.6;
            margin-bottom: 0.8rem;
          }
          
          .block-list-item p {
            font-size: 11px;
          }

          .hero-title {
            font-size: 1.8rem;
            line-height: 1.3;
          }
          
          .hero-subtitle {
            font-size: 9px;
          }
          
          .contact-block {
            min-height: 40vh;
            padding: 5vh 5%;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="kitchen-hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content reveal-on-scroll">
          <h1 className="hero-title">BESPOKE WARDROBES</h1>
          <p className="hero-subtitle">Storage. Refined.</p>
        </div>
      </section>

      {/* Parallax 0: Introduction */}
      <section className="parallax-section section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("wardrobe/intro_ward.jpg")' }}></div>
        <div className="small-glass-card left reveal-on-scroll">
          <span className="block-label">Philosophy</span>
          <h2 className="block-title">Personal Sanctuaries</h2>
          <p className="block-description">
            A wardrobe is more than storage; it is a highly personal sanctuary for your curated collections.
            We design spaces that organize your life while reflecting your impeccable taste.
          </p>
        </div>
      </section>

      {/* Parallax 1: Walk-in Wardrobe */}
      <section className="parallax-section section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("/wardrobe/walk_in_ward.jpeg")' }}></div>
        <div className="floating-subtitle left reveal-on-scroll">01 / Walk-in</div>
        <div className="small-glass-card right reveal-on-scroll" onClick={() => navigate('/contact?model=Walk-in Wardrobe (W-01)')} style={{ cursor: 'pointer' }}>
          <span className="block-label">MODEL W-01</span>
          <h2 className="block-title">Walk-in Wardrobe</h2>
          <h3 className="gold-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>The Ultimate Dressing Room</h3>
          <p className="block-description">
            Elevate your lifestyle with our premium luxury walk-in wardrobe designs. Expertly crafted as a bespoke dressing room, these high-end custom storage solutions offer expansive boutique-style displays, modular shelving, and elegant organization for your entire collection.
          </p>
        </div>
      </section>

      {/* Parallax 2: Glass Profile Wardrobe */}
      <section className="parallax-section left-shade section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("/wardrobe/Glass_Profile_Ward.jpg")' }}></div>
        <div className="floating-subtitle right reveal-on-scroll">02 / Glass Profile</div>
        <div className="small-glass-card left reveal-on-scroll" onClick={() => navigate('/contact?model=Glass Profile Wardrobe (W-02)')} style={{ cursor: 'pointer' }}>
          <span className="block-label">MODEL W-02</span>
          <h2 className="block-title">Glass Profile Wardrobe</h2>
          <h3 className="gold-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Modern Architectural Elegance</h3>
          <p className="block-description">
            Showcase your apparel with our custom glass profile wardrobes. Featuring exquisite tinted and fluted glass closet doors framed in minimalist metal, this luxury bedroom storage design offers built-in ambient lighting and stunning visual depth for a truly modern modular wardrobe experience.
          </p>
        </div>
      </section>

      {/* Parallax 3: Sliding Glass Wardrobe */}
      <section className="parallax-section section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("/wardrobe/sliding_glass_ward.jpg")' }}></div>
        <div className="floating-subtitle left reveal-on-scroll">03 / Sliding Glass</div>
        <div className="small-glass-card right reveal-on-scroll" onClick={() => navigate('/contact?model=Sliding Glass Wardrobe (W-03)')} style={{ cursor: 'pointer' }}>
          <span className="block-label">MODEL W-03</span>
          <h2 className="block-title">Sliding Glass Wardrobe</h2>
          <h3 className="gold-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Seamless Spatial Optimization</h3>
          <p className="block-description">
            Maximize your bedroom floor plan with our premium sliding glass wardrobes. Engineered with space-saving soft-close sliding closet doors and whisper-quiet tracks, these bespoke reflective sliding wardrobes deliver a flawless, high-end aesthetic while optimizing your master bedroom storage.
          </p>
        </div>
      </section>

      {/* Parallax 4: Sliding Laminate Wardrobe */}
      <section className="parallax-section left-shade section-reveal">
        <div className="parallax-bg crop-bottom" style={{ backgroundImage: 'url("/wardrobe/Sliding_Laminate_Ward.jpg")' }}></div>
        <div className="floating-subtitle right reveal-on-scroll">04 / Sliding Laminate</div>
        <div className="small-glass-card left reveal-on-scroll" onClick={() => navigate('/contact?model=Sliding Laminate Wardrobe (W-04)')} style={{ cursor: 'pointer' }}>
          <span className="block-label">MODEL W-04</span>
          <h2 className="block-title">Sliding Laminate Wardrobe</h2>
          <h3 className="gold-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Textured Premium Finishes</h3>
          <p className="block-description">
            Experience exceptional durability with our bespoke sliding laminate wardrobes. Crafted from premium Italian laminates, rich wood grains, and matte nanotech finishes, these scratch-resistant sliding closet doors offer a highly durable, sophisticated, and customizable wardrobe storage solution.
          </p>
        </div>
      </section>

      {/* Parallax 5: Fabric Profile Wardrobe */}
      <section className="parallax-section section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("/wardrobe/fabric_profile_ward.jpg")' }}></div>
        <div className="floating-subtitle left reveal-on-scroll">05 / Fabric Profile</div>
        <div className="small-glass-card right reveal-on-scroll" onClick={() => navigate('/contact?model=Fabric Profile Wardrobe (W-05)')} style={{ cursor: 'pointer' }}>
          <span className="block-label">MODEL W-05</span>
          <h2 className="block-title">Fabric Profile Wardrobe</h2>
          <h3 className="gold-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tactile Sensory Luxury</h3>
          <p className="block-description">
            Introduce warmth into your master suite with our exclusive upholstered fabric profile wardrobes. A pinnacle of high-end wardrobe styling, these luxury tactile closet doors feature premium acoustic textiles encased in minimal frames, delivering a uniquely inviting bespoke bedroom wardrobe finish.
          </p>
        </div>
      </section>





      {/* Parallax 9: The Philosophy */}
      <section className="parallax-section section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("/wardrobe/wardrobe_detail_2.jpeg")' }}></div>
        <div className="small-glass-card center reveal-on-scroll">
          <span className="block-label">Our Ethos</span>
          <h2 className="block-title">Uncompromising Quality</h2>
          <p className="block-description">
            As leading luxury wardrobe manufacturers, we engineer premium custom bedroom furniture designed for a lifetime of use. Every bespoke storage solution and high-quality modular closet is rigorously tested and meticulously finished.
          </p>
          <div className="block-list">
            <div className="block-list-item">
              <h4 className="gold-text">Timeless Luxury Wardrobes</h4>
              <p>Custom-built modern closets crafted to transcend trends and provide superior organizational elegance for generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="contact-block section-reveal">
        <span className="block-label">Your Sanctuary</span>
        <h2 className="block-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Design Your Wardrobe</h2>
        <p className="block-description" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
          Schedule a private consultation with our architectural designers to begin drafting your bespoke storage solution.
        </p>
        <a href="/wardrobe-brochure.pdf" download className="contact-btn">Download Wardrobe Brochure ↓</a>
      </section>

    </div>
  );
}

export default BedroomWardrobes;
