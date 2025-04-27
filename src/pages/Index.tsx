
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/sections/HeroSlider';
import ThreeColumnFeatures from '@/components/sections/ThreeColumnFeatures';
import ParallaxSection from '@/components/sections/ParallaxSection';
import PopupSection from '@/components/sections/PopupSection';
import AccordionSection from '@/components/sections/AccordionSection';
import CustomSlider from '@/components/sections/CustomSlider';
import TabbedContent from '@/components/sections/TabbedContent';

const Index = () => {
  useEffect(() => {
    // Add scroll event listener for scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[74px]">
        {/* Hero Slider */}
        <HeroSlider />
        
        {/* Three Column Features */}
        <ThreeColumnFeatures />
        
        {/* Parallax Section */}
        <ParallaxSection />
        
        {/* Popup Section */}
        <PopupSection />
        
        {/* Accordion Section */}
        <AccordionSection />
        
        {/* Custom Slider */}
        <CustomSlider />
        
        {/* Tabbed Content */}
        <TabbedContent />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
