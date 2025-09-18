import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, Clock } from "lucide-react";

const ContactHero = () => {


    return (
        <section className="relative bg-primary-gradient text-white py-8 overflow-hidden">
            <div className="app_container">
                <div className="max-w-4xl mx-auto text-center">
                     <Badge
                            variant="outline"
                            className="border-primary-foreground/20 text-primary-foreground"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            Contact Us
                        </Badge>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
                            Ship Your Car with
                            <span className="block text-accent"> Confidence</span>
                        </h1>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200">
                        <p className="text-sm md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                            Professional car shipping services across the country. Safe, reliable, and affordable transportation for your vehicle.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-6">
                        <div data-aos="fade-up" data-aos-delay="300" className="text-center">
                            <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                                <Truck className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-lg font-semibold">Professional Fleet</h3>
                            <p className="text-white/80">Modern carriers and experienced drivers</p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="400" className="text-center">
                            <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                                <MapPin className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-lg font-semibold">Nationwide Coverage</h3>
                            <p className="text-white/80">Door-to-door service across all states</p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="500" className="text-center">
                            <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                                <Clock className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-lg font-semibold">Fast & Reliable</h3>
                            <p className="text-white/80">On-time delivery guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;