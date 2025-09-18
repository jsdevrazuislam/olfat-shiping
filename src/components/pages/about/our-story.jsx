import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const OurStory = () => {

    const storyTimeline = [
        {
            year: "2008",
            title: "Foundation",
            description: "Founded by Abdul Razeq with a vision to revolutionize international vehicle shipping."
        },
        {
            year: "2012",
            title: "Global Expansion",
            description: "Extended operations to cover major ports across Europe, Asia, and Americas."
        },
        {
            year: "2018",
            title: "Technology Integration",
            description: "Implemented real-time tracking and digital documentation systems."
        },
        {
            year: "2024",
            title: "Industry Leader",
            description: "Now serving 20+ countries with 6+ years of excellence in vehicle logistics."
        }
    ];

    return (
        <>
            <section
                className="py-14 bg-background"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="app_container">
                    <div className="max-w-6xl mx-auto">
                        <div
                            className="text-center mb-16"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <Badge variant="outline" className="mb-4 text-primary border-primary">
                                Our Story
                            </Badge>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                                A Journey of <span className="text-primary">Excellence</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                What started as a vision to simplify international vehicle shipping has grown into
                                a global network trusted by thousands of customers worldwide.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary to-transparent"></div>
                            <div className="space-y-12">
                                {storyTimeline.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                        data-aos-delay={index * 150}
                                    >
                                        <div className={`w-1/2 ${index % 2 === 0 ? 'md:pr-6 text-right' : 'md:pl-6 text-left'}`}>
                                            <Card className="px-4 md:p-6 hover:shadow-soft transition-smooth">
                                                <CardContent className="p-0">
                                                    <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                                                    <h3 className="text-[16px] md:text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                                                    <p className="text-sm md:text-[16px] text-muted-foreground">{item.description}</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md relative z-10"></div>
                                        <div className="w-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurStory
