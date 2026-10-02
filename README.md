# Saran Raj Saravanan Portfolio

> A modern, responsive personal portfolio for a Full Stack Developer — built with React 19, Vite 8, custom SVG iconography, and a clean, data-driven architecture.

![Status](https://img.shields.io/badge/Status-Open%20to%20Work-brightgreen)
![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-f7df1e?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20.19%2B-339933?logo=node.js&logoColor=white)
![ESLint](https://img.shields.io/badge/Lint-ESLint-4b32c3?logo=eslint&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-0f766e)

### 🌐 [Live Demo](https://saravanansaranraj27.github.io/saran-raj-saravanan-portfolio)

This is the personal portfolio of Saran Raj Saravanan, a Full Stack Developer based in Dindigul, India. It presents an about section, categorized skills, work experience, projects, education, and certifications in a single-page site with system-aware dark and light themes.

All content lives in one structured data file, separate from the presentational components. The site is a static build with no backend, deployed to GitHub Pages.

## Contents

- [Site content](#site-content)
- [Features](#features)
- [Quick start](#quick-start)
- [Using the site](#using-the-site)
- [Project structure](#project-structure)
- [Technology](#technology)
- [Development commands](#development-commands)
- [Customization](#customization)
- [Deployment](#deployment)
- [Linting](#linting)
- [Troubleshooting](#troubleshooting)
- [Complete command reference](#complete-command-reference)
- [About me](#about-me)
- [Limitations](#limitations)
- [Connect with me](#connect-with-me)
- [Contributing](#contributing)
- [License](#license)

## Site content

The site is a single page made of **6 sections**, all rendered from `src/data/portfolio.js`.

### Sections — 6 anchors

| Section    | Anchor            | Content                                                               |
| ---------- | ----------------- | --------------------------------------------------------------------- |
| About      | `#about`          | Introduction, location, and resume View and Download actions          |
| Skills     | `#skills`         | 7 skill categories with icon-backed technology tags                   |
| Experience | `#experience`     | Professional experience                                               |
| Projects   | `#projects`       | 12 featured projects with technology tags and Code or Live Demo links |
| Education  | `#education`      | 2 degrees                                                             |
| Badges     | `#certifications` | 2 certifications                                                      |

### Skills — 7 categories

| Category              | Category        |
| --------------------- | --------------- |
| Programming Languages | Testing         |
| Backend               | Databases       |
| Frontend              | Cloud Platforms |
| Tools & Practices     |                 |

### Data exports

| Export           | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| `TECH_META`      | Color and icon for each technology tag               |
| `CHIP_ICONS`     | Icons for chip buttons                               |
| `personalInfo`   | Name, title, location, and contact links             |
| `navLinks`       | Header navigation entries                            |
| `skills`         | Skill categories and their technologies              |
| `experience`     | Work experience entries                              |
| `projects`       | Project titles, tech stacks, descriptions, and links |
| `education`      | Degrees and institutions                             |
| `certifications` | Certifications and issuers                           |

## Features

| Area                    | Capabilities                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| System-aware theming    | Detects the OS `prefers-color-scheme` on load with an inline `index.html` script, so there is no flash of the wrong theme |
| Theme toggle            | Switches dark and light mode from the header for the current session                                                      |
| Skeleton loading        | Shows an animated `Loader` skeleton of the whole page during an 800ms initial load                                        |
| Scroll animations       | Reveals content with a custom `IntersectionObserver`-based `Reveal` component, with no animation library                  |
| Active section tracking | Highlights the current navigation item as you scroll, using `IntersectionObserver`                                        |
| Back to top             | Shows a button after scrolling past 400px                                                                                 |
| Copy email              | Copies the email address to the clipboard in one click                                                                    |
| Resume                  | Offers View and Download actions for the bundled PDF resume                                                               |
| Custom icons            | Uses a fully custom SVG icon system in `Icons.jsx`, with no icon library                                                  |
| Responsive design       | Uses CSS variables, Flexbox and Grid, and media queries, with a mobile menu in the header                                 |
| Data-driven content     | Keeps all content in `src/data/portfolio.js`, decoupled from the components                                               |
| GitHub Pages ready      | Builds with a `/saran-raj-saravanan-portfolio/` base path and a `deploy` script                                           |
| ESLint                  | Lints with a flat config, React Hooks rules, and React Refresh rules                                                      |

## Quick start

### Requirements

- Node.js 20.19 or newer (or 22.12 or newer), as required by Vite 8
- npm
- Visual Studio Code is recommended

### Clone the repository

```bash
git clone https://github.com/saravanansaranraj27/saran-raj-saravanan-portfolio.git
cd saran-raj-saravanan-portfolio
```

### Install dependencies

```bash
npm install
```

`gh-pages` is already listed in `devDependencies`, so no separate install is needed for deployment.

### Verify Node.js

```bash
node --version
```

### Verify the installation

```bash
npm run lint
npm run build
```

## Using the site

The development server serves the site under the `/saran-raj-saravanan-portfolio/` base path.

### Start the development server

```powershell
npm run dev
```

The site runs at:

```text
http://localhost:5173/saran-raj-saravanan-portfolio/
```

### Workflow

1. Open the site and use the header navigation to jump to About, Skills, Experience, Projects, Education, or Badges
2. Use the theme toggle in the header to switch between dark and light mode
3. Use **View Resume** or **Download Resume** in the About section to open or save the PDF
4. Copy the email address with the copy button
5. Open any project's Code or Live Demo link from the Projects section

### Preview the production build

```powershell
npm run build
npm run preview
```

## Project structure

```text
saran-raj-saravanan-portfolio/
├── src/
│   ├── assets/
│   │   ├── Saran_Raj_Saravanan_Resume.pdf   # Resume file, bundled as a static asset
│   │   ├── hero.png                         # Image asset (not referenced in src)
│   │   ├── react.svg                        # Default Vite template asset (not referenced in src)
│   │   └── vite.svg                         # Default Vite template asset (not referenced in src)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Loader.jsx                   # Skeleton loading screen
│   │   │   ├── Reveal.jsx                   # Scroll-triggered reveal wrapper
│   │   │   └── TechTags.jsx                 # Technology tags and chip buttons
│   │   └── layout/
│   │       ├── Header.jsx                   # Navigation, theme toggle, mobile menu
│   │       └── Footer.jsx                   # Site footer
│   ├── data/
│   │   └── portfolio.js                     # Personal info, skills, experience, projects,
│   │                                        # education, and certifications
│   ├── hooks/
│   │   └── useSystemTheme.js                # Detects the OS light or dark preference
│   ├── layouts/
│   │   └── MainLayout.jsx                   # Page shell: header, content, footer
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.jsx                     # All six page sections
│   │   └── NotFound/
│   │       └── NotFound.jsx                 # Not-found page (not wired to a router)
│   ├── styles/
│   │   ├── globals.css                      # Global layout and component styles
│   │   ├── themes.css                       # Light and dark theme variables
│   │   └── variables.css                    # Shared CSS custom properties
│   ├── App.jsx                              # Root component: loading, theme, scroll logic
│   ├── Icons.jsx                            # Custom SVG icon components
│   └── main.jsx                             # Entry point
│
├── public/
│   ├── favicon.svg                          # Site favicon
│   └── icons.svg                            # Static SVG icons
├── index.html                               # HTML shell, fonts, and early theme script
├── vite.config.js                           # Vite config with the /saran-raj-saravanan-portfolio/ base path
├── eslint.config.js                         # ESLint flat configuration
├── .gitignore                               # Git exclusions for generated files
├── package.json                             # Dependencies and npm scripts
├── package-lock.json                        # Locked npm dependency versions
└── README.md                                # Project documentation
```

## Technology

- [React 19](https://react.dev/) — UI components and hooks (`useState`, `useEffect`, `useRef`)
- [Vite 8](https://vite.dev/) — dev server and production build
- [`@vitejs/plugin-react`](https://www.npmjs.com/package/@vitejs/plugin-react) — React support for Vite
- JavaScript (ES6+) — application code
- CSS3 — CSS variables, Flexbox and Grid, and media queries, with no CSS framework
- [Google Fonts](https://fonts.google.com/) — Inter and Sora
- `IntersectionObserver` — scroll reveal and active section tracking
- [ESLint](https://eslint.org/) — flat config with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- [`gh-pages`](https://www.npmjs.com/package/gh-pages) — static deployment to GitHub Pages

## Development commands

### Application

```powershell
npm run dev
npm run build
npm run preview
```

### Linting

```powershell
npm run lint
```

### Deployment

```powershell
npm run deploy
```

## Customization

Update the content by editing the `personalInfo`, `navLinks`, `skills`, `experience`, `projects`, `education`, and `certifications` exports in `src/data/portfolio.js`. No component changes are needed for content updates.

### Add or update a project

```javascript
export const projects = [
  {
    title: "Your Project Name",
    tech: ["React", "Spring Boot"],
    description: "Brief description of the project.",
    links: [
      { label: "Code", url: "https://github.com/your-repo", type: "code" },
      { label: "Live Demo", url: "https://your-live-demo.com", type: "live" },
    ],
  },
];
```

### Add a new skill icon

Update the `TECH_META` object at the top of `src/data/portfolio.js`. The icons themselves come from `src/Icons.jsx`:

```javascript
const TECH_META = {
  // ... existing skills
  "New Technology": { color: "#hexcode", Icon: YourCustomIcon },
};
```

### Replace the resume

Replace `src/assets/Saran_Raj_Saravanan_Resume.pdf` with your own PDF, keeping the same file name, or update the import in `src/pages/Home/Home.jsx`.

## Deployment

### Deploy to GitHub Pages

Build the project and publish the `dist` folder:

```powershell
npm run deploy
```

The `deploy` script runs `gh-pages -d dist`. Run `npm run build` first so `dist` is current.

The site is served under the `/saran-raj-saravanan-portfolio/` base path configured in `vite.config.js`. If you rename the repository, update `base` to match.

### Manual deployment

Create a production build:

```powershell
npm run build
```

The built files are located in the `dist/` directory and can be deployed to any static hosting service configured for the `/saran-raj-saravanan-portfolio/` base path.

## Linting

The project uses ESLint with a flat configuration covering `.js` and `.jsx` files, with the React Hooks and React Refresh plugins. The `dist` folder is ignored.

```powershell
npm run lint
```

## Troubleshooting

### Node.js version error or build failure

Vite 8 needs Node.js 20.19 or newer (or 22.12 or newer). Check your version:

```powershell
node --version
```

Install a supported version, then run `npm install` again.

### The page is blank or returns 404 in development

The site uses the `/saran-raj-saravanan-portfolio/` base path. Open:

```text
http://localhost:5173/saran-raj-saravanan-portfolio/
```

### Port 5173 is already in use

Stop the other process, or start the server on another port:

```powershell
npm run dev -- --port 5174
```

### The site is reachable from other devices only on localhost

`npm run dev` runs plain `vite`, which listens on localhost only. To test from another device on your network, pass `--host`:

```powershell
npm run dev -- --host
```

### Assets fail to load on GitHub Pages

Confirm `base` in `vite.config.js` matches the repository name, then rebuild and redeploy:

```powershell
npm run build
npm run deploy
```

### ESLint errors

Run:

```powershell
npm run lint
```

### The theme does not stay after a reload

This is expected. The theme toggle applies to the current session only and is not saved, so the site follows the OS preference on every load.

## Complete command reference

```powershell
git clone https://github.com/saravanansaranraj27/saran-raj-saravanan-portfolio.git
npm install
node --version
npm run dev
npm run dev -- --host
npm run build
npm run preview
npm run lint
npm run deploy
```

## About me

I am a **Full Stack Developer** based in Dindigul, India, with 1.5+ years of experience across **Python (FastAPI, automation scripting)** and **Java (Spring Boot, React.js, Angular)**, building REST APIs and full-stack web applications. I have a strong foundation in incident management and Root Cause Analysis, with proven results improving system reliability and reducing manual triage effort. I recently completed my M.B.A. in Systems Management and am currently open to new opportunities where I can leverage my technical skills and strategic management insights.

| Area                | Skills                                                                                   |
| ------------------- | ---------------------------------------------------------------------------------------- |
| Languages           | Python, Java, JavaScript, TypeScript, Go                                                 |
| Backend             | FastAPI, REST APIs, Spring Boot, Spring Security, Microservices                          |
| Frontend            | React.js, Angular, HTML5, CSS3, SCSS                                                     |
| Testing             | Playwright                                                                               |
| Databases           | MySQL, SQLAlchemy                                                                        |
| Cloud platforms     | AWS, Azure                                                                               |
| Tools and practices | Git, Kibana, GitHub Copilot, Incident Management, Root Cause Analysis, Automation, Agile |

## Limitations

- All content is hard-coded in `src/data/portfolio.js`. There is no CMS or backend, so updates require a code change and a redeploy.
- The theme toggle is session-only. It is not saved to `localStorage`, so the site follows the OS `prefers-color-scheme` on every reload.
- The site is a single page with no router. `NotFound.jsx` exists but is not wired up.
- No automated tests are included in the project.

## Connect with me

|                                                                          LinkedIn                                                                          |                                                                     GitHub                                                                      |                                                                  Gmail                                                                   |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
| [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/saran-raj-saravanan) | [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/saravanansaranraj27) | [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ssaranraj15102021@gmail.com) |

## Contributing

This is a personal portfolio, but bug reports and suggestions are welcome through issues or pull requests.

Keep changes focused and verify them before opening a pull request:

```powershell
npm run lint
npm run build
```

## License

This project is licensed under the MIT License.
