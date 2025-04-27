import React, { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { Button } from '@/components/ui/button';

// Rename the interface to avoid naming conflict with the component
interface TabContentData {
  title: string;
  description: string;
  image: string;
}

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState<string>('accommodations');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const tabs = [
    {
      id: 'accommodations',
      label: 'Accommodations',
      content: {
        title: 'Luxurious Accommodations',
        description: 'Experience the pinnacle of luxury in our meticulously designed rooms and suites. Each space is thoughtfully appointed with premium furnishings, high-end amenities, and breathtaking views, ensuring a stay of unparalleled comfort and elegance.',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop',
      },
    },
    {
      id: 'dining',
      label: 'Dining',
      content: {
        title: 'Exquisite Dining Experiences',
        description: 'Indulge in a culinary journey at our award-winning restaurants. Our talented chefs craft masterpieces using the finest local and imported ingredients, offering a diverse range of international cuisines complemented by an extensive selection of wines and spirits.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop',
      },
    },
    {
      id: 'spa',
      label: 'Spa & Wellness',
      content: {
        title: 'Rejuvenating Spa Treatments',
        description: 'Our spa sanctuary offers a haven of tranquility where ancient healing traditions meet modern wellness practices. Choose from a comprehensive menu of treatments designed to relax, rejuvenate, and restore balance to your mind, body, and spirit.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop',
      },
    },
    {
      id: 'activities',
      label: 'Activities',
      content: {
        title: 'Exciting Activities & Excursions',
        description: "Discover a world of adventure and exploration with our curated selection of activities and excursions. From water sports and guided nature walks to cultural tours and exclusive experiences, there's something for every interest and age group.",
        image: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1000&auto=format&fit=crop',
      },
    },
  ];

  return (
    <section className="section bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="section-title text-foreground">Explore Our Offerings</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center border-b border-border mb-8">
            {tabs.map((tab, index) => (
              <ScrollReveal key={tab.id} delay={index * 100}>
                <button
                  className={`px-6 py-3 font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'text-gold border-b-2 border-gold'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  {tab.label}
                </button>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
        
        {tabs.map((tab) => (
          <TabContent
            key={tab.id}
            isActive={activeTab === tab.id}
            content={tab.content}
            isHovered={hoveredTab === tab.id}
          />
        ))}
      </div>
    </section>
  );
};

const TabContent: React.FC<{ 
  isActive: boolean; 
  content: TabContentData;
  isHovered: boolean;
}> = ({ isActive, content, isHovered }) => {
  if (!isActive) return null;
  
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
      <ScrollReveal delay={200}>
        <div className="transition-all duration-300">
          <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">{content.title}</h3>
          <p className="text-muted-foreground mb-6">{content.description}</p>
          <Button 
            className="hover:scale-105 transition-transform"
            variant="default"
          >
            Learn More
          </Button>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <div className={`rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ${
          isHovered ? 'scale-[1.02]' : ''
        }`}>
          <img src={content.image} alt={content.title} className="w-full h-full object-cover" />
        </div>
      </ScrollReveal>
    </div>
  );
};

export default TabbedContent;
