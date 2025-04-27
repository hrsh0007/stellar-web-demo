
import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const ThreeColumnFeatures = () => {
  const features = [
    {
      id: 1,
      icon: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
      title: 'Luxurious Rooms',
      description: 'Experience the epitome of comfort with our elegantly designed rooms featuring premium amenities and breathtaking views.',
    },
    {
      id: 2,
      icon: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
      title: 'Fine Dining',
      description: 'Indulge in culinary excellence at our award-winning restaurants, where our chefs craft exquisite dishes using the finest ingredients.',
    },
    {
      id: 3,
      icon: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop',
      title: 'Wellness & Spa',
      description: 'Rejuvenate your mind, body, and soul with our luxurious spa treatments and wellness activities designed for total relaxation.',
    },
  ];

  return (
    <section id="features" className="section bg-softGray">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="section-title">Our Premium Offerings</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={feature.id}
              delay={index * 200}
              threshold={0.2}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnFeatures;
