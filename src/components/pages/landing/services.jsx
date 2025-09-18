import { Car, Truck, Ship, Plane, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
    {
      icon: Car,
      title: "Door-to-Door Car Shipping",
      description: "Reliable and secure transport for your car from your doorstep to the final destination.",
      features: ["Fully Insured Transport", "Real-Time Tracking", "On-Time Delivery"]
    },
    {
      icon: Truck,
      title: "Open & Enclosed Carrier Options",
      description: "Choose between cost-effective open carrier or fully enclosed transport for premium protection.",
      features: ["Open Carrier (Budget-Friendly)", "Enclosed Carrier (Extra Protection)", "Flexible Scheduling"]
    },
    {
      icon: Ship,
      title: "International Car Shipping",
      description: "Seamless overseas transport with both Ro-Ro and container shipping options.",
      features: ["Ro-Ro & Container Options", "Port-to-Port or Door Delivery", "Customs Clearance Assistance"]
    },
    {
      icon: Plane,
      title: "Air Freight for Cars",
      description: "Fastest solution for high-value or time-sensitive vehicle shipments worldwide.",
      features: ["Priority Handling", "Shortest Transit Time", "Maximum Security"]
    },
    {
      icon: MapPin,
      title: "Destination Handling",
      description: "Complete arrival services to get your car cleared and delivered at destination hassle-free.",
      features: ["Customs & Paperwork", "Port Handling", "Final Delivery"]
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Expert team guiding you through every step of the shipping process with personalized care.",
      features: ["One-on-One Assistance", "24/7 Support", "Status Updates"]
    }
];

const Services = () => {

  return (
    <section data-aos="fade-up" id="services" className="py-14 bg-gradient-subtle">
      <div className="app_container">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="50">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-primary">Shipping Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a full suite of services designed to make international vehicle transport effortless. Whether you're moving a single car or an entire fleet, our expertise ensures a smooth and secure journey from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group hover:shadow-elegant transition-smooth border-border/50 hover:border-primary/30"
            >
              <CardHeader>
                <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center  gap-8">
            <div data-aos="fade-up" data-aos-delay="700">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="800">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="900">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Vehicles Shipped</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="1000">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;