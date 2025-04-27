
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import ScrollReveal from '../ui/ScrollReveal';

const PopupSection = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<null | {
    title: string;
    content: string;
  }>(null);

  const items = [
    {
      id: 1,
      title: 'Exclusive Packages',
      summary: 'Discover our specially curated packages designed for unforgettable experiences.',
      content: 'Our exclusive packages are meticulously crafted to provide you with the ultimate luxury experience. From romantic getaways to family adventures, each package includes premium accommodations, fine dining experiences, and personalized services tailored to your preferences. Take advantage of our seasonal offers and special promotions for added value and unforgettable memories.'
    },
    {
      id: 2,
      title: 'Concierge Services',
      summary: 'Our dedicated concierge team is available 24/7 to fulfill your every request.',
      content: 'Our highly trained concierge team excels in anticipating your needs and exceeding your expectations. Whether you require restaurant reservations, transportation arrangements, activity bookings, or special occasion planning, our concierge is committed to providing personalized service with attention to detail. Available around the clock, we ensure your stay is seamless and memorable.'
    },
    {
      id: 3,
      title: 'Exclusive Events',
      summary: 'Host remarkable events in our sophisticated venues with professional planning services.',
      content: 'Our venue spaces offer the perfect setting for weddings, corporate gatherings, and special celebrations. With state-of-the-art facilities, gourmet catering options, and breathtaking backdrops, your event will leave a lasting impression. Our expert event planners handle every detail from concept to execution, allowing you to enjoy the occasion stress-free. We pride ourselves on creating bespoke events that reflect your unique vision.'
    },
  ];

  const handleOpenPopup = (item: typeof items[0]) => {
    setActiveItem({
      title: item.title,
      content: item.content,
    });
    setOpen(true);
  };

  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="section-title">Exclusive Services</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <ScrollReveal 
              key={item.id}
              delay={index * 200}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.summary}</p>
              <button
                onClick={() => handleOpenPopup(item)}
                className="flex items-center text-gold hover:text-navy transition-colors"
              >
                Learn More <Plus size={18} className="ml-2" />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{activeItem?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 mb-6">
            <p className="text-gray-600">{activeItem?.content}</p>
          </div>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PopupSection;
