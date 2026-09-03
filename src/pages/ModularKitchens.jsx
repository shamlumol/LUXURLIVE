import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function ModularKitchens() {
  const observerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    // Scroll Reveal Observer
    const elements = document.querySelectorAll('.reveal-on-scroll, .section-reveal');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <main className="bg-black overflow-hidden" style={{ minHeight: '100vh', color: 'white' }}>
      <Helmet>
        <title>Premium Modular Kitchens & Custom Designs | LuxurLive</title>
        <meta name="description" content="Explore LuxurLive's bespoke modular kitchens. From premium PU finishes to wood veneer and acrylic, we blend intelligent layouts with high-end cabinetry for luxury living in Kozhikode." />
        <meta name="keywords" content="Modular Kitchens, Luxury Kitchens, Premium Cabinetry, Custom Kitchen Layouts, PU Finish Kitchen, Veneer Finish Kitchen, Island Kitchen, Acrylic Finish Kitchen, Modern Kitchen Design, Calicut Modular Kitchens, Bespoke Kitchens" />
        <link rel="canonical" href="https://luxurlive.com/modular-kitchens" />
        <link rel="preload" as="image" href="/kitchen-feature.jpeg" />
        <meta property="og:url" content="https://luxurlive.com/kitchens" />
        <meta property="og:title" content="Premium Modular Kitchens | LuxurLive" />
        <meta property="og:description" content="Explore our bespoke modular kitchens featuring high-end finishes, intelligent layouts, and sophisticated cabinetry tailored for luxury living." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Modular Kitchens | LuxurLive" />
        <meta name="twitter:description" content="Explore our bespoke modular kitchens featuring high-end finishes, intelligent layouts, and sophisticated cabinetry." />
      </Helmet>
      <style>{`
        body { margin: 0; background-color: #050505; overflow-x: hidden; }
        
        /* Typography System */
        h1, h2, h3, h4 { font-weight: 300; }
        .gold-text { color: #BFA054; }
        
        /* Hero Section */
        .kitchen-hero {
          position: relative;
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        
        .hero-bg {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
          background-image: url("/kitchen-feature.jpeg");
          background-size: cover; background-position: center; 
          filter: brightness(0.6) contrast(1.1); z-index: 1; 
        }
        .hero-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%); 
          z-index: 2; 
        }
        .hero-content { position: relative; z-index: 10; padding-top: 80px; }
        .hero-title { font-size: clamp(3rem, 7vw, 5rem); letter-spacing: 0.15em; text-transform: uppercase; font-weight: 300; }

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
          background-position: center;
          /* Use fixed attachment for native CSS parallax without scaling up the container */
          background-attachment: fixed;
          image-rendering: high-quality;
          -webkit-font-smoothing: antialiased;
          z-index: 0;
        }
        
        /* Global Black Shade for all Parallax Backgrounds */
        .parallax-section::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.15);
          z-index: 1;
        }
        
        /* Exception for specific sections to remain bright */
        .parallax-section.no-shade::before {
          background: transparent;
        }

        /* Right-side gradient shade */
        .parallax-section.right-shade::before {
          background: linear-gradient(to right, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%);
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
        
        .small-glass-card.left { margin-left: 10%; margin-right: auto; }
        .small-glass-card.right { margin-left: auto; margin-right: 10%; }
        .small-glass-card.center { margin: 0 auto; }

        /* Floating Subtitles for opposite side */
        .floating-subtitle {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.3);
          font-size: 22px;
          letter-spacing: 0.6em;
          text-transform: uppercase;
          z-index: 5;
          pointer-events: none;
        }
        .floating-subtitle.right { right: 10%; text-align: right; }
        .floating-subtitle.left { left: 10%; text-align: left; }

        /* Typography inside glass and splits */
        .block-label {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          color: #BFA054;
        }
        
        .block-title {
          font-size: 2rem;
          font-weight: 300;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
          line-height: 1.3;
        }
        
        .block-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          font-size: 14px;
          font-weight: 300;
          margin-bottom: 0;
        }
        
        .block-list { margin-top: 1.5rem; }
        .block-list-item { margin-bottom: 1.5rem; }
        .block-list-item h4 { font-weight: 300; font-size: 1.1rem; color: #fff; margin-bottom: 0.3rem; letter-spacing: 0.1em; }
        .block-list-item p { color: rgba(255, 255, 255, 0.6); font-size: 13px; line-height: 1.6; margin: 0; }
        
        /* Footer Section */
        .contact-block {
          background-color: #050505;
          padding: 15vh 5%;
          text-align: center;
          position: relative;
          z-index: 10;
        }
        
        .btn-luxury {
          background: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,0.3);
          padding: 18px 45px;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.4s ease;
          display: inline-block;
          margin-top: 40px;
        }
        .btn-luxury:hover {
          border-color: #BFA054;
          color: #BFA054;
        }

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

        @media (max-width: 768px) {
          .kitchen-hero, .parallax-section {
            min-height: 100vh !important;
            height: 100vh !important;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
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
            font-size: 1rem;
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


        }
      `}</style>

      {/* Hero Section */}
      <section className="kitchen-hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content reveal-on-scroll">
          <h1 className="hero-title">MODULAR KITCHEN</h1>
        </div>
      </section>

      {/* Parallax 0: Introduction */}
      <section className="parallax-section section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("/introduction_kitchen.jpeg")' }}></div>
        <div className="small-glass-card center reveal-on-scroll">
          <span className="block-label">Welcome</span>
          <h2 className="block-title">Luxury Living</h2>
          <h3 className="gold-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Beyond the Kitchen</h3>
          <p className="block-description">
            At LuxurLive, we design more than just kitchens — we create premium living experiences tailored to your unique taste. Every model in our bespoke collection is thoughtfully curated, seamlessly bringing together high-end finishes, intelligent layouts, and masterful craftsmanship.
          </p>
        </div>
      </section>

      {/* Parallax 1: Introduction */}
      <section className="parallax-section section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("/veneer_finish_kitchen.jpeg")' }}></div>
        <div className="floating-subtitle right reveal-on-scroll">01 / Veneer Finish</div>
        <div className="small-glass-card left reveal-on-scroll" onClick={() => navigate('/contact?model=Veneer Finish Kitchen (K-03)')} style={{ cursor: 'pointer' }}>
          <span className="block-label">Model K-03</span>
          <h2 className="block-title">Veneer Finish Kitchen</h2>
          <h3 className="gold-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Natural Wood Elegance</h3>
          <p className="block-description">
            Bring the warmth of nature indoors with our premium Veneer Finish Kitchen. Featuring distinctive natural wood grains and rich textures, this bespoke modular kitchen perfectly balances organic elegance with highly durable, modern architectural design.
          </p>
        </div>
      </section>

      {/* Parallax 2: Collection */}
      <section className="parallax-section section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("/pu_finish_kitchen.jpeg")' }}></div>
        <div className="floating-subtitle left reveal-on-scroll">02 / PU Finish</div>
        <div className="small-glass-card right reveal-on-scroll" onClick={() => navigate('/contact?model=PU Finished Kitchen (K-02)')} style={{ cursor: 'pointer' }}>
          <span className="block-label">Model K-02</span>
          <h2 className="block-title">PU Finished Kitchen</h2>
          <h3 className="gold-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Seamless & Durable</h3>
          <p className="block-description">
            Experience flawless elegance with our PU Finished Kitchen. Coated with premium Polyurethane (PU), this model offers a luxurious, highly durable, and moisture-resistant surface. The seamless finish not only elevates your culinary space's aesthetic but also ensures long-lasting resilience against daily wear.
          </p>
        </div>
      </section>

      {/* Parallax 3: Design */}
      <section className="parallax-section section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("/acrylic_kitchen.jpeg")' }}></div>

        <div className="floating-subtitle right reveal-on-scroll">03 / Acrylic Finish</div>
        <div className="small-glass-card left reveal-on-scroll" onClick={() => navigate('/contact?model=Acrylic Finish Kitchen (K-04)')} style={{ cursor: 'pointer' }}>
          <span className="block-label">Model K-04</span>
          <h2 className="block-title">Acrylic Finish Kitchen</h2>
          <h3 className="gold-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Ultra-Modern High Gloss</h3>
          <p className="block-description">
            Achieve a stunning, ultra-modern look with our premium Acrylic Finish Kitchen. Boasting a high-gloss, mirror-like surface, this bespoke modular kitchen design reflects light beautifully to create a bright and spacious feel. Highly resistant to scratches and fading, the acrylic finish ensures your luxury kitchen remains vibrant and flawless for years.
          </p>
        </div>
      </section>

      {/* Parallax 4: Materials 1 */}
      <section className="parallax-section right-shade section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("/Island_Kitchen.jpeg")' }}></div>
        <div className="floating-subtitle left reveal-on-scroll">04 / Island Kitchen</div>
        <div className="small-glass-card right reveal-on-scroll" onClick={() => navigate('/contact?model=Bespoke Island Kitchen (K-01)')} style={{ cursor: 'pointer' }}>
          <span className="block-label">Model K-01</span>
          <h2 className="block-title">Bespoke Island Kitchen</h2>
          <h3 className="gold-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>The Ultimate Centerpiece</h3>
          <p className="block-description">
            Elevate your home with our premium luxury Island Kitchen. Designed as the ultimate centerpiece for modern, spacious open-plan layouts, this bespoke modular kitchen seamlessly blends gourmet cooking functionality with a highly social, elegant dining space.
          </p>
        </div>
      </section>

      {/* Parallax 5: Materials 2 */}
      <section className="parallax-section section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("/laminate_kitchen.jpeg")' }}></div>
        <div className="floating-subtitle right reveal-on-scroll">05 / Laminate Finish</div>
        <div className="small-glass-card left reveal-on-scroll" onClick={() => navigate('/contact?model=Laminate Kitchen (K-05)')} style={{ cursor: 'pointer' }}>
          <span className="block-label">Model K-05</span>
          <h2 className="block-title">Laminate Kitchen</h2>
          <h3 className="gold-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Resilient & Versatile</h3>
          <p className="block-description">
            Discover the perfect blend of durability and luxury with our Laminate Finish Kitchen. Engineered for everyday resilience, this premium modular kitchen is highly resistant to heat, scratches, and moisture. Available in a vast array of bespoke textures and colors, the laminate finish offers unparalleled design flexibility for your modern home.
          </p>
        </div>
      </section>

      {/* Parallax 6: Countertops */}
      <section className="parallax-section section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("/Glass_Shutter_Kitchen.jpeg")' }}></div>
        <div className="floating-subtitle left reveal-on-scroll">06 / Glass Shutter Finish</div>
        <div className="small-glass-card right reveal-on-scroll" onClick={() => navigate('/contact?model=Glass Shutter Kitchen (K-06)')} style={{ cursor: 'pointer' }}>
          <span className="block-label">Model K-06</span>
          <h2 className="block-title">Glass Shutter Kitchen</h2>
          <h3 className="gold-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sleek Visual Lightness</h3>
          <p className="block-description">
            Introduce unparalleled sophistication into your home with our premium Glass Shutter Kitchen. Designed to create a sleek, reflective visual lightness, this luxury modular kitchen showcases flawless glass-fronted cabinetry. The elegant transparent and frosted glass finishes naturally expand your space, embodying contemporary architectural character and bespoke kitchen craftsmanship.
          </p>
        </div>
      </section>

      {/* Parallax 7: Craftsmanship Quote */}
      <section className="parallax-section section-reveal">
        <div className="parallax-bg" style={{ backgroundImage: 'url("/Craftsmanship.jpeg")' }}></div>
        <div className="small-glass-card center reveal-on-scroll" style={{ width: '450px' }}>
          <span className="block-label" style={{ textAlign: 'center', display: 'block' }}>Craftsmanship</span>
          <p className="block-description" style={{ fontStyle: 'italic', fontSize: '16px', textAlign: 'center', lineHeight: '2' }}>
            "From the first design concept to the selection of the final finish, every detail is approached with care. Our philosophy combines aesthetics with innovation."
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="contact-block">
        <div className="reveal-on-scroll">
          <h2 className="block-title mb-4" style={{ margin: '0 auto', maxWidth: '600px', fontSize: '2.5rem' }}>Create Your Signature Kitchen</h2>
          <p className="block-description mb-4" style={{ fontStyle: 'italic', color: '#BFA054' }}>
            LuxurLive — Where Craftsmanship Meets Luxury Living.
          </p>
          <p className="block-description" style={{ fontSize: '13px', maxWidth: '400px', margin: '0 auto' }}>
            Download our exclusive kitchen brochure to explore our full range of bespoke designs, premium finishes, and luxury architectural solutions tailored for your home.
          </p>
          <a href="/kitchen-brochure.pdf" download className="btn-luxury">Download Kitchen Brochure ↓</a>
        </div>
      </section>

    </main>
  );
}

export default ModularKitchens;
