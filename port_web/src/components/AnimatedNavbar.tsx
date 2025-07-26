import { useState, useEffect } from "react";
import { Home, User, Briefcase, Menu, X, Award, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnimatedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "home", icon: Home },
    { name: "About", href: "about", icon: User },
    { name: "Skills", href: "skills", icon: Code },
    { name: "Projects", href: "projects", icon: Briefcase },
    { name: "Achievements", href: "achievements", icon: Award },
    { name: "Contact", href: "contact", icon: User },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-md border-b border-border/50 shadow-elegant" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="font-display text-xl font-bold text-primary hover:text-primary-glow transition-colors animate-fade-in-left cursor-pointer"
          >
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-heading font-medium
                    ${isActive 
                      ? "text-primary bg-primary/10 shadow-glow" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }
                  `}
                  style={{
                    animation: `fade-in-right 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  
                  {/* Animated underline */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary transform origin-left transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:text-primary animate-fade-in-right"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="py-4 space-y-2 border-t border-border/20">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-heading
                    ${isActive 
                      ? "text-primary bg-primary/10 shadow-glow" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }
                  `}
                  style={{
                    animation: isMobileMenuOpen ? `slide-down 0.3s ease-out ${index * 0.1}s both` : undefined
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AnimatedNavbar;