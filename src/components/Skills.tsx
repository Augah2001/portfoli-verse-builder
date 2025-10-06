import { Code2, Database, Palette, Zap, Award } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend & UX",
    items: ["Next.js • React", "TypeScript • Vite", "PWA / H5 optimisation", "Responsive & accessible UI"],
  },
  {
    icon: Database,
    title: "Backend",
    items: ["Node.js • Express", "Python backends (FastAPI)", "Supabase • Postgres"],
  },
  {
    icon: Palette,
    title: "Machine Learning",
    items: ["Machine learning", "Deep Learning", "Model deployment & monitoring"],
  },
  {
    icon: Zap,
    title: "Algorithms & Math",
    items: ["Novel algorithm design", "Optimization", "Heavy math formulation"],
  },
  {
    icon: Award,
    title: "Security",
    items: ["Cryptography • verification", "Git • Testing" , "Secure wallet/payment flows"],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A deep, production-ready toolkit for building modern, scalable applications and research-grade ML systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary/40 transition-all duration-300 hover:shadow-glow animate-in fade-in slide-in-from-bottom-8 group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start group-hover:text-foreground transition-colors">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 mt-2 transition-transform duration-300 group-hover:scale-125"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
