import { StaticImageData } from 'next/image';

/**
 * Project type for portfolio projects.
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  techStacks: string[];
  image: StaticImageData;
  githubURL: string;
  githubApi: string;
  liveURL: string;
} 