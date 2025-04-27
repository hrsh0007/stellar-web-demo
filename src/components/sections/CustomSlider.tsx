
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import 'swiper/css';

const CustomSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "Our stay at LuxeHaven exceeded all expectations. The attention to detail, from the elegant room decor to the personalized service, made our anniversary truly special.",
      author: "Emma & James Thompson",
      role: "Honeymoon Guests",
    },
    {
      id: 2,
      text: "As a frequent business traveler, I've experienced many luxury accommodations, but LuxeHaven stands apart with its exceptional service, convenient amenities, and serene atmosphere.",
      author: "Michael Chen",
      role: "Executive Traveler",
    },
    {
      id: 3,
      text: "Our family vacation was absolutely perfect thanks to the incredible staff and amenities at LuxeHaven. The kids loved the activities while we parents enjoyed some well-deserved relaxation.",
      author: "The Rodriguez Family",
      role: "Family Getaway",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="section-title">Guest Testimonials</h2>
        </ScrollReveal>
        
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-softGray p-8 rounded-lg text-center max-w-2xl mx-auto">
                  <blockquote className="text-xl italic mb-6">"{testimonial.text}"</blockquote>
                  <div className="font-serif text-lg font-semibold">{testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSlider;
