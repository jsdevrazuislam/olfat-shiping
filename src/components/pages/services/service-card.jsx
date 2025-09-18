import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Truck } from "lucide-react";
import { Link } from "react-router";

export const ServiceCard = ({
    title,
    description,
    features,
    price,
    duration,
    image,
    isReversed = false,
    animation = "fade-up",
    delay = 0
}) => {
    return (
        <div className={`service-card ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex flex-col gap-8`}
        data-aos={animation}
        data-aos-delay={delay}
        >
            <div className="lg:w-1/2 w-full">
                <div className="relative overflow-hidden rounded-lg shadow-[var(--shadow-medium)]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>
            </div>

            <div className="lg:w-1/2 w-full space-y-6">
                <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-foreground leading-tight">
                        {title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>
                <div className="space-y-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-foreground font-medium">{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg">
                        <Truck className="w-5 h-5 text-accent" />
                        <span className="font-semibold text-accent">{price}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg">
                        <Clock className="w-5 h-5 text-accent" />
                        <span className="font-semibold text-accent">{duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg">
                        <Shield className="w-5 h-5 text-accent" />
                        <span className="font-semibold text-accent">Fully Insured</span>
                    </div>
                </div>

                    <Link to="/contact">
                        <Button className="gradient-primary">
                            Learn More & Get Quote
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </Link>
            </div>
        </div>
    );
};