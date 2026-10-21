export interface SkillEntry {
  label: string;
  icon?: string;
  monogram?: string;
}

export interface SkillGroup {
  id: string;
  items: SkillEntry[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'professional',
    items: [
      { label: 'C# / .NET', icon: 'dotnet' },
      { label: 'ASP.NET Core', icon: 'dotnetcore' },
      { label: 'Angular', icon: 'angular' },
      { label: 'SQL Server', icon: 'sqlserver' },
      { label: 'T-SQL', icon: 'sqlserver' },
      { label: 'Entity Framework', icon: 'entityframework' },
      { label: 'Azure Functions', icon: 'azure' },
      { label: 'Azure DevOps', icon: 'azuredevops' },
      { label: 'Microservices', monogram: 'MS' },
      { label: 'REST APIs', icon: 'openapi' },
      { label: 'Xamarin Forms', icon: 'xamarin' },
    ],
  },
  {
    id: 'builder',
    items: [
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'React', icon: 'react' },
      { label: 'Next.js', icon: 'nextjs' },
      { label: 'React Native / Expo', icon: 'expo' },
      { label: 'Go / Gin', icon: 'go' },
      { label: 'gRPC', icon: 'grpc' },
      { label: 'PostgreSQL', icon: 'postgresql' },
      { label: 'MongoDB', icon: 'mongodb' },
      { label: 'Redis', icon: 'redis' },
      { label: 'Docker', icon: 'docker' },
      { label: 'AWS', icon: 'aws' },
      { label: 'GitHub Actions', icon: 'githubactions' },
      { label: 'Zustand', monogram: 'Z' },
    ],
  },
];
