import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Achievements = () => {
  const achievements = [
    {
      quote: "Successfully developed and deployed 5+ full-stack web applications using React, Node.js, and MongoDB.",
      name: "Full-Stack Development",
      title: "Web Applications"
    },
    {
      quote: "Completed Database Management System certification from NPTEL, mastering performance optimization techniques.",
      name: "Database Management",
      title: "NPTEL Certificate"
    },
    {
      quote: "Worked collaboratively in multiple Hackathons, showcasing teamwork and innovative problem-solving skills.",
      name: "Team Leadership",
      title: "Project Management"
    },
    {
      quote: "Won a bounty for completing a fullstack blockchain application.",
      name: "Blockchain Development",
      title: "Solutions Architect"
    },
    // {
    //   quote: "Acheived .",
    //   name: "Open Source Contributor",
    //   title: "GitHub Projects"
    // },
    {
      quote: "Optimized application performance by 60% through code splitting, lazy loading, and advanced caching strategies.",
      name: "Performance Optimization",
      title: "Technical Excellence"
    }
  ];

  return (
    <section className="py-20 relative z-10 bg-black text-white" id="achievements">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-primary">Certifications</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Milestones and certifications that showcase my journey in web development
          </p>
        </div>
        
        <div className="relative">
          <InfiniteMovingCards
            items={achievements}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;