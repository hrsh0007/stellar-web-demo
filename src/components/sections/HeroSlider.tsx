
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop',
      title: 'Experience Luxury',
      subtitle: 'Discover our exceptional accommodations',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2000&auto=format&fit=crop',
      title: 'Breathtaking Views',
      subtitle: 'Wake up to scenic landscapes',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=2000&auto=format&fit=crop',
      title: 'Exquisite Dining',
      subtitle: 'Savor world-class cuisine',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop',
      title: 'Unforgettable Experiences',
      subtitle: 'Create memories that last a lifetime',
    },
  ];

  return (
    <section id="hero" className="relative h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="h-full bg-center bg-cover bg-no-repeat relative" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                <div className={`transform transition-transform duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <h1 className="mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                  <button className="btn-primary">Explore Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
