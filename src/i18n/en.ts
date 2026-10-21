export const en = {
  nav: {
    about: 'about',
    experience: 'experience',
    projects: 'projects',
    skills: 'skills',
    contact: 'contact',
    cv: 'cv',
  },
  theme: {
    dark: 'dark',
    light: 'light',
  },
  language: {
    change: 'Change language',
  },
  hero: {
    statement: 'EDUARDO RODRÍGUEZ\nFULL STACK DEVELOPER',
    supporting: '{{years}}+ years shipping .NET/Angular platforms and React/Go SaaS.',
    cta: 'contact --email',
    status: 'Available for remote work',
    prompt: 'eduardo@edoutput:~$',
    command: 'whoami',
    shellLink: 'open the live shell in contact',
  },
  about: {
    facts: {
      role: { label: 'role', value: 'Full Stack Developer' },
      based: { label: 'based', value: 'Venezuela' },
      remote: { label: 'remote', value: 'US / LATAM' },
    },
    paragraph:
      'I build software that has to keep working after the handoff: banking platforms, government systems, and my own SaaS products from idea to deployment. My day-to-day stack is .NET and Angular; my side projects run on React, Next.js, Go and PostgreSQL.',
    portraitAlt: 'Eduardo Rodríguez standing on a bridge in Buenos Aires.',
    records: {
      companies: {
        label: 'companies',
        items: [
          { name: 'Springbrook Software', year: '2025–present' },
          { name: 'WebCreek', year: '2023–2025' },
          { name: 'Alabama Solutions', year: '2022–2023' },
          { name: 'Versoft', year: '2021–2022' },
          { name: 'VE Core Systems', year: '2019–2021' },
          { name: 'ArmandoInfo', year: '2018–2019' },
        ],
      },
      domains: {
        label: 'domains',
        items: [
          { name: 'Digital banking', year: 'LAFISE / Republic Bank' },
          { name: 'Government platforms', year: 'PUBLIQ' },
          { name: 'Funeral services', year: 'NorthStar Memorial' },
          { name: 'News & media', year: 'Armando.Info' },
          { name: 'Retail / OCR', year: 'MERKI' },
          { name: 'Tourism', year: 'Viaja Venezuela' },
        ],
      },
    },
  },
  stats: {
    heading: 'A long-running process',
    note: 'Years of shipping production systems across three continents.',
    total: '{{years}}+',
    totalLabel: 'years online',
    receipt: {
      group1: 'Companies',
      group2: 'Projects',
      group3: 'Stack families',
      rows: [
        { desc: 'Full-time roles', value: '6' },
        { desc: 'Continents served', value: '3' },
        { desc: 'Featured products', value: '4' },
        { desc: 'Lines still shipping', value: 'all of them' },
        { desc: 'Main backend', value: '.NET / Go' },
        { desc: 'Main frontend', value: 'Angular / React' },
        { desc: 'Databases', value: 'SQL Server / Postgres' },
        { desc: 'Cloud', value: 'Azure / AWS' },
      ],
      totalRow: '{{years}}+ years',
    },
  },
  experience: {
    heading: 'Experience',
    note: 'A log of production systems, in reverse order.',
    items: [
      {
        company: 'Springbrook Software',
        title: 'Full Stack .NET & Angular Developer',
        period: 'April 2025 – Present',
        location: 'North Carolina, US (remote)',
        bullets: [
          'Develop Publiq, a citizen-service platform for local governments and utilities.',
          'Architect microservices to improve scalability and performance.',
          'Design and manage SQL Server databases with T-SQL.',
        ],
      },
      {
        company: 'WebCreek',
        title: 'Full Stack .NET & Angular Developer',
        period: 'September 2023 – March 2025',
        location: 'Houston, US (remote)',
        bullets: [
          'Built the NorthStar Memorial Group web application with Angular and .NET.',
          'Managed SQL Server databases and implemented Azure Functions.',
          'Set up CI/CD pipelines with Azure DevOps and Git.',
        ],
      },
      {
        company: 'Alabama Solutions',
        title: 'Full Stack .NET & Angular Developer',
        period: 'February 2022 – August 2023',
        location: 'Uruguay (remote)',
        bullets: [
          'Developed LAFISE and Republic Bank digital banking platforms for Infocorp.',
          'Improved user experience and optimized banking workflows.',
          'Collaborated with cross-functional teams for full integration.',
        ],
      },
      {
        company: 'Versoft',
        title: 'Full Stack Developer',
        period: 'February 2021 – February 2022',
        location: 'Santo Domingo, DO (remote)',
        bullets: [
          'Developed REST APIs and Angular/.NET Core web pages.',
          'Designed and managed SQL Server databases.',
          'Participated in the full development cycle of each project.',
        ],
      },
      {
        company: 'VE Core Systems',
        title: 'Software Developer',
        period: 'November 2019 – March 2021',
        location: 'Caracas, VE (remote)',
        bullets: [
          'Built and maintained REST APIs with .NET Core MVC.',
          'Managed databases with T-SQL and implemented microservices.',
          'Collaborated across teams to ensure seamless integration.',
        ],
      },
      {
        company: 'ArmandoInfo',
        title: 'Junior .NET Developer',
        period: 'July 2018 – November 2019',
        location: 'Caracas, VE',
        bullets: [
          'Developed the Armando.Info website with .NET Core MVC.',
          'Built a mobile app with Xamarin Forms and an internal system with Windows Forms.',
          'Participated in every stage of the software lifecycle.',
        ],
      },
    ],
  },
  projects: {
    heading: 'Projects',
    note: 'Selected SaaS and side projects, in order of pride.',
    liveLabel: 'live site',
    repoLabel: 'repository',
    items: [
      {
        title: 'MERKI',
        year: '2026',
        description:
          'A cross-platform supermarket cart calculator for Venezuela. Users track a cart total in USD and bolívares, scan receipts with on-device OCR, and sync budgets across devices.',
      },
      {
        title: 'Business Manager',
        year: '2024',
        description:
          'A microservices-based business management platform built to explore gRPC communication and polyglot persistence across PostgreSQL, MongoDB and Redis.',
      },
      {
        title: 'GPS Medical Assistance',
        year: '2022',
        description:
          'Accident detection system that identifies the user through facial recognition and alerts emergency contacts via Twilio SMS, with OpenStreetMap location.',
      },
      {
        title: 'Viaja Venezuela',
        year: '2022',
        description:
          'Tourism agency platform with a Clean Architecture / DDD backend using CQRS, MediatR and FluentValidation, paired with an Angular storefront.',
      },
    ],
  },
  skills: {
    heading: 'Skills',
    note: 'Two stacks that usually meet in the same project.',
    professional: 'Professional',
    builder: 'Builder / SaaS',
  },
  contact: {
    heading: 'Contact',
    greeting: 'Say hello',
    cvTitle: 'Resume',
    cvNote: 'Choose a language:',
    downloadEn: 'CV — English (PDF)',
    downloadEs: 'CV — Spanish (PDF)',
    rows: {
      email: 'edro998@gmail.com',
      phone: '+58 04141280555',
      linkedin: 'linkedin.com/in/edorguez',
      github: 'github.com/edorguez',
      location: 'Venezuela',
    },
    terminal: {
      prompt: 'eduardo@edoutput:~$',
      placeholder: 'type a command...',
      hint: 'Try one of these:',
      help: 'Commands: help, cv, email, linkedin, github, whoami, lang en/es, theme dark/light, clear',
      unknown: '{{cmd}}: command not found',
      suggestion: 'Did you mean "{{cmd}}"? Type "help" to see every command.',
      whoami: 'Eduardo Rodríguez — Full Stack Developer',
      email: 'opening mailto:{{email}}',
      linkedin: 'opening {{url}}',
      github: 'opening {{url}}',
      download: 'downloading {{file}}',
      langEn: 'language set to English',
      langEs: 'language set to Spanish',
      themeDark: 'theme set to dark',
      themeLight: 'theme set to light',
    },
  },
  faq: {
    heading: 'Meta',
    rows: [
      { q: 'Who built this site?', a: 'Eduardo Rodríguez. Design direction from the taste-skill, code by hand.' },
      { q: 'What powers it?', a: 'Vite 8, React 19, TypeScript, GSAP and Sass CSS Modules, self-hosted on a local machine behind a Cloudflare Tunnel.' },
      { q: 'Can I read the source?', a: 'Yes. The repository is public at github.com/edorguez.' },
      { q: 'Is the resume up to date?', a: 'Yes. Use the English or Spanish download buttons in the contact section.' },
    ],
  },
  footer: {
    backToTop: 'back to top',
    legal: '© {{year}} Eduardo Rodríguez. All rights reserved.',
  },
} as const;
