export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  objective: string;
  technology: string[];
  securityConsiderations: string[];
  implementation: string;
  result: string;
  lessonsLearned: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  category: string;
  year: string;
  shortDescription: string;
  technologies: string[];
  ctaText: string;
  isAvailable: boolean;
  githubUrl: string;
  caseStudy: ProjectCaseStudy;
  visualType: 'aegis' | 'platform' | 'encryption' | 'keylogger' | 'password' | 'cipher';
}

export interface SecurityFocusArea {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface TechStackCategory {
  category: string;
  skills: string[];
}

export interface ExploringTopic {
  title: string;
  category: string;
  progress: number;
  description: string;
}
