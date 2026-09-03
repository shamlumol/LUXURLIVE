import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <main className="split-layout">
      <Helmet>
        <title>LuxurLive | Premium Modular Kitchens & Luxury Wardrobes</title>
        <meta name="description" content="LuxurLive creates premium, bespoke modular kitchens and architectural wardrobes. Experience the intersection of precision engineering and timeless luxury in Kozhikode." />
        <meta name="keywords" content="Luxury Kitchens, Modular Kitchens, Custom Wardrobes, Bespoke Cabinetry, Modular Kitchens Kozhikode, LuxurLive" />
        <link rel="canonical" href="https://luxurlive.com/" />
        <meta property="og:url" content="https://luxurlive.com/" />
        <meta property="og:title" content="LuxurLive | Premium Modular Kitchens & Luxury Wardrobes" />
        <meta property="og:description" content="LuxurLive creates premium, bespoke modular kitchens and architectural wardrobes. Experience the intersection of precision engineering and timeless luxury in Kozhikode." />
        <link rel="preload" as="image" href="/kitchen-3.jpeg" />
        <link rel="preload" as="image" href="/wardrobe/download (2).jpeg" />
        <link rel="preload" as="image" href="/logo.png" />
      </Helmet>
      <style>{`
        /* Global Reset for this page */
        body { margin: 0; padding: 0; background-color: #050505; overflow-x: hidden; }
        
        .split-layout {
          display: flex;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        /* Common Panel Styles */
        .panel {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: white;
          overflow: hidden;
          transition: flex 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .panel-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-size: cover;
          background-position: center;
          transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 1;
        }

        .panel-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          transition: background 0.8s ease;
          z-index: 2;
        }

        .panel-content {
          position: relative;
          z-index: 10;
          text-align: center;
          opacity: 0.7;
          transition: opacity 0.8s ease, transform 0.8s ease;
          transform: translateY(10px);
        }

        .panel-title {
          font-size: 2.5rem;
          font-weight: 300;
          letter-spacing: 0.15em;
          margin-bottom: 1rem;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .panel-subheading {
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.7);
          line-height: 1.8;
          margin-bottom: 0;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .panel-explore {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 300;
          opacity: 0.7;
        }

        /* Hover Interactions */
        .side-panel {
          flex: 1;
          box-sizing: border-box;
        }
        .side-panel:hover {
          flex: 1.8;
        }
        
        .side-panel:hover .panel-bg {
          transform: scale(1.05);
        }
        
        .side-panel:hover .panel-overlay {
          background: rgba(0, 0, 0, 0.1); 
        }

        .side-panel:hover .panel-content {
          opacity: 1;
          transform: translateY(-50%);
        }
        
        .side-panel:hover .panel-subheading {
          max-height: 100px;
          opacity: 1;
          margin-bottom: 1.5rem;
          margin-top: 1rem;
        }
        
        /* Anchor text to the outer edges so it NEVER hits the glass */
        .panel-content {
          position: absolute;
          top: 50%;
          transform: translateY(calc(-50% + 15px));
          width: calc(50vw - 230px); /* Strictly restrict width to the safe area */
          opacity: 0.7;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .left-panel .panel-content {
          left: 40px;
          text-align: left;
        }
        
        .right-panel .panel-content {
          right: 40px;
          text-align: right;
        }

        /* Center Panel (Glass) */
        .center-panel {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 380px;
          height: 100vh;
          background: rgba(10, 10, 10, 0.4);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-left: 1px solid rgba(255,255,255,0.05);
          border-right: 1px solid rgba(255,255,255,0.05);
          z-index: 20;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          pointer-events: auto; /* Catch hovers to act as a neutral zone */
        }

        .center-top {
          text-align: center;
          margin-top: 15vh;
        }

        .brand-name {
          font-size: 3.5rem;
          font-weight: 300;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .brand-subtitle {
          font-size: 9px;
          letter-spacing: 0.4em;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
        }

        .brand-statement {
          font-size: 14px;
          font-weight: 300;
          line-height: 2;
          color: rgba(255,255,255,0.7);
          text-align: center;
          max-width: 400px;
          margin: 0 auto 20vh auto;
        }

        /* Mobile Layout */
        @media (max-width: 992px) {
          .split-layout {
            flex-direction: column;
            height: auto;
            min-height: 100vh;
          }
          
          .center-panel {
            position: relative;
            left: 0;
            top: 0;
            transform: none;
            width: 100%;
            height: auto;
            padding: 4rem 1rem;
            justify-content: center;
            border: none;
            pointer-events: auto;
          }
          
          .center-top {
            margin-top: 0;
            margin-bottom: 2rem;
          }
          
          .brand-statement {
            margin-bottom: 0;
          }
          
          .side-panel {
            flex: none;
            width: 100%;
            height: 50vh;
            min-height: 400px;
          }
          
          .panel-content {
            width: 80%;
            left: 10% !important;
            right: 10% !important;
            text-align: center !important;
          }
          
          .side-panel:hover {
            flex: none; /* Disable expansion on mobile */
          }
          
          .panel-content {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* LEFT: Kitchens */}
      <Link to="/modular-kitchens" className="panel side-panel left-panel">
        <div className="panel-bg" style={{ backgroundImage: 'url("/kitchen-3.jpeg")' }}></div>
        <div className="panel-overlay"></div>
        <div className="panel-content">
          <h2 className="panel-title">Modular Kitchens</h2>
          <div className="panel-subheading">Sculptural design meets precision engineering for the modern culinary space.</div>
          <span className="panel-explore">Explore</span>
        </div>
      </Link>

      {/* CENTER: Brand */}
      <div className="panel center-panel">
        <div className="center-top">
          <img loading="eager" decoding="async" src="/logo.png" alt="LuxurLive Premium Modular Kitchens and Wardrobes Logo" className="brand-name" style={{ height: '60px', objectFit: 'contain', margin: '0 auto' }} />
          <div className="brand-subtitle">Kitchens &middot; Wardrobes</div>
          <div style={{ width: '40px', height: '2px', backgroundColor: '#cc0000', margin: '0.8rem auto 0' }}></div>
        </div>
        <div className="brand-statement">
          Where Craftsmanship Meets Luxury Living.<br />
          Bespoke kitchens and architectural wardrobes.<br />
          Precision engineering and timeless aesthetics.
        </div>
      </div>

      {/* RIGHT: Wardrobes */}
      <Link to="/wardrobes" className="panel side-panel right-panel">
        <div className="panel-bg" style={{ backgroundImage: 'url("/wardrobe/download (2).jpeg")' }}></div>
        <div className="panel-overlay"></div>
        <div className="panel-content">
          <h2 className="panel-title">Wardrobes</h2>
          <div className="panel-subheading">Bespoke storage designed to protect and display with architectural elegance.</div>
          <span className="panel-explore">Explore</span>
        </div>
      </Link>
    </main>
  );
}

export default Home;
