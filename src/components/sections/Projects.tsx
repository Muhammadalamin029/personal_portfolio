import { RevealOnScroll } from "../RevealOnScroll";

const Projects = () => {
  const projects = [
    {
      name: "Shortly",
      description:
        "A url shortening app that allows users to shorten long urls and track the number of clicks.",
      skills: ["React", "TypeScript", "Tailwindcss", "Firebase"],
      link: "https://min-short.vercel.app/",
    },
    {
      name: "Devjobs",
      description:
        "Fullstack job listing app with authentication, job posting and search functionality.",
      skills: ["React.js", "JavaScript", "Tailwindcss", "Firebase"],
      link: "https://dev-jobs-mu.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
              >
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((tech) => (
                    <span
                      key={tech}
                      className="
                      bg-green-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-green-400 hover:text-green-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
