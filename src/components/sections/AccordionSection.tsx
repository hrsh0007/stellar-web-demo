
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from '../ui/ScrollReveal';

const AccordionSection = () => {
  const accordionItems = [
    {
      id: 'item-1',
      question: 'What amenities are included with my stay?',
      answer: 'All of our accommodations include complimentary high-speed WiFi, access to our fitness center and swimming pools, luxury bath products, daily housekeeping service, and 24/7 concierge assistance. Premium rooms and suites also include additional benefits such as welcome champagne, fresh fruit baskets, and exclusive lounge access.',
    },
    {
      id: 'item-2',
      question: 'What is your cancellation policy?',
      answer: 'We offer flexible cancellation policies depending on the rate you book. Standard bookings can be cancelled up to 48 hours prior to arrival for a full refund. Special promotional rates may have different cancellation terms which will be clearly displayed at the time of booking. We recommend purchasing travel insurance for any unforeseen circumstances.',
    },
    {
      id: 'item-3',
      question: 'Is airport transportation available?',
      answer: 'Yes, we provide convenient airport transportation services for our guests. Luxury vehicles and professional drivers are available for both airport pickups and drop-offs. This service can be arranged through our concierge team prior to your arrival. Additional fees may apply based on distance and vehicle type.',
    },
    {
      id: 'item-4',
      question: 'Are pets allowed at your properties?',
      answer: 'We are a pet-friendly establishment and welcome your furry companions in select accommodations. There is a nominal pet fee per stay, and we provide special amenities such as pet beds, food bowls, and treats. Please notify us in advance if you plan to bring a pet so we can ensure you are assigned a suitable room.',
    },
  ];

  return (
    <section className="section bg-softGray">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Accordion type="single" defaultValue="item-1" collapsible>
              {accordionItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
