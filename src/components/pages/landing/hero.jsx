import { ArrowRight, Shield, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up">
            <span className="text-primary">World-Wide</span>
            <br />
            Car Shipping Services
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
            Seamless car shipping solutions across continents. Trust us for safe, efficient, and professional vehicle transportation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="gradient-primary hover:shadow-elegant transition-smooth text-lg px-8 py-3"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToServices}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8 py-3"
            >
              Our Services
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '0.6s'}}>
            <Card className="bg-card/50 gap-0 backdrop-blur-sm border-primary/20 hover:shadow-soft transition-smooth">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Fully Insured</h3>
              <p className="text-sm text-muted-foreground">Complete coverage for your vehicle during transport</p>
            </Card>
            
            <Card className="bg-card/50 gap-0 backdrop-blur-sm border-primary/20 hover:shadow-soft transition-smooth">
              <Globe className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Global Network</h3>
              <p className="text-sm text-muted-foreground">Shipping to over 100+ countries worldwide</p>
            </Card>
            
            <Card className="bg-card/50 gap-0 backdrop-blur-sm border-primary/20 hover:shadow-soft transition-smooth">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">24/7 Tracking</h3>
              <p className="text-sm text-muted-foreground">Real-time updates on your shipment status</p>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;