import { Badge } from '@/components/ui/badge';
import React from 'react'

const HowWeWork = () => {
    const workProcess = [
        {
            step: "01",
            title: "Quote Request",
            description: "Submit your vehicle details and destination for instant quote."
        },
        {
            step: "02",
            title: "Documentation",
            description: "We handle all customs paperwork and export documentation."
        },
        {
            step: "03",
            title: "Collection",
            description: "Professional team collects your vehicle from specified location."
        },
        {
            step: "04",
            title: "Shipping",
            description: "Secure transport via our trusted shipping network partners."
        },
        {
            step: "05",
            title: "Delivery",
            description: "Safe delivery to destination port with full customs clearance."
        }
    ];

    return (
        <section
            className="py-14 bg-muted/30"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="app_container">
                <div
                    className="text-center mb-16"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <Badge variant="outline" className="mb-4 text-primary border-primary">
                        How We Work
                    </Badge>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Simple <span className="text-primary">5-Step Process</span>
                    </h2>
                    <p
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Our streamlined process ensures your vehicle reaches its destination safely and on time,
                        with complete transparency at every step.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {workProcess.map((process, index) => (
                            <div
                                key={index}
                                className="relative text-center"
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                                    {process.step}
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-3">{process.title}</h3>
                                <p className="text-sm text-muted-foreground">{process.description}</p>
                                {index < workProcess.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary to-transparent transform translate-x-4"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWeWork
