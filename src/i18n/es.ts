export const es = {
  nav: {
    about: 'sobre',
    experience: 'experiencia',
    projects: 'proyectos',
    skills: 'habilidades',
    contact: 'contacto',
    cv: 'cv',
  },
  theme: {
    dark: 'oscuro',
    light: 'claro',
  },
  language: {
    change: 'Cambiar idioma',
  },
  hero: {
    statement: 'EDUARDO RODRÍGUEZ\nDESARROLLADOR FULL STACK',
    supporting: '{{years}}+ años construyendo plataformas .NET/Angular y SaaS con React/Go.',
    cta: 'contacto --email',
    status: 'Disponible para trabajo remoto',
    prompt: 'eduardo@edoutput:~$',
    command: 'whoami',
  },
  about: {
    facts: {
      role: { label: 'rol', value: 'Desarrollador Full Stack' },
      based: { label: 'ubicación', value: 'Venezuela' },
      remote: { label: 'remoto', value: 'US / LATAM' },
    },
    paragraph:
      'Construyo software que debe seguir funcionando después de la entrega: plataformas bancarias, sistemas gubernamentales y mis propios productos SaaS, desde la idea hasta el despliegue. Mi stack diario es .NET y Angular; mis proyectos paralelos corren sobre React, Next.js, Go y PostgreSQL.',
    portraitAlt: 'Eduardo Rodríguez de pie en un puente de Buenos Aires.',
    records: {
      companies: {
        label: 'empresas',
        items: [
          { name: 'Springbrook Software', year: '2025–actual' },
          { name: 'WebCreek', year: '2023–2025' },
          { name: 'Alabama Solutions', year: '2022–2023' },
          { name: 'Versoft', year: '2021–2022' },
          { name: 'VE Core Systems', year: '2019–2021' },
          { name: 'ArmandoInfo', year: '2018–2019' },
        ],
      },
      domains: {
        label: 'dominios',
        items: [
          { name: 'Banca digital', year: 'LAFISE / Republic Bank' },
          { name: 'Plataformas gubernamentales', year: 'PUBLIQ' },
          { name: 'Servicios funerarios', year: 'NorthStar Memorial Group' },
          { name: 'Noticias y medios', year: 'Armando.Info' },
          { name: 'Retail / OCR', year: 'MERKI' },
          { name: 'Turismo', year: 'Viaja Venezuela' },
        ],
      },
    },
  },
  stats: {
    heading: 'Un proceso de largo plazo',
    note: 'Años enviando sistemas de producción en tres continentes.',
    total: '{{years}}+',
    totalLabel: 'años online',
    receipt: {
      group1: 'Empresas',
      group2: 'Proyectos',
      group3: 'Familias de stack',
      rows: [
        { desc: 'Roles de tiempo completo', value: '6' },
        { desc: 'Continentes atendidos', value: '3' },
        { desc: 'Productos destacados', value: '4' },
        { desc: 'Líneas aún en producción', value: 'todas' },
        { desc: 'Backend principal', value: '.NET / Go' },
        { desc: 'Frontend principal', value: 'Angular / React' },
        { desc: 'Bases de datos', value: 'SQL Server / Postgres' },
        { desc: 'Nube', value: 'Azure / AWS' },
      ],
      totalRow: '{{years}}+ años',
    },
  },
  experience: {
    heading: 'Experiencia',
    note: 'Registro de sistemas de producción, en orden inverso.',
    items: [
      {
        company: 'Springbrook Software',
        title: 'Desarrollador Full Stack .NET & Angular',
        period: 'Abril 2025 – Actual',
        location: 'Carolina del Norte, EE.UU. (remoto)',
        bullets: [
          'Desarrollo Publiq, plataforma de servicios ciudadanos para gobiernos locales y utilities.',
          'Arquitecto microservicios para mejorar escalabilidad y rendimiento.',
          'Diseño y administro bases de datos SQL Server con T-SQL.',
        ],
      },
      {
        company: 'WebCreek',
        title: 'Desarrollador Full Stack .NET & Angular',
        period: 'Septiembre 2023 – Marzo 2025',
        location: 'Houston, EE.UU. (remoto)',
        bullets: [
          'Construí la aplicación web de NorthStar Memorial Group con Angular y .NET.',
          'Gestioné bases de datos SQL Server e implementé Azure Functions.',
          'Configuré pipelines CI/CD con Azure DevOps y Git.',
        ],
      },
      {
        company: 'Alabama Solutions',
        title: 'Desarrollador Full Stack .NET & Angular',
        period: 'Febrero 2022 – Agosto 2023',
        location: 'Uruguay (remoto)',
        bullets: [
          'Desarrollé plataformas de banca digital LAFISE y Republic Bank para Infocorp.',
          'Mejoré la experiencia de usuario y optimicé flujos bancarios.',
          'Colaboré con equipos multidisciplinarios para integración completa.',
        ],
      },
      {
        company: 'Versoft',
        title: 'Desarrollador Full Stack',
        period: 'Febrero 2021 – Febrero 2022',
        location: 'Santo Domingo, DO (remoto)',
        bullets: [
          'Desarrollé APIs REST y páginas web con Angular y .NET Core.',
          'Diseñé y gestioné bases de datos SQL Server.',
          'Participé en el ciclo completo de desarrollo de cada proyecto.',
        ],
      },
      {
        company: 'VE Core Systems',
        title: 'Desarrollador de Software',
        period: 'Noviembre 2019 – Marzo 2021',
        location: 'Caracas, VE (remoto)',
        bullets: [
          'Construí y mantuve APIs REST con .NET Core MVC.',
          'Gestioné bases de datos con T-SQL e implementé microservicios.',
          'Colaboré con equipos para asegurar integración sin problemas.',
        ],
      },
      {
        company: 'ArmandoInfo',
        title: 'Desarrollador .NET Junior',
        period: 'Julio 2018 – Noviembre 2019',
        location: 'Caracas, VE',
        bullets: [
          'Desarrollé el sitio Armando.Info con .NET Core MVC.',
          'Construí una app móvil con Xamarin Forms y un sistema interno con Windows Forms.',
          'Participé en todas las etapas del ciclo de vida del software.',
        ],
      },
    ],
  },
  projects: {
    heading: 'Proyectos',
    note: 'SaaS y proyectos personales seleccionados, por orgullo.',
    liveLabel: 'sitio en vivo',
    repoLabel: 'repositorio',
    items: [
      {
        title: 'MERKI',
        year: '2026',
        description:
          'Calculadora de carrito de supermercado multiplataforma para Venezuela. Los usuarios llevan el total en USD y bolívares, escanean recibos con OCR en el dispositivo y sincronizan presupuestos.',
      },
      {
        title: 'Business Manager',
        year: '2024',
        description:
          'Plataforma de gestión empresarial basada en microservicios, construida para explorar comunicación gRPC y persistencia políglota entre PostgreSQL, MongoDB y Redis.',
      },
      {
        title: 'GPS Medical Assistance',
        year: '2022',
        description:
          'Sistema de detección de accidentes que identifica al usuario mediante reconocimiento facial y alerta a contactos de emergencia por SMS a través de Twilio, con ubicación en OpenStreetMap.',
      },
      {
        title: 'Viaja Venezuela',
        year: '2022',
        description:
          'Plataforma de agencia de viajes con backend Clean Architecture / DDD usando CQRS, MediatR y FluentValidation, junto a una tienda Angular.',
      },
    ],
  },
  skills: {
    heading: 'Habilidades',
    note: 'Dos stacks que usualmente se encuentran en el mismo proyecto.',
    professional: 'Profesional',
    builder: 'Creador / SaaS',
  },
  contact: {
    heading: 'Contacto',
    greeting: 'Di hola',
    cvTitle: 'Currículum',
    cvNote: 'Elige un idioma:',
    downloadEn: 'CV — Inglés (PDF)',
    downloadEs: 'CV — Español (PDF)',
    rows: {
      email: 'edro998@gmail.com',
      phone: '+58 04141280555',
      linkedin: 'linkedin.com/in/edorguez',
      github: 'github.com/edorguez',
      location: 'Venezuela',
    },
    terminal: {
      prompt: 'eduardo@edoutput:~$',
      placeholder: 'escribe un comando...',
      hint: 'Prueba uno de estos:',
      help: 'Comandos: help, cv, email, linkedin, github, whoami, lang en/es, theme dark/light, clear',
      unknown: '{{cmd}}: comando no encontrado',
      suggestion: '¿Quisiste decir "{{cmd}}"? Escribe "help" para ver todos los comandos.',
      whoami: 'Eduardo Rodríguez — Desarrollador Full Stack',
      email: 'abriendo mailto:{{email}}',
      linkedin: 'abriendo {{url}}',
      github: 'abriendo {{url}}',
      download: 'descargando {{file}}',
      langEn: 'idioma cambiado a inglés',
      langEs: 'idioma cambiado a español',
      themeDark: 'tema cambiado a oscuro',
      themeLight: 'tema cambiado a claro',
    },
  },
  faq: {
    heading: 'Meta',
    rows: [
      { q: '¿Quién construyó este sitio?', a: 'Eduardo Rodríguez. Dirección de diseño desde taste-skill, código escrito a mano.' },
      { q: '¿Qué lo impulsa?', a: 'Vite 8, React 19, TypeScript, GSAP y Sass CSS Modules, autoalojado en una máquina local detrás de un túnel de Cloudflare.' },
      { q: '¿Puedo leer el código fuente?', a: 'Sí. El repositorio es público en github.com/edorguez/portfolio-page.' },
      { q: '¿El CV está actualizado?', a: 'Sí. Usa los botones de descarga en inglés o español en la sección de contacto.' },
    ],
  },
  footer: {
    backToTop: 'volver arriba',
    legal: '© {{year}} Eduardo Rodríguez. Todos los derechos reservados.',
  },
} as const;
