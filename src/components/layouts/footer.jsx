import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoImage from "@/assets/logo-main.png";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Personal Vehicle Shipping",
    "Commercial Fleet Transport",
    "Container Shipping",
    "Express Air Freight",
    "Customs Clearance",
    "Insurance Services"
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="app_container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoImage} 
                alt="Olfat Shipping Logo" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/80 mb-6 text-sm leading-relaxed">
              Your trusted partner for worldwide vehicle shipping services. 
              Professional, reliable, and secure transportation solutions 
              for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-light transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-light transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-light transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-light transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-background/80 hover:text-background transition-smooth text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-background/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-background/80">Street#23 Industrial Area 4 Sharjah , UAE</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-background/80">+971564023099</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-background/80">info@olfatshipping.com</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="font-medium mb-2 text-sm">Business Hours</h5>
              <p className="text-xs text-background/70">Sat - Thur: 9:00 AM - 21:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
            <p>&copy; {currentYear} Olfat Shipping. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-background transition-smooth">Privacy Policy</Link>
              <Link to="#" className="hover:text-background transition-smooth">Terms of Service</Link>
              <Link to="#" className="hover:text-background transition-smooth">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;