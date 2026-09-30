export default function Projects({ projects }) {
  return (
    <section id="projects" className="border-t border-slate-800 py-16">
      <h2 className="text-2xl font-bold">Projects</h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-slate-800 bg-slate-900/50 p-5"
          >
            <h3 className="font-semibold">{project.title}</h3>

            <p className="mt-2 text-sm text-slate-400">{project.description}</p>

            <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
              {project.tech.map((item) => (
                <li key={item} className="rounded bg-slate-800 px-2 py-1">
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm text-sky-400 hover:text-sky-300"
            >
              View Project &rarr;
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
