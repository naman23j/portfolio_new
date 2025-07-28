
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Code, User } from "lucide-react";
import { Link } from "react-router-dom";
import Resume from "@/assets/RESUME_NAMAN.pdf";

const HeroWithName = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <Badge variant="secondary" className="mb-6 bg-secondary/50 backdrop-blur-sm">
        <User className="w-3 h-3 mr-1" />
        Portfolio
      </Badge>
      
      <div className="mb-8">
        <TextHoverEffect text="NAMAN" />
      </div>
      
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
        <span className="text-foreground font-heading">Creative Developer</span>
        <br />
        <span className="bg-gradient-accent bg-clip-text text-transparent">
          & Designer
        </span>
      </h2>
      
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
        Passionate about crafting exceptional digital experiences with modern technologies.
        Transforming ideas into elegant, user-friendly web applications.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a href= {Resume} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
            View Resume
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
        <Button variant="outline" size="lg" className="border-border/50 hover:bg-card/50 backdrop-blur-sm">
          Contact Me
        </Button>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
        <div className="flex items-center gap-2">
          <Code className="w-5 h-5 text-primary" />
          <span>Frontend Focus</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-accent" />
          <span>Modern Stack</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-primary-glow" />
          <span>User-Centered</span>
        </div>
      </div>
    </div>
  );
};

export default HeroWithName;
