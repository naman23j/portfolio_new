import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Code, Database, Palette, Server } from "lucide-react";

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      color: "text-primary",
      bgColor: "bg-gradient-primary",
      technologies: [
        "HTML5", "CSS3", "JavaScript", "TypeScript", 
        "React.js", "Next.js", "Vue.js", "Tailwind CSS",
        "Sass/SCSS", "Bootstrap", "Material-UI", "Framer Motion"
      ]
    },
    {
      id: "backend", 
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      color: "text-accent",
      bgColor: "bg-gradient-accent",
      technologies: [
        "Node.js", "Express.js", "Python", "Django",
        "Flask", "FastAPI", "REST APIs", "GraphQL",
        "JWT", "OAuth", "Microservices", "Docker"
      ]
    },
    {
      id: "database",
      title: "Database Management",
      icon: <Database className="w-8 h-8" />,
      color: "text-primary-glow",
      bgColor: "bg-gradient-to-r from-primary to-primary-glow",
      technologies: [
        "PostgreSQL", "MongoDB", "MySQL", "Redis",
        "Firebase", "Supabase", "Prisma", "TypeORM",
        "Database Design", "Query Optimization", "Migration", "Backup"
      ]
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      color: "text-accent",
      bgColor: "bg-gradient-to-r from-accent to-primary",
      technologies: [
        "Figma", "Adobe XD", "Sketch", "Photoshop",
        "User Research", "Wireframing", "Prototyping", "Design Systems",
        "Accessibility", "Mobile First", "Responsive Design", "Usability Testing"
      ]
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hover over the cards to see the technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="relative h-80 group [perspective:1000px]"
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Flip Card Container */}
              <div 
                className={`relative w-full h-full transition-all duration-700 ease-in-out [transform-style:preserve-3d] ${
                  hoveredCard === category.id ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front Face */}
                <Card className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <div className={`p-4 rounded-full ${category.bgColor} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Hover to see technologies
                    </p>
                  </div>
                </Card>

                {/* Back Face */}
                <Card className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-card/90 backdrop-blur-sm border-border overflow-hidden">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                      <div className={`p-2 rounded-lg ${category.bgColor}`}>
                        <div className="text-white">
                          {category.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="flex-1 overflow-hidden">
                      <div className="grid grid-cols-2 gap-2 h-full max-h-[250px] overflow-hidden">
                        {category.technologies.map((tech, index) => (
                          <div 
                            key={index}
                            className="text-xs text-muted-foreground bg-background/40 px-2 py-1.5 rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-center flex items-center justify-center min-h-[32px] leading-tight"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;