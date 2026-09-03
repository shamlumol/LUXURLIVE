import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Contact() {
  const [searchParams] = useSearchParams();
  const modelFromUrl = searchParams.get('model') || '';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = `Hello LuxurLive,\n\nI would like to request a consultation.`;
    if (modelFromUrl) {
      text += `\nI am specifically interested in: *${modelFromUrl}*`;
    }
    text += `\n\n*Name:* ${formData.firstName} ${formData.lastName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Interest:* ${formData.interest}\n*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/919995611197?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Simple reveal on load
  useEffect(() => {
    document.querySelectorAll('.reveal-on-load').forEach(el => {
      setTimeout(() => el.classList.add('visible'), 100);
    });
  }, []);

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact LuxurLive | Private Consultations in Kozhikode</title>
        <meta name="description" content="Schedule a private consultation with LuxurLive in Kozhikode, Kerala to discuss your bespoke kitchen and wardrobe needs." />
        <meta name="keywords" content="Contact LuxurLive, Private Consultation, Kitchen Design Consultation, Bespoke Wardrobes Kozhikode, Calicut Architecture" />
        <link rel="canonical" href="https://luxurlive.com/contact" />
        <meta property="og:url" content="https://luxurlive.com/contact" />
        <meta property="og:title" content="Contact LuxurLive | Private Consultation" />
        <meta property="og:description" content="Schedule a private consultation with LuxurLive in Kozhikode to discuss your bespoke kitchens and wardrobes." />
      </Helmet>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');

        /* Global Reset for this page */
        .contact-page {
          background-color: #050505;
          color: #ffffff;
          overflow-x: hidden;
          width: 100vw;
          min-height: 100vh;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          display: flex;
        }

        /* --- THE SPLIT LAYOUT --- */
        .split-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #050505;
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        
        .split-left-image {
          flex: 1;
          position: relative;
          min-height: 50vh;
        }
        
        .split-left-map {
          flex: 0.8;
          display: flex;
          flex-direction: column;
          padding: 3rem 4vw;
        }

        .map-wrapper {
          flex: 1;
          width: 100%;
          min-height: 250px;
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
        }

        .split-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 120px 8vw 5vw 8vw; /* Accommodate navbar */
          background-color: #0a0a0a;
          position: relative;
        }

        /* Image Handling */
        .full-bg-image {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          filter: brightness(0.7) contrast(1.1);
        }

        /* Typography */
        .serif-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 4vw, 5rem);
          font-weight: 400;
          letter-spacing: 0.05em;
          line-height: 1.1;
          color: #e5d3b3; 
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .paragraph {
          font-size: 0.95rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          margin-bottom: 3rem;
          max-width: 500px;
        }

        /* Form Styling */
        .luxury-form {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          max-width: 600px;
          width: 100%;
        }
        
        .form-row {
          display: flex;
          gap: 2rem;
        }

        .form-group {
          position: relative;
          flex: 1;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-size: 0.85rem;
          font-family: 'Helvetica Neue', sans-serif;
          letter-spacing: 0.1em;
          padding: 0.8rem 0;
          text-transform: uppercase;
          transition: border-color 0.3s ease;
          outline: none;
          border-radius: 0;
          -webkit-appearance: none;
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: rgba(255,255,255,0.3);
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-bottom: 1px solid #e5d3b3;
        }
        
        /* Select specific */
        .form-select {
          cursor: pointer;
          color: rgba(255,255,255,0.3);
        }
        .form-select option {
          background-color: #0a0a0a;
          color: #fff;
        }
        .form-select:focus, .form-select:valid {
          color: #fff;
        }

        /* Button */
        .submit-btn {
          margin-top: 1rem;
          background: transparent;
          border: 1px solid rgba(229, 211, 179, 0.4);
          color: #e5d3b3;
          padding: 1.2rem 3rem;
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s ease;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .submit-btn:hover {
          background: #e5d3b3;
          color: #0a0a0a;
          border-color: #e5d3b3;
        }
        
        .btn-arrow {
          transition: transform 0.3s ease;
        }
        .submit-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        /* Animations */
        .reveal-on-load {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease, transform 1s ease;
        }
        .reveal-on-load.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .contact-page {
            flex-direction: column;
          }
          .split-left {
            min-height: 400px;
            flex: none;
          }
          .split-right {
            padding: 4rem 2rem 5rem 2rem;
          }
          .form-row {
            flex-direction: column;
            gap: 2.5rem;
          }
        }
      `}</style>

      {/* LEFT: Image & Map */}
      <div className="split-left">
        <div className="split-left-image">
          <img loading="lazy" decoding="async" src="/contact_kitchen.jpeg" alt="LuxurLive Bespoke Modular Kitchen Consultation" className="full-bg-image" />
        </div>

        <div className="split-left-map reveal-on-load">
          <h2 className="serif-heading" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#BFA054' }}>Visit Our Showroom</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem', maxWidth: '80%' }}>
            C 58, Calicut architect collective building, 64/2132,<br />
            St Vincent Colony Rd, near Malabar Royal Pine Apartment,<br />
            St. Vincent Colony, Kozhikode, Kerala 673006
          </p>
          <div className="map-wrapper">
            <iframe
              src="https://maps.google.com/maps?q=luxurlivestore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(110%) grayscale(40%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Showroom Location Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* RIGHT: Contact Form */}
      <div className="split-right">

        <div className="reveal-on-load" style={{ transitionDelay: '0.1s' }}>
          <h1 className="serif-heading">Begin Your Project</h1>
          <p className="paragraph">
            Schedule a private consultation with our architectural design team to discuss your vision, explore premium materials, and begin shaping your space.
          </p>
        </div>

        <form className="luxury-form reveal-on-load" style={{ transitionDelay: '0.2s' }} onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input" placeholder="First Name" aria-label="First Name" required />
            </div>
            <div className="form-group">
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input" placeholder="Last Name" aria-label="Last Name" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="Email Address" aria-label="Email Address" required />
            </div>
            <div className="form-group">
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="Phone Number" aria-label="Phone Number" />
            </div>
          </div>

          <div className="form-group">
            <select name="interest" value={formData.interest} onChange={handleChange} className="form-select" aria-label="Area of Interest" required>
              <option value="" disabled hidden>Area of Interest</option>
              <option value="Modular Kitchen">Modular Kitchen</option>
              <option value="Luxury Wardrobe">Luxury Wardrobe</option>
              <option value="Full Kitchen & Wardrobe Solution">Full Kitchen & Wardrobe Solution</option>
            </select>
          </div>

          <div className="form-group">
            <textarea name="message" value={formData.message} onChange={handleChange} className="form-textarea" placeholder="Tell us about your project..." aria-label="Message" rows="4" style={{ resize: 'none' }}></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <span>Request Consultation</span>
            <span className="btn-arrow">→</span>
          </button>
        </form>

        {/* Small contact details at bottom */}
        <div className="reveal-on-load" style={{ transitionDelay: '0.3s', marginTop: '4rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
          <div>
            <span style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Email</span>
            <a href="mailto:info@luxurlive.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.85rem' }}>info@luxurlive.com</a>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Phone</span>
            <a href="tel:+9995611197" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.85rem' }}>+91 999 561 1197</a>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Social</span>
            <a href="https://www.instagram.com/luxurlive/" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Contact;
