import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
            onClick={() => window.location.href = "mailto:hello@example.com"}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </Button>
        </div>

        <div className="flex gap-4 justify-center pt-8">
          <Button 
            size="icon" 
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
            onClick={() => window.open("https://github.com/augah2001", "_blank")}
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button 
            size="icon" 
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
            onClick={() => window.open("https://linkedin.com", "_blank")}
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button 
            size="icon" 
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
            onClick={() => window.open("https://twitter.com", "_blank")}
          >
            <Twitter className="h-5 w-5" />
          </Button>
        </div>

        <footer className="pt-16 text-sm text-muted-foreground border-t border-primary/20 mt-16">
          <p>© 2024 Portfolio. Built with React, TypeScript & TailwindCSS</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
