import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Edit your details here
const profile = {
  name: 'Aditya Jaitmal',
  role: 'Frontend Developer',
  tagline:
    'I build simple and clean websites with React and Tailwind CSS. You can check out a few of my projects below.',
  email: 'adityajaitmal123@gmail.com',
  phone: '7558412003',
  github: 'https://github.com/adityajaitmal99',
  linkedin: 'https://www.linkedin.com/in/aditya-jaitmal/',
  skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Git'],
  projects: [
    {
      title: 'Todo App',
      description: 'A simple todo app built with React with add and delete.',
      tech: ['React', 'Tailwind'],
      link: 'https://github.com/adityajaitmal99',
    },
    {
      title: 'Weather App',
      description: 'Enter a city name and check the current weather.',
      tech: ['React', 'API'],
      link: 'https://github.com/adityajaitmal99',
    },
    {
      title: 'Landing Page',
      description: 'A responsive landing page for a product.',
      tech: ['HTML', 'Tailwind'],
      link: 'https://github.com/adityajaitmal99',
    },
    {
      title: 'Calculator',
      description: 'A simple calculator that does basic calculations.',
      tech: ['JavaScript', 'CSS'],
      link: 'https://github.com/adityajaitmal99',
    },
  ],
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar name={profile.name} />

      <main className="mx-auto max-w-3xl px-6">
        <Hero profile={profile} />
        <Projects projects={profile.projects} />
        <Contact profile={profile} />
      </main>

      <Footer name={profile.name} />
    </div>
  )
}
