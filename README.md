# Simple Portfolio (React + Tailwind CSS)

A simple portfolio for Aditya Jaitmal, built with React (Vite) + Tailwind CSS v4.

This README explains everything point by point:

1. What to install first (Node.js + npm)
2. How to install React (2 ways)
3. How this project was built (step by step)
4. How to install Tailwind CSS
5. The full folder structure (what every file does)
6. How to run the project
7. How to use Tailwind (with examples)
8. How to add new content
9. Command cheat sheet + common errors

---

## 1. What to install first — Node.js + npm

**npm** = Node Package Manager. It downloads libraries like React and Tailwind.
npm comes with Node.js, so you only need to install Node.js:

1. Go to https://nodejs.org
2. Download the **LTS** version (the `.msi` file on Windows)
3. Install it (Next → Next → Finish, nothing has to be changed)
4. Open a new terminal and check:

```bash
node -v      # Node version
npm -v       # npm version
```

This project was built with **Node v24.17.0** and **npm 11.13.0**.

If you see `node : command not found`, either Node.js is not installed or the terminal
was not restarted — close the terminal and open it again.

---

## 2. How to install React

### Option A — create a new React project (recommended)

This is the easiest way for any new project:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install       # installs the packages listed in package.json
npm run dev       # http://localhost:5173
```

Vite is a build tool that runs React fast (faster than create-react-app).
`--template react` means plain JavaScript React (not TypeScript).

### Option B — what was done in this project (manual setup)

In this project the files were created by hand so the structure stays as simple as possible:

```bash
# 1. create the folder and go inside it
mkdir "portfolio with react"
cd "portfolio with react"

# 2. create package.json (project info + scripts)
#    (written by hand — name, scripts, type: module)

# 3. install the main React packages
npm install react react-dom

# 4. install the dev tools (build tool + react plugin)
npm install -D vite @vitejs/plugin-react

