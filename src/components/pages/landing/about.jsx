import { CheckCircle, Award, Users2, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const achievements = [
    "ISO 9001:2015 Certified",
    "IATA Certified Agent",
    "Full Marine Insurance",
    "24/7 Customer Support",
    "Real-time GPS Tracking",
    "Customs Brokerage License"
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every aspect of our service delivery."
    },
    {
      icon: Users2,
      title: "Trust",
      description: "Building lasting relationships through transparency and reliability."
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Extensive network spanning across continents for seamless service."
    }
  ];

  return (
    <section id="about" className="py-14 bg-background" data-aos="fade-up">
      <div className="app_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-right" data-aos-delay="100">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              About Olfat Shipping
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in <span className="text-primary">Global Car Transport</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over 15 years of experience in international car shipping, Olfat Shipping
              has established itself as a leading provider of comprehensive automotive logistics solutions.
              Founded by Abdul Razeq and built on principles of excellence, trust, and innovation.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-sm text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground" data-aos="fade-up" data-aos-delay="300">
              Our commitment to safety, reliability, and customer satisfaction has made us
              the preferred choice for individuals and businesses worldwide. We handle every
              shipment with the care and attention it deserves.
            </p>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 hover:border-primary/30 hover:shadow-soft transition-smooth"
                data-aos="fade-left"
                data-aos-delay={index * 200}
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card
              className="p-6 gradient-primary text-primary-foreground"
              data-aos="zoom-in"
              data-aos-delay={values.length * 200}
            >
              <CardContent className="p-0">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Abdul Razeq</h3>
                  <p className="text-primary-foreground/90 mb-4">Founder & CEO</p>
                  <p className="text-sm text-primary-foreground/80">
                    "Our mission is to make international vehicle shipping simple,
                    secure, and stress-free for every customer."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;