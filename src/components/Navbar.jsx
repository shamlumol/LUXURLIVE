import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .minimal-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 4%;
          z-index: 1000;
          pointer-events: none; /* Let clicks pass through empty areas */
        }


        /* Hamburger Menu (Always Visible) */
        .luxury-hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 32px;
          height: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          pointer-events: auto;
          z-index: 1001;
          mix-blend-mode: difference;
        }
        
        .hamburger-line {
          height: 2px;
          background-color: white;
          width: 100%;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: right center;
        }
        
        /* Staggered lines for luxury feel */
        .luxury-hamburger:not(.open) .hamburger-line:nth-child(2) {
          width: 75%;
          margin-left: auto;
        }
        .luxury-hamburger:not(.open) .hamburger-line:nth-child(3) {
          width: 50%;
          margin-left: auto;
        }
        
        .luxury-hamburger:hover .hamburger-line {
          width: 100%;
        }

        /* Open State Animations */
        .luxury-hamburger.open .hamburger-line:nth-child(1) {
          transform: rotate(-45deg) translate(-2px, 5px);
          width: 100%;
        }
        .luxury-hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        .luxury-hamburger.open .hamburger-line:nth-child(3) {
          transform: rotate(45deg) translate(-2px, -5px);
          width: 100%;
        }

        /* Full Screen Menu */
        .fullscreen-menu {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background-color: #050505;
          z-index: 999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2.5rem;
          transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), visibility 0.6s;
        }
        
        .menu-item {
          color: white;
          text-decoration: none;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          position: relative;
          opacity: 0.7;
          transition: all 0.4s ease;
        }
        
        .menu-item:hover {
          opacity: 1;
          letter-spacing: 0.15em;
        }

        /* Animated Get Quote Button */
        .btn-quote {
          margin-top: 2rem;
          padding: 18px 45px;
          background: transparent;
          color: #BFA054;
          border: 1px solid #BFA054;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .btn-quote::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: #BFA054;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: -1;
        }
        
        .btn-quote:hover {
          color: #000;
        }
        
        .btn-quote:hover::before {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>

      <nav className="minimal-navbar">
        {/* Left: Minimal Logo (Hidden on Home Page) */}
        <Link
          to="/"
          className="nav-logo"
          onClick={closeMenu}
          style={{
            opacity: isHome ? 0 : 1,
            pointerEvents: isHome ? 'none' : 'auto'
          }}
        >
          <img loading="lazy" decoding="async" src="/logo.png" alt="LuxurLive Kitchens & Wardrobes Logo" style={{ height: '30px', objectFit: 'contain' }} />
        </Link>

        {/* Right: Hamburger Menu (Always Visible) */}
        <button
          className={`luxury-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </nav>

      {/* Full-screen Overlay Menu */}
      <div
        className="fullscreen-menu"
        style={{
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden'
        }}
      >
        <Link to="/about" onClick={closeMenu} className="menu-item">About Us</Link>
        <Link to="/services" onClick={closeMenu} className="menu-item">Services</Link>
        <Link to="/testimonials" onClick={closeMenu} className="menu-item">Testimonials</Link>
        <Link to="/contact" onClick={closeMenu} className="btn-quote">Get Quote</Link>
      </div>
    </>
  );
}

export default Navbar;
