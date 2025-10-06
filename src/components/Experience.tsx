import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full-stack Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2022 - Present",
    description: "Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL. Implemented RESTful APIs and integrated third-party services.",
  },
  {
    type: "education",
    title: "Master of Science in Computer Science",
    institution: "University of Technology",
    duration: "Sep 2020 - Dec 2021",
    description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on predictive analytics for large datasets.",
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "Innovate Web Agency",
    duration: "Jul 2020 - Dec 2021",
    description: "Assisted in the development of client websites using modern JavaScript frameworks. Collaborated with design teams to ensure pixel-perfect implementations.",
  },
  {
    type: "education",
    title: "Bachelor of Science in Software Engineering",
    institution: "State University",
    duration: "Sep 2016 - Jun 2020",
    description: "Focused on software design principles, data structures, and algorithms. Graduated with honors.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:bg-primary/20 before:rounded-full lg:before:left-1/2 lg:before:-translate-x-1/2">
          {experiences.map((item, index) => {
            const Icon = item.type === "work" ? Briefcase : GraduationCap;
            return (
              <div 
                key={index} 
                className={`relative mb-8 flex items-center w-full ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'} animate-in fade-in slide-in-from-bottom-8`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`hidden lg:flex w-1/2 ${index % 2 === 0 ? 'pr-8 justify-end' : 'pl-8 justify-start'}`}>
                  {index % 2 !== 0 && (
                    <div className="text-right space-y-1">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-primary">{item.company || item.institution}</p>
                      <p className="text-muted-foreground text-sm">{item.duration}</p>
                      <p className="text-muted-foreground text-sm max-w-md ml-auto">{item.description}</p>
                    </div>
                  )}
                </div>
                
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground flex-shrink-0">
                  <Icon className="h-5 w-5" />
                </div>

                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  {index % 2 === 0 && (
                    <div className="text-left space-y-1">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-primary">{item.company || item.institution}</p>
                      <p className="text-muted-foreground text-sm">{item.duration}</p>
                      <p className="text-muted-foreground text-sm max-w-md">{item.description}</p>
                    </div>
                  )}
                  {index % 2 !== 0 && (
                    <div className="lg:hidden text-left space-y-1">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-primary">{item.company || item.institution}</p>
                      <p className="text-muted-foreground text-sm">{item.duration}</p>
                      <p className="text-muted-foreground text-sm max-w-md">{item.description}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
