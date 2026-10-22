import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    number: "01",
    name: "Bevis",
    category: "SaaS · Developer productivity",
    description:
      "A developer-focused product that turns meaningful GitHub activity into factual, ready-to-share progress updates. Developers can review, edit, and copy drafts before sharing.",
    skills: ["React", "TypeScript", "Vite", "GitHub integration"],
    live: "https://trybevis.vercel.app/",
    liveLabel: "Explore Bevis",
    featured: true,
  },
  {
    number: "02",
    name: "LEL Store",
    category: "Client work · Multi-vendor commerce",
    description:
      "A marketplace experience for vehicles, property, phones, and retail. The platform brings together customer shopping, seller workflows, administration, inspections, and installment-purchase journeys.",
    skills: ["React", "TypeScript", "Tailwind CSS", "State management", "API integration"],
    live: "https://lelstore.com/",
    liveLabel: "Visit LEL Store",
    github: "https://github.com/Muhammadalamin029/alhaq-backend",
    githubLabel: "Backend repository",
    mobile: "https://github.com/Muhammadalamin029/lel-marketplace",
    mobileLabel: "Mobile app repository",
    featured: true,
  },
  {
    number: "03",
    name: "Oron",
    category: "Web application · Marketplace",
    description:
      "A marketplace web application with product-focused workflows and a dedicated backend. The project demonstrates work across a modern Next.js frontend and API-backed product functionality.",
    skills: ["Next.js", "TypeScript", "API integration"],
    live: "https://oron-marketplace.vercel.app/",
    liveLabel: "Explore Oron",
    github: "https://github.com/Muhammadalamin029/oron",
    githubLabel: "Frontend repository",
    mobile: undefined,
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-[0.22em] text-green-400 mb-3">
              Selected work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Products built to solve real problems.
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              A selection of SaaS, marketplace, and client work focused on useful
              workflows, thoughtful interfaces, and reliable product experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <article
                key={project.name}
                className={`flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-7 transition-colors hover:border-green-400/40 ${project.featured ? "md:col-span-1" : ""}`}
              >
                <div className="flex items-center justify-between gap-3 mb-7">
                  <span className="text-sm font-mono text-green-400">
                    / {project.number}
                  </span>
                  <span className="text-xs text-gray-400 border border-white/10 rounded-full px-3 py-1">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-gray-300 bg-white/[0.06] border border-white/[0.06] rounded-md px-2.5 py-1.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors"
                  >
                    {project.liveLabel} ↗
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {project.githubLabel} ↗
                    </a>
                  )}
                  {project.mobile && (
                    <a
                      href={project.mobile}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {project.mobileLabel} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
