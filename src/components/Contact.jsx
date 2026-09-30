export default function Contact({ profile }) {
  return (
    <section id="contact" className="border-t border-slate-800 py-16">
      <h2 className="text-2xl font-bold">Contact</h2>

      <p className="mt-3 text-slate-400">
        Feel free to email me for work or reach out on the links below.
      </p>

      <ul className="mt-6 space-y-2 text-slate-300">
        <li>
          Email:{' '}
          <a
            href={`mailto:${profile.email}`}
            className="text-sky-400 hover:text-sky-300"
          >
            {profile.email}
          </a>
        </li>
        <li>
          Phone:{' '}
          <a
            href={`tel:+91${profile.phone}`}
            className="text-sky-400 hover:text-sky-300"
          >
            +91 {profile.phone}
          </a>
        </li>
        <li>
          GitHub:{' '}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-300"
          >
            {profile.github}
          </a>
        </li>
        <li>
          LinkedIn:{' '}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-300"
          >
            {profile.linkedin}
          </a>
        </li>
      </ul>
    </section>
  )
}
