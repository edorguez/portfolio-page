export interface ProjectMeta {
  id: string;
  year: string;
  liveUrl: string;
  repoUrl: string;
  screenshot: string;
  tags: string[];
}

export const projectsMeta: ProjectMeta[] = [
  {
    id: 'merki',
    year: '2026',
    liveUrl: 'https://somosmerki.app',
    repoUrl: 'https://github.com/edorguez/merki',
    screenshot: '/screenshots/merki.png',
    tags: ['React Native (Expo)', 'React', 'Zustand', 'Go/Gin', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
  },
  {
    id: 'business-manager',
    year: '2024',
    liveUrl: 'https://business-manager.edoutput.dev',
    repoUrl: 'https://github.com/edorguez/business-manager',
    screenshot: '/screenshots/business-manager.png',
    tags: ['Next.js', 'Zustand', 'TailwindCSS', 'Go', 'gRPC', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    id: 'gps-medical',
    year: '2022',
    liveUrl: 'https://gps-medical-assistance.edoutput.dev',
    repoUrl: 'https://github.com/edorguez/gps-medical-assistance',
    screenshot: '/screenshots/gps-medical.png',
    tags: ['Angular', '.NET 6', 'EF Core', 'Node.js', 'MongoDB', 'PostgreSQL', 'Twilio'],
  },
  {
    id: 'tourism-agency',
    year: '2022',
    liveUrl: 'https://tourism-agency.edoutput.dev',
    repoUrl: 'https://github.com/edorguez/tourism-agency',
    screenshot: '/screenshots/tourism-agency.png',
    tags: ['Angular', '.NET 7', 'EF Core', 'PostgreSQL', 'MediatR', 'CQRS'],
  },
] as const;
