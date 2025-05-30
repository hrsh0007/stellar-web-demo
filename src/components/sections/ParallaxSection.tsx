
import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const ParallaxSection = () => {
  return (
    <section className="relative">
      <div 
        className="parallax"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-navy bg-opacity-60"></div>
        <div className="container mx-auto py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <ScrollReveal threshold={0.3}>
              <h2 className="mb-6 text-white transform transition-transform hover:scale-105">Experience True Luxury</h2>
            </ScrollReveal>
            <ScrollReveal delay={200} threshold={0.3}>
              <p className="text-xl mb-8">
                Nestled in the heart of paradise, our award-winning resort offers an unparalleled blend of luxury, comfort, and natural beauty. Every detail is meticulously crafted to provide an unforgettable experience.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400} threshold={0.3}>
              <button className="bg-gold text-navy px-8 py-3 font-medium transition-all hover:bg-opacity-90 hover:scale-105">
                Discover More
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
