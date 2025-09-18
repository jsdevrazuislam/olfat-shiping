import { ServicesHero } from "@/components/pages/services/service-hero";
import { ServiceCard } from "@/components/pages/services/service-card";

import doorToDoorImage from "@/assets/door-to-door-shipping.jpg";
import enclosedTransportImage from "@/assets/enclosed-transport.jpeg";
import openTransportImage from "@/assets/open-transport.jpeg";
import expeditedShippingImage from "@/assets/expedited-shipping.jpeg";
import internationalShippingImage from "@/assets/international-shipping.jpeg";
import terminalShippingImage from "@/assets/terminal-shipping.jpeg";
import Seo from "@/components/seo";

const services = [
    {
        title: "Door-to-Door Car Shipping",
        description: "The most convenient and popular auto transport service. We pick up your vehicle from your doorstep and deliver it directly to your desired destination. Perfect for busy schedules and maximum convenience.",
        features: [
            "Pickup and delivery at your preferred locations",
            "Real-time tracking and updates throughout transport",
            "Professional and experienced drivers",
            "Comprehensive insurance coverage included",
            "Flexible scheduling to meet your timeline"
        ],
        price: "From $899",
        duration: "5-10 Business Days",
        image: doorToDoorImage
    },
    {
        title: "Enclosed Car Transport",
        description: "Premium protection for luxury, classic, or high-value vehicles. Your car travels in a fully enclosed trailer, protected from weather, road debris, and prying eyes. The ultimate in vehicle protection.",
        features: [
            "Complete protection from weather and road debris",
            "Climate-controlled environment available",
            "Enhanced security and privacy",
            "Perfect for luxury and classic vehicles",
            "White-glove service with detailed inspection reports"
        ],
        price: "From $1,299",
        duration: "7-12 Business Days",
        image: enclosedTransportImage
    },
    {
        title: "Open Car Transport",
        description: "Cost-effective and reliable auto transport solution. Your vehicle travels on an open-air trailer alongside other cars. This is the most economical option while maintaining high safety standards.",
        features: [
            "Most economical shipping option available",
            "Reliable and proven transport method",
            "Faster pickup and delivery times",
            "Suitable for all standard vehicles",
            "Professional handling and care"
        ],
        price: "From $599",
        duration: "3-8 Business Days",
        image: openTransportImage
    },
    {
        title: "Expedited Car Shipping",
        description: "Fast-track your vehicle transport when time is critical. Our expedited service prioritizes your shipment for the quickest possible pickup and delivery, perfect for urgent relocations or time-sensitive needs.",
        features: [
            "Priority scheduling and faster transit times",
            "Dedicated transport with fewer stops",
            "Express pickup within 24-48 hours",
            "Premium customer support and updates",
            "Guaranteed delivery within specified timeframe"
        ],
        price: "From $1,599",
        duration: "1-5 Business Days",
        image: expeditedShippingImage
    },
    {
        title: "International Car Shipping",
        description: "Seamless overseas vehicle transport to destinations worldwide. We handle all customs documentation, port procedures, and international regulations to ensure your car reaches its global destination safely.",
        features: [
            "Worldwide shipping to over 200 countries",
            "Complete customs clearance assistance",
            "Professional port-to-port or door-to-door service",
            "Expert handling of international regulations",
            "Comprehensive marine insurance coverage"
        ],
        price: "From $2,999",
        duration: "15-45 Business Days",
        image: internationalShippingImage
    },
    {
        title: "Terminal-to-Terminal Shipping",
        description: "Budget-friendly option where you drop off and pick up your vehicle at our secure transport terminals. Save money while still receiving professional auto transport service with full insurance coverage.",
        features: [
            "Most affordable shipping option",
            "Secure terminal facilities with 24/7 monitoring",
            "Flexible drop-off and pickup times",
            "Professional vehicle inspection and documentation",
            "Convenient terminal locations nationwide"
        ],
        price: "From $499",
        duration: "4-9 Business Days",
        image: terminalShippingImage
    }
];

const ServicesPage = () => {
    return (
        <>
            <Seo
                title="Services Page Title"
                description="A detailed description of the Home page."
                canonical="https://yourdomain.com/"
                schemaMarkup={{
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: 'Your Site',
                    url: 'https://yourdomain.com/',
                }}
            />
            <ServicesHero />
            <section
                className="py-14"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="app_container">
                    <div
                        className="text-center mb-16"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-6">
                            Our Car Shipping Services
                        </h2>
                        <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Choose from our comprehensive range of professional auto transport services.
                            Each option is designed to meet specific needs while maintaining the highest
                            standards of safety and reliability.
                        </p>
                    </div>

                    <div className="space-y-10">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                <ServiceCard
                                    title={service.title}
                                    description={service.description}
                                    features={service.features}
                                    price={service.price}
                                    duration={service.duration}
                                    image={service.image}
                                    isReversed={index % 2 === 1}
                                    animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                                    delay={index * 150} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="py-14 bg-primary-gradient"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="container mx-auto px-6 text-center">
                    <div
                        className="max-w-4xl mx-auto space-y-8"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Ready to Ship Your Vehicle?
                        </h2>
                        <p
                            className="text-xl text-white/90"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Get an instant quote and book your car shipping service today.
                            Professional, reliable, and affordable auto transport solutions.
                        </p>
                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <button className="px-8 cursor-pointer py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-smooth">
                                Get Free Quote
                            </button>
                            <button className="px-8 cursor-pointer py-4 border-2 border-primary-foreground/20 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-smooth">
                                Call 971564023099
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ServicesPage;