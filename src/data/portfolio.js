import {
  FileTextIcon,
  CodeIcon,
  WindowIcon,
  ServerIcon,
  ShieldIcon,
  PlugIcon,
  DatabaseIcon,
  CloudIcon,
  GitBranchIcon,
  ActivityIcon,
  SparkleIcon,
  AlertIcon,
  TargetIcon,
  BoltIcon,
  RefreshIcon,
  KeyIcon,
  WaveIcon,
  PaletteIcon,
  BarChartIcon,
  UsersIcon,
  FlaskIcon,
  CpuIcon,
  GraduationCapIcon,
} from "../Icons.jsx";

export const TECH_META = {
  Java: { color: "#f8981d", Icon: CodeIcon },
  Python: { color: "#3776ab", Icon: CodeIcon },
  CSV: { color: "#2ECC71", Icon: FileTextIcon },
  "Windows CLI": { color: "#0078d6", Icon: WindowIcon },
  JavaScript: { color: "#e64a19", Icon: CodeIcon },
  TypeScript: { color: "#3178c6", Icon: CodeIcon },
  Go: { color: "#00add8", Icon: CodeIcon },
  "Node.js": { color: "#6da55f", Icon: ServerIcon },
  "Spring Boot": { color: "#6db33f", Icon: ServerIcon },
  "Spring Security": { color: "#6db33f", Icon: ShieldIcon },
  "REST APIs": { color: "#a78bfa", Icon: PlugIcon },
  Microservices: { color: "#8b5cf6", Icon: PlugIcon },
  FastAPI: { color: "#059669", Icon: ServerIcon },
  React: { color: "#ff4a5a", Icon: WindowIcon },
  "React Router": { color: "#ca4245", Icon: PlugIcon },
  Angular: { color: "#dd0031", Icon: WindowIcon },
  HTML5: { color: "#e34f26", Icon: WindowIcon },
  CSS3: { color: "#2f8fce", Icon: WindowIcon },
  MySQL: { color: "#4479a1", Icon: DatabaseIcon },
  SQLAlchemy: { color: "#d34a3f", Icon: DatabaseIcon },
  AWS: { color: "#ff9900", Icon: CloudIcon },
  "Microsoft Azure": { color: "#0078d4", Icon: CloudIcon },
  Git: { color: "#f05032", Icon: GitBranchIcon },
  Kibana: { color: "#E01563", Icon: ActivityIcon },
  "GitHub Copilot": { color: "#8957e5", Icon: SparkleIcon },
  "Incident Management": { color: "#f2665a", Icon: AlertIcon },
  "Root Cause Analysis": { color: "#f5a623", Icon: TargetIcon },
  Automation: { color: "#2ECC71", Icon: BoltIcon },
  Agile: { color: "#4E1C66", Icon: RefreshIcon },
  JWT: { color: "#d63aff", Icon: KeyIcon },
  Vite: { color: "#8a67f8", Icon: BoltIcon },
  Svelte: { color: "#ff3e00", Icon: SparkleIcon },
  SvelteKit: { color: "#ff3e00", Icon: WindowIcon },
  RxJS: { color: "#b7178c", Icon: WaveIcon },
  SCSS: { color: "#cd6799", Icon: PaletteIcon },
  "Angular Material": { color: "#dd0031", Icon: PaletteIcon },
  "ngx-charts": { color: "#a855f7", Icon: BarChartIcon },
  PapaParse: { color: "#4a4a4a", Icon: FileTextIcon },
  "Next.js": { color: "#000000", Icon: WindowIcon },
  "math.js": { color: "#f58220", Icon: CodeIcon },
  Playwright: { color: "#2ead33", Icon: CodeIcon },
  Chromium: { color: "#4285f4", Icon: WindowIcon },
  "Android TV": { color: "#3ddc84", Icon: WindowIcon },
  ADB: { color: "#3ddc84", Icon: CodeIcon },
  Markdown: { color: "#8592ad", Icon: FileTextIcon },
  "M.B.A. — Systems Management": {
    color: "#1f6feb",
    Icon: FileTextIcon,
  },
  "B.E. — Civil Engineering": {
    color: "#1f6feb",
    Icon: FileTextIcon,
  },
  "Bharathidasan University · 2025": {
    color: "#ff9900",
    Icon: GraduationCapIcon,
  },
  "Mepco Schlenk Engineering College · 2023": {
    color: "#ff9900",
    Icon: GraduationCapIcon,
  },
  "Final Year Research Project": {
    color: "#8957e5",
    Icon: FlaskIcon,
  },
};

