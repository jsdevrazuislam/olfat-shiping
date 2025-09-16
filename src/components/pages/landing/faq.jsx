import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does international car shipping take?",
      answer: "Shipping times vary by destination. Typically, ocean freight takes 2-6 weeks depending on the route. USA to Europe: 2-3 weeks, USA to Asia: 3-4 weeks, USA to Australia: 4-6 weeks. We provide detailed timelines for your specific route during booking."
    },
    {
      question: "What documents do I need for international car shipping?",
      answer: "Required documents include: Original vehicle title, Valid driver's license, Vehicle registration, Insurance documents, and Import/export permits (we can help arrange these). Additional documents may be required based on destination country regulations."
    },
    {
      question: "Is my vehicle insured during transport?",
      answer: "Yes, all vehicles are fully insured during transport. We provide comprehensive marine cargo insurance that covers your vehicle from pickup to delivery. Our insurance coverage includes protection against damage, theft, and general average."
    },
    {
      question: "Can I ship personal items in my car?",
      answer: "Generally, no personal items should be left in the vehicle for international shipping due to customs regulations. However, some destinations may allow certain items. We'll provide specific guidelines based on your destination country's customs requirements."
    },
    {
      question: "What's the difference between container and roll-on/roll-off shipping?",
      answer: "Container shipping (enclosed) offers maximum protection - your car is loaded into a sealed container. Roll-on/Roll-off (RoRo) is more economical - cars are driven onto the ship and secured on deck. We recommend container shipping for luxury or classic vehicles."
    },
    {
      question: "How do I prepare my car for international shipping?",
      answer: "Preparation includes: Clean the vehicle inside and out, Remove personal items, Ensure fuel level is 1/4 tank or less, Disable car alarms, Remove loose accessories, Document existing condition with photos, and ensure all fluids are at proper levels."
    },
    {
      question: "What are the costs involved in car shipping?",
      answer: "Costs depend on destination, vehicle size, shipping method, and season. Our quotes include ocean freight, documentation, port charges, and basic insurance. Additional costs may include customs duties, taxes, and destination port fees (varies by country)."
    },
    {
      question: "Can I track my vehicle during shipping?",
      answer: "Yes! We provide 24/7 tracking through our online portal. You'll receive updates when your vehicle is collected, arrives at origin port, departs, and arrives at destination port. We also provide vessel tracking information."
    }
  ];

  return (
    <section id="faq" className="py-14 bg-background" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our international car shipping services
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card hover:shadow-soft transition-smooth"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 300}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-foreground font-semibold pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16" data-aos="zoom-in" data-aos-delay="600">
          <p className="text-muted-foreground mb-6">
            Still have questions? Our shipping experts are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 gradient-primary text-white font-medium rounded-md hover:shadow-elegant transition-smooth"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              Contact Our Experts
            </a>
            <a
              href="tel:+971564023099"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium rounded-md transition-smooth"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              Call: +971564023099
            </a>
          </div>
        </div>
      </div>
    </section>

  );
};

export default FAQ;