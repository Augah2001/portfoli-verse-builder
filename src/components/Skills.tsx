import { Code2, Database, Palette, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: ["React", "TypeScript", "Next.js", "TailwindCSS"],
  },
  {
    icon: Database,
    title: "Backend & Database",
    items: ["Node.js", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: Palette,
    title: "Design & UX",
    items: ["Figma", "UI/UX Design", "Responsive Design", "Animations"],
  },
  {
    icon: Zap,
    title: "Tools & Others",
    items: ["Git", "Docker", "AWS", "CI/CD"],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary/40 transition-all duration-300 hover:shadow-glow animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {item}
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
