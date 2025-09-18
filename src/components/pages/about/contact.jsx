import React from 'react'

const ContactSupport = () => {
    return (
        <section
            className="py-20 bg-primary-gradient text-primary-foreground"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="text-center max-w-4xl mx-auto"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Ship Your Vehicle?
                    </h2>
                    <p
                        className="text-xl text-primary-foreground/90 mb-8"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Join thousands of satisfied customers who trust us with their valuable vehicles.
                        Get your instant quote today and experience the Olfat Shipping difference.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <button className="px-8 cursor-pointer py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-smooth">
                            Get Instant Quote
                        </button>
                        <button className="px-8 cursor-pointer py-4 border-2 border-primary-foreground/20 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-smooth">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSupport
