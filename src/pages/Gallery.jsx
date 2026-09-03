import React from 'react';

function Gallery() {
  return (
    <div className="min-vh-100 bg-background pt-5 px-4 px-md-5 mx-auto" style={{ maxWidth: '1600px' }}>
      <div className="row g-4 mt-5 pt-5">
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column gap-4">
          <div className="position-relative overflow-hidden" onMouseEnter={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'; e.currentTarget.querySelector('.overlay').style.opacity = '1'; }} onMouseLeave={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; e.currentTarget.querySelector('.overlay').style.opacity = '0'; }}>
            <img loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" className="w-100 h-auto object-cover grayscale" style={{ transition: 'transform 1s' }} alt="Project 1" />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.4)', opacity: 0, transition: 'opacity 0.5s' }}>
              <span className="tracking-widest" style={{ fontSize: '12px' }}>PROJECT ALPHA</span>
            </div>
          </div>
          <div className="position-relative overflow-hidden" onMouseEnter={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; }}>
            <img loading="lazy" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-100 h-auto object-cover grayscale" style={{ transition: 'transform 1s' }} alt="Project 4" />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column gap-4">
           <div className="position-relative overflow-hidden" onMouseEnter={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; }}>
            <img loading="lazy" src="https://images.unsplash.com/photo-1595526114101-276dc87c11fa?auto=format&fit=crop&q=80&w=800" className="w-100 h-auto object-cover grayscale" style={{ transition: 'transform 1s' }} alt="Project 2" />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column gap-4">
           <div className="position-relative overflow-hidden" onMouseEnter={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; }}>
            <img loading="lazy" src="https://images.unsplash.com/photo-1600566753086-00f18efc2294?auto=format&fit=crop&q=80&w=800" className="w-100 h-auto object-cover grayscale" style={{ transition: 'transform 1s' }} alt="Project 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
