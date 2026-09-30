export default function Footer({ name }) {
  return (
    <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
      &copy; {new Date().getFullYear()} {name}. Built with React + Tailwind CSS.
    </footer>
  )
}
