import { ProjectStatus } from './enums';
import { ReactNode } from 'react';

type CardTitle = {
  name: string;
  url?: string | undefined;
};

type CardInfo = {
  icon: JSX.Element;
  title: CardTitle;
  description: string;
};

type Socials = {
  email: string;
  linkedin?: string | null;
  twitter?: string | null;
  github?: string | null;
};

type Employee = {
  id: string;
  name: string;
  surname: string;
  role: string;
  introduction: string;
  skills: string[];
  image: {
    url: string;
  };
  socials: Socials;
};

type LayoutLink = {
  label: string;
  url: string;
};

type Project = {
  id: string;
  name: string;
  client: string;
  category: string;
  description: string;
  image: string | null;
  dateCompleted: string;
  duration: string;
  teamSize: string;
  features: string[];
  technologies: string[];
  results: string[];
  gradient: string;
  icon: string;
  productionUrl: string | null;
  caseStudyUrl: string | null;
  projectStatus: ProjectStatus;
  order: number | null;
};

type Testimonial = {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string | null;
  project: string;
};
