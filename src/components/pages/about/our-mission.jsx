import { Badge } from '@/components/ui/badge'
import { CheckCircle } from 'lucide-react'
import { Globe2 } from 'lucide-react'
import React from 'react'

const OurMission = () => {
    return (
        <section
            className="md:py-14 bg-muted/30"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="app_container">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 md:gap-12 items-center">

                    <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                    >
                        <Badge variant="outline" className="mb-4 text-primary border-primary">
                            Our Mission
                        </Badge>
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            Connecting Lives Through <span className="text-primary">Reliable Transport</span>
                        </h2>
                        <p
                            className="text-lg text-muted-foreground mb-8"
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            Our mission is to bridge continents by providing the most reliable, efficient,
                            and cost-effective vehicle shipping solutions. We believe that distance should
                            never be a barrier to owning the vehicle of your dreams.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Ensure safe and timely delivery of every vehicle",
                                "Provide transparent and competitive pricing",
                                "Maintain highest standards of customer service",
                                "Continuously innovate our logistics processes"
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3"
                                    data-aos="fade-up"
                                    data-aos-delay={400 + index * 100}
                                >
                                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                                    <span className="text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className="relative hidden lg:block"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <div className="w-full h-96 bg-gradient-subtle rounded-2xl p-8 flex items-center justify-center">
                            <div
                                className="text-center"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            >
                                <Globe2 className="h-16 w-16 text-primary mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-foreground mb-2">Global Network</h3>
                                <p className="text-muted-foreground">
                                    Spanning across 20+ countries with trusted partnerships worldwide
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default OurMission
