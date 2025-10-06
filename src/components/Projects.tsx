import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


// [
//   {
//     title: "Bexman — Novel Algorithm & Full App",
//     description: "Novel clustering & sensor-diversity algorithm with a full-stack reference app (Python, React, Node, Supabase).",
//     tags: ["Python", "Algorithms", "Machine Learning", "React", "Node.js", "Supabase"],
//     image: "https://images.unsplash.com/photo-1581093588401-8f4b5d5f3a6f?w=1200&q=80",
//     github: "https://github.com/Augah2001/bexman-algo",
//     liveDemo: null
//   },
//   {
//     title: "Credit Risk Prediction",
//     description: "Credit-risk ML pipeline and full-stack app — Claxon competition winner.",
//     tags: ["Python", "Machine Learning", "Credit Risk", "React", "Node.js", "Supabase"],
//     image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?w=1200&q=80",
//     github: "https://github.com/Augah2001/claxon-data-science-competition",
//     liveDemo: null
//   },
//   {
//     title: "Aura — Deep Tech Optimization",
//     description: "Resource-optimization algorithm for sensors, with Python core and React + Supabase front-end.",
//     tags: ["Python", "Optimization", "TypeScript", "React", "Supabase"],
//     image: "https://images.unsplash.com/photo-1526378727167-0f16a7f3c3f3?w=1200&q=80",
//     github: "https://github.com/Augah2001/aura-deep-tech-project",
//     liveDemo: null
//   },
//   {
//     title: "Accommodation App (Full-Stack)",
//     description: "Mobile-first booking app: auth, listings, booking flows and wallet-friendly checkout.",
//     tags: ["TypeScript", "React", "Node.js", "Supabase", "Full-Stack", "PWA"],
//     image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
//     github: "https://github.com/Augah2001/accomodationApp",
//     liveDemo: null
//   },
//   {
//     title: "Game Hub — H5 Games & Discovery",
//     description: "Game discovery platform with instant-play H5 mini-games optimized for low-data mobile play.",
//     tags: ["TypeScript", "React", "H5", "Frontend", "Games"],
//     image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80",
//     github: "https://github.com/Augah2001/game-hub",
//     liveDemo: null
//   },
//   {
//     title: "Cryptography — Secure Primitives & Demos",
//     description: "Compact Python crypto utilities: hashing, signing and verification for secure wallet flows.",
//     tags: ["Python", "Security", "Cryptography", "Signing", "Hashing"],
//     image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=80",
//     github: "https://github.com/Augah2001/cryptography",
//     liveDemo: null
//   }
// ];


const projects = [
  {
    title: "Bexman — Novel Clustering Algorithm & Full App",
    description:
      "Bexman is a novel clustering ML algorithm I created with strong mathematical foundations. Implemented in Python and a full-stack reference app (React frontend, Node.js backend). Winner — (ICZ) Research & ML competition.",
    tags: ["Python","Algorithms", "Machine Learning", "React", "Node.js"],
    image: "bex.png",
    github: "https://github.com/Augah2001/bex",
    liveDemo: "https://bex-pied.vercel.app/train"
  },
  {
    title: "Credit Risk Prediction",
    description:
      "End-to-end credit-risk pipeline and full-stack app. Includes Machine Learning and a React + Typescript + Node + Supabase scoring UI — winner of the Claxon competition.",
    tags: ["Python", "Machine Learning", "Credit Risk", "React", "Node.js", "Supabase"],
    image: "credit.png",
    github: "https://github.com/Augah2001/claxon-data-science-competition",
    liveDemo: null
  },
  {
    title: "Aura — Deep Tech Optimization",
    description:
      "An optimization algorithm for resource-constrained environments. Core logic in Python with a TypeScript + React front-end and Supabase backend for visualization, experiments and lightweight deployment.",
    tags: ["Python", "Optimization", "TypeScript", "React", "Supabase", "Research"],
    image: "aura.png",
    github: "https://github.com/Augah2001/aura-deep-tech-project",
    liveDemo: "https://frontend-next-js-neon.vercel.app"
  },
 
  {
    title: "Game Hub — H5 Games & Discovery",
    description:
      "Game discovery and instant-play H5 mini-games platform focused on low-data mobile UX and high engagement. Built with TypeScript + React and designed to be embedded inside SuperApp/H5 frames for instant play.",
    tags: ["TypeScript", "React", "H5", "Frontend"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80",
    github: "https://github.com/Augah2001/game-web-app",
    liveDemo: "https://game-web-app-xi.vercel.app/"
  },
   {
    title: "Accommodation App (Full-Stack)",
    description:
      "Mobile-first booking mini-app with authentication, searchable listings, booking management and a wallet-friendly checkout flow. Built as a PWA-ready NextJs and Supabase for auth and data storage — designed for quick H5/SuperApp integration.",
    tags: ["TypeScript", "PWA", "Next.js", "Supabase", "Full-Stack"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
    github: "https://github.com/Augah2001/accomodationApp",
    liveDemo: "https://jegera1.vercel.app"
  },
  {
    title: "Cryptography — Secure Primitives & Demos",
    description:
      "Compact Python cryptography utilities used to secure transaction payloads and wallet interactions.",
    tags: ["Python", "Security", "Cryptography", "Signing", "Hashing"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=80",
    github: "https://github.com/Augah2001/cryptography",
    liveDemo: null
  }
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
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card
                  className="group overflow-hidden bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow animate-in fade-in slide-in-from-bottom-8 cursor-pointer"
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
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>
                    {project.description}
                  </DialogDescription>
                </DialogHeader>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-md mt-4"
                />
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-secondary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>

                  {project.liveDemo ? (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity"
                      onClick={() => window.open(project.liveDemo, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  ) : (
                    <Button size="sm" variant="ghost" className="flex-1 cursor-not-allowed" disabled>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      No Live Demo
                    </Button>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
