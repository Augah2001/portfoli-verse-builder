import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Game Hub",
    description: "A comprehensive game discovery platform built with React and TypeScript, featuring game browsing, filtering, and detailed information.",
    tags: ["TypeScript", "React", "Vite", "API Integration"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    github: "https://github.com/Augah2001/game-hub",
  },
  {
    title: "Accommodation App",
    description: "Full-stack accommodation booking application with user authentication, property listings, and booking management system.",
    tags: ["TypeScript", "React", "Node.js", "Database"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    github: "https://github.com/Augah2001/accomodationApp",
  },
  {
    title: "Heart Disease Prediction",
    description: "Machine learning model for predicting heart disease using Jupyter Notebook, implementing data analysis and predictive algorithms.",
    tags: ["Python", "Machine Learning", "Jupyter", "Data Science"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    github: "https://github.com/Augah2001/Heart-Disease-prediction",
  },
  {
    title: "Game Web Platform",
    description: "Gaming web platform built with modern TypeScript stack, providing interactive gaming experiences and user engagement features.",
    tags: ["TypeScript", "React", "Web Platform"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    github: "https://github.com/Augah2001/game-web-platform",
  },
  {
    title: "Vidly App",
    description: "Video rental application with JavaScript, featuring movie browsing, rental management, and user interaction capabilities.",
    tags: ["JavaScript", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    github: "https://github.com/Augah2001/vidly-app",
  },
  {
    title: "Cryptography",
    description: "Python-based cryptography project implementing various encryption and decryption algorithms for secure communication.",
    tags: ["Python", "Security", "Algorithms"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
    github: "https://github.com/Augah2001/cryptography",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of recent work that showcases my skills and passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-secondary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="flex-1 hover:bg-primary/10"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
