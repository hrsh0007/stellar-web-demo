import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import { DarkModeToggle } from '@/components/ui/DarkModeToggle';
import HeroSlider from '@/components/sections/HeroSlider';
import ThreeColumnFeatures from '@/components/sections/ThreeColumnFeatures';
import ParallaxSection from '@/components/sections/ParallaxSection';
import PopupSection from '@/components/sections/PopupSection';
import AccordionSection from '@/components/sections/AccordionSection';
import CustomSlider from '@/components/sections/CustomSlider';
import TabbedContent from '@/components/sections/TabbedContent';

const Index = () => {
  useEffect(() => {
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
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Header />
      <DarkModeToggle />
      <main className="flex-grow pt-[74px]">
        <HeroSlider />
        <ThreeColumnFeatures />
        <ParallaxSection />
        <PopupSection />
        <AccordionSection />
        <CustomSlider />
        <TabbedContent />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