export const CHIP_ICONS = {
  INCIDENT: AlertIcon,
  AUTOMATION: BoltIcon,
  RCA: TargetIcon,
  TEAM: UsersIcon,
  RESEARCH: FlaskIcon,
  ANALYSIS: BarChartIcon,
  IOT: CpuIcon,
  DEV: CodeIcon,
  CLOUD: CloudIcon,
  "AI TOOLS": SparkleIcon,
  DOCS: FileTextIcon,
  TESTING: FlaskIcon,
  MERGED: GitBranchIcon,
  PR: GitBranchIcon,
  ABOUT: CodeIcon,
  SUMMARY: FileTextIcon,
  FILES: FileTextIcon,
  REVIEW: UsersIcon,
};

export const personalInfo = {
  name: "Saran Raj Saravanan",
  title:
    "Full Stack Developer | Python, FastAPI | Java, Spring Boot | React.js, Angular",
  location: "Dindigul, India",
  email: "ssaranraj15102021@gmail.com",
  phone: "+91 75488 62252",
  linkedin: "https://linkedin.com/in/saran-raj-saravanan",
  github: "https://github.com/saravanansaranraj27",
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Open Source", href: "#open-source" },
  { name: "Education", href: "#education" },
  { name: "Badges", href: "#certifications" },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "Go"],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "REST APIs",
      "Spring Boot",
      "Spring Security",
      "Microservices",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "Angular", "HTML5", "CSS3", "SCSS"],
  },
  {
    category: "Testing",
    items: ["Playwright"],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQLAlchemy"],
  },
  {
    category: "Cloud Platforms",
    items: ["AWS", "Microsoft Azure"],
  },
  {
    category: "Tools & Practices",
    items: [
      "Git",
      "Kibana",
      "GitHub Copilot",
      "Incident Management",
      "Root Cause Analysis",
      "Automation",
      "Agile",
    ],
  },
];

export const experience = [
  {
    role: "Analyst",
    company: "Capgemini",
    client:
      "Fortune 500 US-based Multinational Telecommunications & Media Conglomerate",
    period: "Jul 2024 – Apr 2026",
    achievements: [
      {
        tag: "INCIDENT",
        chip: "chip-incident",
        text: "Resolved 10+ production incidents monthly through root cause analysis, improving system uptime and reducing recurrences.",
      },
      {
        tag: "AUTOMATION",
        chip: "chip-automation",
        text: "Built Python automation for SOPs, cutting manual effort by 70%.",
      },
      {
        tag: "AUTOMATION",
        chip: "chip-automation",
        text: "Developed a FastAPI-based issue detection system for proactive monitoring and faster debugging.",
      },
      {
        tag: "TEAM",
        chip: "chip-team",
        text: "Designed triage rules from historical issue patterns, reducing repetitive incidents and team effort by 70%.",
      },
      {
        tag: "RCA",
        chip: "chip-rca",
        text: "Used Kibana, AI tools, and GitHub Copilot to accelerate root cause identification and minimize downtime.",
      },
      {
        tag: "AUTOMATION",
        chip: "chip-automation",
        text: "Automated ticket creation and triage with AI tools, cutting manual triage by 50% and resolution time by 80%.",
      },
      {
        tag: "TEAM",
        chip: "chip-team",
        text: "Collaborated cross-functionally with Dev, QA, and DevOps in Agile to deliver fixes and enhancements.",
      },
    ],
  },
];

