import { Badge } from '@/components/ui/badge'
import React from 'react'

const AboutHero = () => {
    return (
        <>
            <section
                className="py-14 bg-primary-gradient text-primary-foreground">
                <div className="app_container">
                    <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
                        <Badge
                            variant="outline"
                            className="mb-4 border-primary-foreground/20 text-primary-foreground"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            About Olfat Shipping
                        </Badge>
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                            data-aos="fade-up"
                        >
                            Pioneering Global Vehicle <span className="text-accent">Logistics Solutions</span>
                        </h1>
                        <p
                            className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto"
                            data-aos="fade-up"
                        >
                            For over 6 years, we have been connecting people with their vehicles across continents,
                            making international vehicle shipping simple, secure, and reliable.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutHero
