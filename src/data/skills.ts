export interface SkillGroup {
  id: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'professional',
    items: [
      'C# / .NET',
      'ASP.NET Core',
      'Angular',
      'SQL Server',
      'T-SQL',
      'Entity Framework',
      'Azure Functions',
      'Azure DevOps',
      'Microservices',
      'REST APIs',
      'Xamarin Forms',
    ],
  },
  {
    id: 'builder',
    items: [
      'TypeScript',
      'React',
      'Next.js',
      'React Native / Expo',
      'Go / Gin',
      'gRPC',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Docker',
      'AWS',
      'GitHub Actions',
      'Zustand',
    ],
  },
] as const;