export const projects = [
  {
    title: "DevLab",
    tech: ["Svelte", "SvelteKit", "Vite", "TypeScript", "Node.js", "CSS3"],
    description:
      "Browser-based developer learning workspace featuring interactive lessons, an in-browser coding playground, API lab, algorithm visualization, reusable snippets and patterns, and developer utilities.",
    links: [
      {
        label: "Live Demo",
        url: "https://saravanansaranraj27.github.io/dev-lab/",
        type: "live",
      },
      {
        label: "Code",
        url: "https://github.com/saravanansaranraj27/dev-lab",
        type: "code",
      },
    ],
  },
  {
    title: "DevLab Playwright",
    tech: ["Playwright", "TypeScript", "Node.js", "Chromium"],
    description:
      "Dedicated end-to-end testing suite for the DevLab SvelteKit application, covering navigation, sidebar workspaces, interactive tools, learning features, and workspace controls with Chromium.",
    links: [
      {
        label: "Code",
        url: "https://github.com/saravanansaranraj27/dev-lab-playwright",
        type: "code",
      },
    ],
  },
  {
    title: "Numeriq",
    tech: ["Next.js", "React", "TypeScript", "math.js", "Node.js", "CSS3"],
    description:
      "Browser-based mathematics workspace featuring a scientific calculator, equation and quadratic solvers, statistics, matrix operations, unit conversion, percentage calculations, function graphing, calculus, complex numbers, vectors, and finance calculators with persistent theme and accent color preferences.",
    links: [
      {
        label: "Live Demo",
        url: "https://saravanansaranraj27.github.io/numeriq",
        type: "live",
      },
      {
        label: "Code",
        url: "https://github.com/saravanansaranraj27/numeriq",
        type: "code",
      },
    ],
  },
  {
    title: "Numeriq Playwright",
    tech: ["Playwright", "TypeScript", "Node.js", "Chromium"],
    description:
      "Dedicated end-to-end testing suite for the Numeriq mathematics workspace, covering sidebar navigation, calculator interactions, equation solving, finance tools, graphing, global search, keyboard interactions, workspace routes, and responsive layouts with automated browser testing and failure diagnostics.",
    links: [
      {
        label: "Code",
        url: "https://github.com/saravanansaranraj27/numeriq-playwright",
        type: "code",
      },
    ],
  },
  {
    title: "Event Booking System",
    tech: [
      "Spring Boot",
      "Spring Security",
      "Java",
      "MySQL",
      "JWT",
      "React",
      "React Router",
      "Vite",
      "Node.js",
      "CSS3",
    ],
    description:
      "Full-stack event booking platform with JWT authentication and role-based access control. Includes event listing CRUD, booking management, an admin dashboard, and a calendar view.",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/saravanansaranraj27/booking-app-frontend",
        type: "code",
      },
      {
        label: "Backend",
        url: "https://github.com/saravanansaranraj27/booking-app-backend",
        type: "code",
      },
    ],
  },
  {
    title: "Inventory Management Application",
    tech: [
      "React",
      "Vite",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "MySQL",
      "Node.js",
      "CSS3",
    ],
    description:
      "Full-stack inventory system with complete CRUD flows, a responsive frontend, and backend APIs optimized for scalable, secure data handling.",
    links: [
      {
        label: "Code",
        url: "https://github.com/saravanansaranraj27/inventory-management-app",
        type: "code",
      },
    ],
  },
  {
    title: "TaskFlow",
    tech: ["React", "Vite", "Go", "MySQL", "Node.js", "CSS3"],
    description:
      "Full-stack productivity workspace with task management and status filtering, colorful quick notes, goal tracking with progress sliders, account authentication, and a unified dashboard with light/dark theme support.",
    links: [
      {
        label: "Code",
        url: "https://github.com/saravanansaranraj27/task-flow",
        type: "code",
      },
    ],
  },
  {
    title: "Python Automation Scripts",
    tech: ["Python", "CSV", "Windows CLI"],
    description:
      "A suite of Windows-focused CLI utilities for system management. Features include safe system shutdowns with configurable delays and 5-step network diagnostics (ping, trace route, IP config) with CSV logging.",
    links: [
      {
        label: "Code",
        url: "https://github.com/saravanansaranraj27/python-automation-scripts",
        type: "code",
      },
    ],
  },
  {
    title: "DevTools",
    tech: ["Angular", "TypeScript", "RxJS", "Node.js", "SCSS"],
    description:
      "Responsive utility suite featuring a searchable developer cheat sheet, JSON formatter, and Base64 encoder.",
    links: [
      {
        label: "Live Demo",
        url: "https://saravanansaranraj27.github.io/dev-tools/",
        type: "live",
      },
      {
        label: "Code",
        url: "https://github.com/saravanansaranraj27/dev-tools",
        type: "code",
      },
    ],
  },
  {
    title: "ToolNest",
    tech: ["React", "React Router", "Vite", "JavaScript", "Node.js", "CSS3"],
    description:
      "A high-performance, privacy-first developer utility suite built entirely client-side. Features Markdown parser, password strength analyzer, and text analytics.",
    links: [
      {
        label: "Live Demo",
        url: "https://saravanansaranraj27.github.io/tool-nest/",
        type: "live",
      },
      {
        label: "Code",
        url: "https://github.com/saravanansaranraj27/tool-nest",
        type: "code",
      },
    ],
  },
  {
    title: "PRISM Dashboard",
    tech: [
      "Angular",
      "TypeScript",
      "Angular Material",
      "ngx-charts",
      "PapaParse",
      "Node.js",
      "SCSS",
    ],
    badges: [
      "M.B.A. — Systems Management",
      "Bharathidasan University · 2025",
      "Final Year Research Project",
    ],
    description:
      "Behavioral-finance analytics dashboard visualizing small-cap stability trends, SCARF neurocognitive bias metrics, and SEBI compliance indicators.",
    links: [
      {
        label: "Live Demo",
        url: "https://saravanansaranraj27.github.io/prism-dashboard/",
        type: "live",
      },
      {
        label: "Code",
        url: "https://github.com/saravanansaranraj27/prism-dashboard",
        type: "code",
      },
    ],
  },
  {
    title: "EWPAS Dashboard",
    tech: [
      "Angular",
      "TypeScript",
      "Angular Material",
      "ngx-charts",
      "PapaParse",
      "Node.js",
      "SCSS",
    ],
    badges: [
      "B.E. — Civil Engineering",
      "Mepco Schlenk Engineering College · 2023",
      "Final Year Research Project",
    ],
    description:
      "Efficient Water Preference & Allocation System dashboard for monitoring water level, water quality, flow rate, water utilization, sensor accuracy, and prototype cost analysis.",
    links: [
      {
        label: "Live Demo",
        url: "https://saravanansaranraj27.github.io/ewpas-dashboard/",
        type: "live",
      },
      {
        label: "Code",
        url: "https://github.com/saravanansaranraj27/ewpas-dashboard",
        type: "code",
      },
    ],
  },
  {
    title: "DonorPulse",
    tech: ["React", "Vite", "JavaScript", "Node.js", "CSS3"],
    description:
      "Interactive health dashboard tracking donation history with Recharts trend analysis, predictive scheduling, and medical stability algorithms.",
    links: [
      {
        label: "Live Demo",
        url: "https://saravanansaranraj27.github.io/donor-pulse/",
        type: "live",
      },
      {
        label: "Code",
        url: "https://github.com/saravanansaranraj27/donor-pulse",
        type: "code",
      },
    ],
  },
  {
    title: "Task Manager Application",
    tech: ["React", "React Router", "Vite", "JavaScript", "Node.js", "CSS3"],
    description:
      "Task management app with authentication and an admin panel, built with React Context API and custom hooks for scalable state.",
    links: [
      {
        label: "Code",
        url: "https://github.com/saravanansaranraj27/task-manager-inventory",
        type: "code",
      },
    ],
  },
];

