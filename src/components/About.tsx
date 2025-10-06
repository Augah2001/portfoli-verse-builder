import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Full-stack engineer & machine-learning researcher building production apps, novel algorithms and
          deployable ML systems for real-world problems.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8 pt-8">
          <div className="lg:w-1/3 animate-in fade-in slide-in-from-left-8 duration-1000">
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary/50 shadow-lg">
                <AvatarImage src="self.jpg" alt="Augustine" />
                <AvatarFallback>RA</AvatarFallback>
              </Avatar>

              <h3 className="text-2xl font-semibold mb-1">Augustine</h3>
              <p className="text-primary mb-3">Full-stack Engineer • ML Researcher</p>

              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="text-xs px-3 py-1 bg-secondary rounded-full border border-primary/20">Next.js</span>
                <span className="text-xs px-3 py-1 bg-secondary rounded-full border border-primary/20">React</span>
                <span className="text-xs px-3 py-1 bg-secondary rounded-full border border-primary/20">Node.js</span>
                <span className="text-xs px-3 py-1 bg-secondary rounded-full border border-primary/20">Python</span>
                <span className="text-xs px-3 py-1 bg-secondary rounded-full border border-primary/20">Supabase</span>
              </div>

              <p className="text-muted-foreground text-sm mt-2">
                I build end-to-end products — production frontends, resilient backends and ML systems — and create
                novel algorithms backed by rigorous maths and experiments.
              </p>

              <ul className="mt-4 text-xs text-muted-foreground space-y-2">
                
                <li><strong>Specialties:</strong> Full Stack development, Machine learning, Algorithm design, Security</li>
                <li><strong>Apps:</strong> full-stack (React + Node + Supabase, Next js, Typescript) with production ML pipelines</li>
              </ul>
            </Card>
          </div>

          <div className="lg:w-2/3 text-left space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000">
            <p className="text-lg leading-relaxed">
              Hello — I'm <strong>Augustine</strong>. I design and ship full-stack applications (Next.js / React / Node / TypeScript)
              and build production ML systems. I combine deep mathematical intuition with practical
              engineering so models and algorithms transition from notebooks to reliable services.
            </p>

            <p className="text-lg leading-relaxed">
              My research work includes <strong>Bexman</strong>, a novel ML clustering algorithm with which I won the <em>ICZ Research & ML competition</em>. I also won the
              <em> Claxon Data Science Competition</em> for a credit-risk scoring solution.
            </p>

            <p className="text-lg leading-relaxed">
              I care about shipping impact: fast mobile-first UIs, small H5 bundles for SuperApp integrations, secure wallet
              flows and reproducible ML pipelines. When I'm not building, I write experiments, and explore new
              mathematical approaches to learning and optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
