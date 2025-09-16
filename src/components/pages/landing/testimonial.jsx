import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Dr. Quentin Weber",
            location: "CEO, Stracke, Connelly and Walter",
            rating: 5,
            text: "Praesentium quis voluptas totam expedita autem qui cupiditate. Voluptas rerum mollitia et dolorum. Minima dolores libero occaecati non",
            initials: "DQW",
            shipment: "BMW X3 2022"
        },
        {
            name: "Khalid Ankunding V",
            location: "CEO, Ortiz, Wuckert and Breitenberg",
            rating: 5,
            text: "Quasi aliquid dolorem ducimus tempora est. Exercitationem ut odit quod architecto accusamus est voluptatum. Ea est minus aliquid ad facere sint. Sed illum sit quod sequi sit eos. Dolore consequatur et tenetur fuga quo doloribus sed.",
            initials: "KAV",
            shipment: "Mercedes S-Class 2023"
        },
        {
            name: "Miss Vallie Hyatt Jr.",
            location: "COO, Dietrich-Hermiston",
            rating: 5,
            text: "Ut dignissimos eum laborum et maxime. Commodi soluta aliquid ea velit et. Magni nobis ipsa qui qui id dicta quidem placeat.",
            initials: "MVHJ",
            shipment: "Toyota Camry 2021"
        },
        {
            name: "Haley Yundt",
            location: "COO, Johns, Lakin and Hane",
            rating: 5,
            text: "Repellendus eaque molestiae quae provident reprehenderit. Sed et voluptas assumenda corporis cumque. Harum quia aut voluptas sit ducimus laudantium ipsum.",
            initials: "HY",
            shipment: "Ford Mustang Classic"
        },
        {
            name: "Lisa Chen",
            location: "San Francisco → Tokyo",
            rating: 5,
            text: "Fantastic experience from start to finish. The pricing was competitive, the service was professional, and my Tesla arrived in Japan without a single scratch. I'll definitely use Olfat Shipping again for future relocations.",
            initials: "LC",
            shipment: "Tesla Model S 2022"
        },
        {
            name: "David Thompson",
            location: "Chicago → Frankfurt",
            rating: 5,
            text: "The level of care and attention to detail was impressive. My Audi was shipped in a secure container, and I received regular updates via their tracking portal. Delivery was prompt and the car was in pristine condition.",
            initials: "DT",
            shipment: "Audi A6 2023"
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? "fill-secondary text-secondary" : "text-muted-foreground"
                    }`}
            />
        ));
    };

    return (
        <section id="testimonials" className="py-14 bg-gradient-subtle" data-aos="fade-up">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        What Our <span className="text-primary">Customers Say</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Trusted by thousands of customers worldwide. Read their shipping experiences.
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-elegant transition-smooth border-primary/10 relative overflow-hidden h-fit"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100 + 300}
                        >
                            <CardContent>
                                <div className="absolute top-4 right-4 opacity-30">
                                    <Quote className="h-8 w-8 text-primary" />
                                </div>

                                <div className="flex items-center mb-4">
                                    <Avatar className="h-12 w-12 mr-4">
                                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                                            {testimonial.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-center mb-3">
                                    {renderStars(testimonial.rating)}
                                </div>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                                    "{testimonial.text}"
                                </p>

                                <div className="border-t border-border pt-3">
                                    <p className="text-xs text-muted-foreground">
                                        <span className="text-primary font-medium">Vehicle:</span> {testimonial.shipment}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div
                    className="text-center mt-16"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <div
                        className="bg-card border border-primary/20 rounded-lg p-8 max-w-3xl mx-auto"
                        data-aos="zoom-in"
                        data-aos-delay="700"
                    >
                        <h3 className="text-xl font-semibold text-foreground mb-4">
                            Join Thousands of Satisfied Customers
                        </h3>
                        <div
                            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-6"
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            <div className="text-center" data-aos="fade-up" data-aos-delay="850">
                                <div className="text-3xl font-bold text-primary">50,000+</div>
                                <div className="text-sm text-muted-foreground">Cars Shipped</div>
                            </div>
                            <div className="text-center" data-aos="fade-up" data-aos-delay="900">
                                <div className="text-3xl font-bold text-secondary">20+</div>
                                <div className="text-sm text-muted-foreground">Countries Served</div>
                            </div>
                            <div className="text-center" data-aos="fade-up" data-aos-delay="950">
                                <div className="text-3xl font-bold text-success">99.8%</div>
                                <div className="text-sm text-muted-foreground">Success Rate</div>
                            </div>
                        </div>
                        <p className="text-muted-foreground" data-aos="fade-up" data-aos-delay="1000">
                            Experience the Olfat Shipping difference. Professional, reliable, and trusted worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Testimonials;