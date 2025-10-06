import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

        <form className="space-y-6 pt-8 max-w-lg mx-auto">
          <Input placeholder="Your Name" className="bg-card/50 border-primary/20 focus-visible:ring-primary" />
          <Input type="email" placeholder="Your Email" className="bg-card/50 border-primary/20 focus-visible:ring-primary" />
          <Textarea placeholder="Your Message" rows={5} className="bg-card/50 border-primary/20 focus-visible:ring-primary" />
          <Button 
            size="lg"
            type="submit"
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </form>

        <div className="flex gap-4 justify-center pt-8">
          <Button 
            size="icon" 
            variant="ghost"
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={() => window.open("https://github.com/augah2001", "_blank")}
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost"
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={() => window.open("https://linkedin.com", "_blank")}
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost"
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={() => window.open("https://twitter.com", "_blank")}
          >
            <Twitter className="h-6 w-6" />
          </Button>
        </div>

        <footer className="pt-16 text-sm text-muted-foreground border-t border-primary/20 mt-16 text-center">
          <p className="text-primary/70">© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
          <p className="text-xs mt-2">Crafted with <span className="text-red-500">❤️</span> using React, TypeScript & TailwindCSS</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
