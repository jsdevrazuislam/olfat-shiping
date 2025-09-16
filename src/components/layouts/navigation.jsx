import { useState, useCallback } from "react";
import { Link } from "react-router";
import { Menu, X, Ship, Phone, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from "@/assets/logo-main.png";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  const handleNavLinkClick = (href) => {
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(`sticky top-0 left-0 right-0 z-50`, {
      "bg-background/95 backdrop-blur-md border-b shadow-soft": isScrolled,
      "gradient-with-opacity": !isScrolled
    })}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          <Link to="/">
            <div className="flex items-center space-x-3">
              <img
                src={logoImage}
                alt="Olfat Shipping Logo"
                className="h-16 w-auto"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href} 
                onClick={(e) => {
                  e.preventDefault(); 
                  handleNavLinkClick(item.href);
                }}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center space-x-3">
              <Button
                onClick={() => handleNavLinkClick("#contact")}
                className="gradient-primary hover:shadow-elegant transition-smooth"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="border-primary/20">
                    <User className="w-4 h-4 mr-2" />
                    Login
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-background border-primary/10">
                  <DropdownMenuItem className="cursor-pointer hover:bg-primary/5">
                    <User className="w-4 h-4 mr-2" />
                    Login as Admin
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-primary/5">
                    <Ship className="w-4 h-4 mr-2" />
                    Login as Shipping Import
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-primary/5">
                    <Ship className="w-4 h-4 mr-2" />
                    Login as Shipping Export
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t animate-fade-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item.href);
                  }}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium w-full text-left"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={() => handleNavLinkClick("#contact")}
                  className="w-full gradient-primary hover:shadow-elegant transition-smooth"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;