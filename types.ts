export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role?: string;
  client?: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}