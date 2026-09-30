export default function Hero({ profile }) {
  return (
    <section id="home" className="py-16 sm:py-24">
      <p className="text-sm font-medium text-sky-400">Hello, I am</p>

      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{profile.name}</h1>

      <h2 className="mt-3 text-xl text-slate-300 sm:text-2xl">{profile.role}</h2>

      <p className="mt-5 max-w-xl text-slate-400">{profile.tagline}</p>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-sky-500 px-5 py-2.5 font-medium text-white hover:bg-sky-400"
        >
          My Projects
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg border border-slate-700 px-5 py-2.5 font-medium hover:border-slate-500"
        >
          Contact Me
        </a>
      </div>

      <ul className="mt-10 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