# 5. create the files: index.html, src/main.jsx, src/App.jsx
#    and then run npm run dev
```

What `npm install react react-dom` does:

- writes the version into `dependencies` in `package.json` (here `^19.3.0`)
- downloads the code into the `node_modules` folder
- creates `package-lock.json` (a record of the exact versions)

**What `-D` means**: devDependency — it is needed only while developing and does not
ship with the live website code.

### Versions installed in this project

| Package | Version | Purpose |
| --- | --- | --- |
| react | ^19.3.0 | the library used to build the UI |
| react-dom | ^19.3.0 | renders React inside the browser |
| vite | ^8.3.1 | dev server + build tool |
| @vitejs/plugin-react | ^6.1.1 | lets Vite understand JSX |
| tailwindcss | ^4.3.3 | CSS utility classes |
| @tailwindcss/vite | ^4.3.3 | connects Tailwind to Vite |

---

## 3. How this project was built — step by step

1. **Folder + package.json** — created the project folder and wrote `package.json`
   (`"type": "module"` is required so the `import` syntax works).
2. **Install React** — `npm install react react-dom`.
3. **Install Vite + plugin** — `npm install -D vite @vitejs/plugin-react`.
4. **Install Tailwind** — `npm install -D tailwindcss @tailwindcss/vite`.
5. **vite.config.js** — registered both the React and the Tailwind plugin.
6. **index.html** — a single HTML page that only contains `<div id="root"></div>`.
7. **src/main.jsx** — mounted React inside the `#root` div (`createRoot`).
8. **src/index.css** — imported Tailwind.
9. **src/components/** — built Navbar, Hero, Projects, Contact and Footer.
10. **src/App.jsx** — joined all the components + kept the personal data (profile).
11. **Run + build** — ran it with `npm run dev`, created the final `dist` with `npm run build`.

### Understanding the React flow (it is very simple)

```
index.html  →  src/main.jsx  →  App.jsx  →  components/*.jsx  →  HTML on screen
   (#root)      (mounts React)   (joins all)    (small pieces)
```

- `index.html` is the browser entry point — it only has an empty `root` div.
- `main.jsx` starts React inside that div.
- `App.jsx` is a component that joins the other components together.
- Every `.jsx` file is a **component** = a function that returns HTML-like code.
- JavaScript runs inside `{ }`, for example `{profile.name}`.

---

## 4. How to install Tailwind CSS (v4)

```bash
npm install -D tailwindcss @tailwindcss/vite
```

Then add the plugin in **vite.config.js**:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

And in **src/index.css** just this one line:

```css
@import "tailwindcss";
```

That is it! Now you can write Tailwind classes in `className="..."` in any JSX file.

**Important:** with Tailwind **v4** you do **not** need `tailwind.config.js` or
`postcss.config.js` (older v3 tutorials asked you to run `npx tailwindcss init -p`
and fill in a `content` array). Those files were deliberately not created in this
project to keep the setup simple.

After installing, **restart the dev server** (`Ctrl + C` then `npm run dev`),
otherwise the new classes will not be loaded.

**One small detail:** Tailwind v4 scans every file in the folder where `vite.config.js`
lives (auto-scan) — that is why classes written in this README, such as `p-[18px]`,
also end up in the final CSS. The size increase is tiny (a few bytes), so it does not
matter. If you do not want that, add one line to `src/index.css`:

```css
@source not "../README.md";
```

---

## 5. Folder structure — what every file does

```
portfolio with react/
├── index.html            # single page, contains <div id="root">
├── package.json          # project info + scripts + installed packages
├── package-lock.json     # exact version lock (created by npm, do not edit)
├── vite.config.js        # React + Tailwind plugins
├── README.md             # this file (documentation)
├── .gitignore            # which files git should not track
│
├── node_modules/         # all installed packages (created by npm install) — never committed
├── dist/                 # final build (created by npm run build) — this is what you deploy
│
└── src/
    ├── main.jsx          # entry point: mounts React into #root
    ├── index.css         # Tailwind import + a little custom CSS
    ├── App.jsx           # profile data + joins all the sections
    └── components/
        ├── Navbar.jsx    # top sticky navbar (Home / Projects / Contact)
        ├── Hero.jsx      # name, role, tagline, buttons, skills
        ├── Projects.jsx  # grid of project cards
        ├── Contact.jsx   # email, phone, github, linkedin
        └── Footer.jsx    # copyright line
```

**When each file is created:**

| Folder/File | When it is created |
| --- | --- |
| `node_modules/` | when you run `npm install` (never edited by hand) |
| `dist/` | when you run `npm run build` |
| `package-lock.json` | automatically during install |
| `src/`, `index.html`, `vite.config.js` | these are the files you write/edit |

**Which file you normally edit:**

- name, email, phone, links, skills, projects → `src/App.jsx`
- design/text of any section → `src/components/<its name>.jsx`
- new colours or custom CSS → `src/index.css`
- page title / browser tab → `index.html`

---

## 6. How to run the project

```bash
cd "portfolio with react"   # go into the project folder
npm install                 # only the first time (or when package.json changes)
npm run dev                 # dev server: http://localhost:5173
```

The dev server keeps running — as soon as you save a file, the change appears in the
browser (hot reload). To stop it, press `Ctrl + C` in the terminal.

To put the website live:

```bash
npm run build     # creates the dist/ folder (HTML + CSS + JS)
npm run preview   # check the build locally: http://localhost:4173
```

Upload the `dist/` folder to Vercel, Netlify or GitHub Pages and the website goes live.

---

## 7. How to use Tailwind

Instead of writing a separate CSS file, Tailwind uses **utility classes** directly in
`className`. Example — the heading in this project's Hero:

```jsx
<h1 className="mt-2 text-4xl font-bold sm:text-5xl">{profile.name}</h1>
```

What those classes mean:

| Class | What it does |
| --- | --- |
| `mt-2` | margin-top (a small gap above) |
| `text-4xl` | larger font size |
| `font-bold` | bold text |
| `sm:text-5xl` | even larger on screens wider than 640px |

### Spacing (gap/margin/padding)

```
p-5      → padding on all sides       px-6 py-4  → padding on x and y
mt-4     → margin on top              gap-3      → space between flex/grid items
py-16    → tall vertical padding (good for sections)
```

Bigger number = bigger size: `p-2` < `p-4` < `p-8`.
You can also pass any custom value with `p-[18px]`.

### Colours

```
bg-slate-950      → the dark page background
text-slate-100    → almost white text
text-sky-400      → blue accent (links/buttons)
border-slate-800  → a subtle border line
hover:text-white  → turns white on mouse over
```

### Layout

```
max-w-3xl mx-auto        → content centred with a max width (best for reading)
flex flex-wrap gap-2     → items side by side, wrap to the next line when needed
grid gap-5 sm:grid-cols-2 → 2 column grid (1 column on mobile)
border rounded-xl        → border + rounded corners
```

### Responsive (mobile-first)

Tailwind is mobile-first — a class without a prefix applies on mobile, a class with a
prefix applies on larger screens:

```
sm:  → 640px and up   (tablet)
md:  → 768px and up
lg:  → 1024px and up
```

So `grid gap-5 sm:grid-cols-2` means: one column on mobile, two columns from 640px up.
One set of classes and it is responsive.

### Try it yourself

Change a class in any file and you see the result instantly:

```jsx
<button className="rounded-lg bg-sky-500 px-5 py-2.5 font-medium text-white hover:bg-sky-400">
  Hire Me
</button>
```

---

## 8. How to add new content

### Change your details

There is a `profile` object at the top of `src/App.jsx` — just edit it:

```js
const profile = {
  name: 'Aditya Jaitmal',
  role: 'Frontend Developer',
  tagline: '...',
  email: 'adityajaitmal123@gmail.com',
  phone: '7558412003',
  github: 'https://github.com/adityajaitmal99',
  linkedin: 'https://www.linkedin.com/in/aditya-jaitmal/',
  skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Git'],
  projects: [ /* ... */ ],
}
```

### Add a new project card

Add one more object to the `projects` array — the card appears automatically:

```js
{
  title: 'My New Project',
  description: 'Describe your project in one line.',
  tech: ['React', 'Tailwind'],
  link: 'https://github.com/adityajaitmal99',
},
```

### Add a new section/component

1. Create `src/components/About.jsx`:

```jsx
export default function About() {
  return (
    <section id="about" className="border-t border-slate-800 py-16">
      <h2 className="text-2xl font-bold">About</h2>
      <p className="mt-3 text-slate-400">Write about yourself here.</p>
    </section>
  )
}
```

2. Import it in `src/App.jsx` and add it inside `<main>`:

```jsx
import About from './components/About'
// ...
<About />
```

3. If you want a navbar link too, add `{ label: 'About', href: '#about' }` to the
   `links` array in `src/components/Navbar.jsx`.

---

## 9. Command cheat sheet

| Command | What it does |
| --- | --- |
| `npm install` | install every package listed in `package.json` |
| `npm install <package>` | add a new package (e.g. `npm install react`) |
| `npm install -D <package>` | install a dev tool |
| `npm run dev` | start the dev server (http://localhost:5173) |
| `npm run build` | create the final build (`dist/` folder) |
| `npm run preview` | check the build locally |
| `Ctrl + C` | stop the running server |

### Common errors

**1. `npm error ENOENT: no such file or directory, open package.json`**
You are in the wrong folder — `cd` into the project folder.

**2. `node : command not found`**
Node.js is not installed, or the terminal was not restarted.

**3. Tailwind classes are not working**
- Is `@import "tailwindcss";` present in `src/index.css` (and is that file imported in `main.jsx`)?
- Is the `tailwindcss()` plugin in `vite.config.js`?
- Restart the dev server (`Ctrl + C` then `npm run dev`).

**4. Port already in use**
```bash
npm run dev -- --port 3000
```

**5. Something looks broken / a package seems corrupt**
```bash
rm -rf node_modules package-lock.json   # Windows PowerShell: Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

**6. Changes are not showing up**
Did you save the file? Do a hard refresh in the browser (`Ctrl + Shift + R`).

---

## Customize (short summary)

- **Your details** → the `profile` object in `src/App.jsx`
- **Design/text** → `src/components/*.jsx` (Tailwind classes in `className`)
- **Page title** → `index.html`
- **Custom CSS** → `src/index.css`

Everything else is explained in detail above. Happy coding! 🚀#   p o r t p o l i o - w o r k s h o p  
 