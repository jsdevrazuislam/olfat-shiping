import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Shield, Clock } from "lucide-react";

export const ServicesHero = () => {
    return (
        <section className="py-8 bg-primary-gradient text-primary-foreground">
            <div className="app_container flex flex-col items-center text-center">
                <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
                    <Badge
                        variant="outline"
                        className="border-primary-foreground/20 text-primary-foreground"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        Explore Our Services
                    </Badge>
                    <h1
                        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6"
                        data-aos="fade-up"
                    >
                         Our <span className="text-accent">Car Shipping Services</span>
                    </h1>
                    <p
                        className="text-sm md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto"
                        data-aos="fade-up"
                    >
                        Choose from our comprehensive range of professional auto transport services. 
                        Each option is designed to meet specific needs while maintaining the highest 
                        standards of safety and reliability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 w-full max-w-4xl" data-aos="fade-up">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <Star className="w-8 h-8 text-accent mb-3 mx-auto" />
                        <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                        <div className="text-white/80">Customer Rating</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <Shield className="w-8 h-8 text-accent mb-3 mx-auto" />
                        <div className="text-3xl font-bold text-white mb-2">100%</div>
                        <div className="text-white/80">Insured Transport</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <Clock className="w-8 h-8 text-accent mb-3 mx-auto" />
                        <div className="text-3xl font-bold text-white mb-2">24/7</div>
                        <div className="text-white/80">Customer Support</div>
                    </div>
                </div>
                <div>
                    <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-[var(--shadow-glow)] hover:scale-105 transition-all duration-300">
                        Get Free Quote Today
                    </Button>
                </div>
            </div>
        </section>
    );
};