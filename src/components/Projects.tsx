import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and responsive design.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with natural language processing and sentiment analysis.",
    tags: ["TypeScript", "WebSocket", "OpenAI", "Redis"],
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80",
  },
  {
    title: "Portfolio Dashboard",
    description: "Analytics dashboard for tracking portfolio performance with interactive charts and data visualization.",
    tags: ["React", "D3.js", "TailwindCSS", "Firebase"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
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
          {projects.map((project, index) => (
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
                  <Button size="sm" variant="ghost" className="flex-1 hover:bg-primary/10">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1 hover:bg-primary/10">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
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
