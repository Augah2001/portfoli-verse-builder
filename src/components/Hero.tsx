import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center z-10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="inline-block px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
          Available for projects
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          Creative
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            Developer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Crafting beautiful digital experiences with modern technologies and creative problem-solving
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow group"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
