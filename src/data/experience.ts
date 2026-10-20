export interface ExperienceMeta {
  id: string;
  tags: string[];
}

export const experienceMeta: ExperienceMeta[] = [
  {
    id: 'springbrook',
    tags: ['Angular', '.NET', 'SQL Server', 'T-SQL', 'Entity Framework', 'Microservices', 'Azure DevOps', 'Git'],
  },
  {
    id: 'webcreek',
    tags: ['Angular', '.NET', 'SQL Server', 'Entity Framework', 'Azure Functions', 'Azure DevOps', 'Git'],
  },
  {
    id: 'alabama',
    tags: ['Angular', 'ASP.NET', 'SQL Server'],
  },
  {
    id: 'versoft',
    tags: ['Angular', '.NET Core', 'SQL Server', 'Entity Framework'],
  },
  {
    id: 'vecore',
    tags: ['.NET Core MVC', 'SQL Server', 'T-SQL', 'Microservices'],
  },
  {
    id: 'armando',
    tags: ['.NET Core MVC', 'Xamarin Forms', 'Windows Forms'],
  },
] as const;