export const openSource = [
  {
    project: "CleanYourTV",
    repo: "Gathin23/cleanyourtv",
    role: "Contributor",
    status: "Merged",
    period: "Oct 25, 2026",
    prNumber: 1650,
    prTitle: "docs: add Xiaomi MiTV4I device notes",
    branch: "main",
    changes: "+24 -0, 2 files",
    mergedBy: "Gathin (Owner)",
    about:
      "CleanYourTV removes bloatware from Android TV and Google TV devices over Wi-Fi and replaces the ad-filled home screen with a clean launcher. It requires no root access or cable, uninstalls nothing, and supports a one-line restore.",
    summary:
      "Contributed a launcher-only device note and a README index entry for the Xiaomi MiTV4I. The launcher and app order were verified on the TV, and no debloat list was tested.",
    details: [
      {
        tag: "ABOUT",
        chip: "chip-rca",
        text: "CleanYourTV removes bloatware from Android TV and Google TV devices over Wi-Fi and replaces the ad-filled home screen with a clean launcher. It requires no root access or cable, uninstalls nothing, and supports a one-line restore.",
      },
      {
        tag: "SUMMARY",
        chip: "chip-team",
        text: "Contributed a launcher-only device note and a README index entry for the Xiaomi MiTV4I. The launcher and app order were verified on the TV, and no debloat list was tested.",
      },
      {
        tag: "PR",
        chip: "chip-team",
        text: "Pull request #1650, titled “docs: add Xiaomi MiTV4I device notes,” was merged into main on Oct 25, 2026 by the repository owner, Gathin.",
      },
      {
        tag: "FILES",
        chip: "chip-rca",
        text: "Wrote the device note docs/devices/xiaomi-mitv4i-magnolia.md and added its index entry to examples/README.md. The change totals 24 added lines and no deletions across two files (size/S).",
      },
      {
        tag: "TESTING",
        chip: "chip-automation",
        text: "Tested on a Xiaomi MiTV4I (magnolia) running Android TV 9 / API 28, firmware PI.3698. Confirmed CleanYourTV as the Home launcher; the Inputs menu showed HDMI 1–3 and AV, and YouTube was available.",
      },
      {
        tag: "TESTING",
        chip: "chip-automation",
        text: "Configured the dock as Live TV, YouTube, TV Manager and Media Player, and reordered the app grid to Disney+ Hotstar, Prime Video, Sony LIV, AirConsole, Google Play Store, YouTube Music, Google Play Movies & TV and Sensy TV Guide. The dock order was set in the local config.xml, and the app-grid order was saved on the TV. Both orders were verified on screen.",
      },
      {
        tag: "TESTING",
        chip: "chip-automation",
        text: "Temporarily enabled network ADB for the setup and layout changes, then disabled it and confirmed that the TV's ADB port was closed. No debloating or DNS changes were made, and multi-day use and other firmware versions were not tested. Automated tests were not run, as this was a documentation-only change.",
      },
      {
        tag: "REVIEW",
        chip: "chip-incident",
        text: "The maintainer-bot review suggested merging the pull request. The repository owner, Gathin, then merged it, noting “Good to have the MiTV4I on record,” and welcomed a tested debloat list for magnolia as a follow-up.",
      },
    ],
    tech: ["Git", "Android TV", "ADB", "Markdown"],
    links: [
      {
        label: "Merged PR #1650",
        url: "https://github.com/Gathin23/cleanyourtv/pull/1650",
        type: "code",
      },
      {
        label: "Repository",
        url: "https://github.com/Gathin23/cleanyourtv",
        type: "code",
      },
    ],
  },
];

