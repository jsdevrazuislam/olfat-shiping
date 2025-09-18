import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X, Ship, Phone, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-main.png";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Cars", href: "/cars" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsSheetOpen(false);
  }, []);

  const handleNavLinkClick = (href) => {
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
    }else{
      navigate(href)
    }
    setIsSheetOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        {
          "bg-background/95 backdrop-blur-md border-b shadow-soft": isScrolled,
          "gradient-with-opacity": !isScrolled && pathname === '/',
        }
      )}
    >
      <nav className="app_container">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center h-[80px]">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logoImage}
                alt="Olfat Shipping Logo"
                className={cn("h-16 w-auto transition-all", {
                  "h-12": isScrolled,
                })}
              />
            </Link>
          </div>

          <div className="hidden lg:flex justify-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(item.href);
                }}
                className={cn(`text-foreground hover:text-primary transition-smooth font-medium relative group transition-colors duration-300`, {
                  "text-primary": pathname === item.href
                })}
              >
                {item.name}
                <span className={cn(`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full`, {"w-full": pathname === item.href})} />
              </Link>
            ))}
          </div>

          <div className="flex justify-end items-center space-x-3">
            <div className="hidden md:flex items-center space-x-3">
              <Button
                onClick={() => handleNavLinkClick("/contact")}
                className="gradient-primary hover:shadow-elegant transition-smooth"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="border-primary/20 h-11">
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

            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  {isSheetOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l">
                <SheetHeader>
                  <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4 px-5">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavLinkClick(item.href);
                      }}
                      className={cn(`block relative text-foreground hover:text-primary transition-smooth font-medium w-fit`, {"text-primary": pathname === item.href})}
                    >
                      {item.name}
                      <span className={cn(`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full`, {"w-full": pathname === item.href})} />
                    </Link>
                  ))}
                  <div className="pt-4">
                    <Button
                      onClick={() => handleNavLinkClick("/contact")}
                      className="w-full gradient-primary hover:shadow-elegant transition-smooth"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