export const education = [
  {
    degree: "M.B.A. — Systems Management",
    institution: "Bharathidasan University, India",
    institutionClass: "bharathidasan-company",
    period: "2023–2026",
    details: [
      {
        tag: "RESEARCH",
        chip: "chip-rca",
        text: "Built PRISM, a behavioral-finance model that turns investor sentiment into early warnings for small-cap fund redemption risk.",
      },
      {
        tag: "ANALYSIS",
        chip: "chip-incident",
        text: "Applied NLP to 18,500 investor posts and 237 stocks, cutting redemption clustering by 67% and forecast error by 22–42%.",
      },
    ],
  },
  {
    degree: "B.E. — Civil Engineering",
    institution: "Mepco Schlenk Engineering College, India",
    institutionClass: "mepco-company",
    period: "2019–2023",
    details: [
      {
        tag: "IOT",
        chip: "chip-automation",
        text: "Designed an Efficient Water Preference & Allocation System using Arduino, NodeMCU and Blynk IoT, with a projected 30–40% water saving for residential buildings.",
      },
      {
        tag: "DEV",
        chip: "chip-team",
        text: "Programmed the Arduino firmware for leak and overflow detection and a low-water preference mode on the overhead tank.",
      },
    ],
  },
];

export const certifications = [
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    issuerClass: "microsoft-company",
    details: [
      {
        tag: "CLOUD",
        chip: "chip-automation",
        text: "Validated knowledge of machine learning and AI workloads on Microsoft Azure.",
      },
    ],
  },
  {
    title: "GitHub Copilot Training",
    issuer: "Capgemini",
    issuerClass: "capgemini-company",
    details: [
      {
        tag: "AI TOOLS",
        chip: "chip-rca",
        text: "Mastered AI-pair programming to enhance code quality and development speed.",
      },
    ],
  },
];