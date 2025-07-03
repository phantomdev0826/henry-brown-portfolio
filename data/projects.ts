import type { Project } from '@/types/project';
import VSCode from '@/public/assets/projects/vscode.png';
import PortfolioV2 from '@/public/assets/projects/portfolio-v2.png';
import MantineBoards from '@/public/assets/projects/mantine-boards.png';
import MotionScape from '@/public/assets/projects/motion-scape.png';
import ValentinCarousel from '@/public/assets/projects/valentin-carousel.png';
import TheRealHotels from '@/public/assets/projects/therealhotels.png';
import MiroClone from '@/public/assets/projects/miro-clone.png';

/**
 * List of featured projects for the portfolio.
 */
export const projects: readonly Project[] = [
  {
    id: 1,
    title: 'VSCode Portfolio',
    description: 'My portfolio website in vscode version developed with React and TypeScript.',
    techStacks: ['ReactJS', 'TypeScript'],
    image: VSCode,
    githubURL: 'https://github.com/phantomdev0826/vscode-portfolio',
    liveURL: 'https://phantomdev0826-v1.vercel.app',
    githubApi: 'https://api.github.com/repos/phantomdev0826/vscode-portfolio',
  },
  {
    id: 2,
    title: 'Portfolio V2',
    description: 'A refined and enhanced showcase of my work, designed to highlight my skills and projects with a sleek and modern interface.',
    techStacks: ['NextJS', 'ShadnUI', 'GSAP'],
    image: PortfolioV2,
    githubURL: 'https://github.com/phantomdev0826/dev_portpolio',
    liveURL: 'https://phantomdev0826.vercel.app',
    githubApi: 'https://api.github.com/repos/phantomdev0826/shinthant.dev',
  },
  {
    id: 3,
    title: 'Mantine Boards',
    description: 'Responsive Dashboards, perfect for admin dashboards, analytics platforms, or any project that requires a clean, modern interface.',
    techStacks: ['RemixJS', 'MantineUI'],
    image: MantineBoards,
    githubURL: 'https://github.com/phantomdev0826/mantine-boards',
    liveURL: 'https://mantine-boards.vercel.app',
    githubApi: 'https://api.github.com/repos/phantomdev0826/mantine-boards',
  },
  {
    id: 4,
    title: 'Motion Scape',
    description: 'Motion Scape is a visually dynamic website dedicated to the art of animations and transitions in web design.',
    techStacks: ['NextJS', 'GSAP', 'TypeScript'],
    image: MotionScape,
    githubURL: 'https://github.com/phantomdev0826/motion-scape',
    liveURL: 'https://motion-gsap.vercel.app',
    githubApi: 'https://api.github.com/repos/phantomdev0826/motion-scape',
  },
  {
    id: 5,
    title: 'Valentin Carousel',
    description: 'An animated carousel inspired by Valentin Awward Winning Website',
    techStacks: ['ReactJs', 'GSAP'],
    image: ValentinCarousel,
    githubURL: 'https://github.com/phantomdev0826/valentin-carousel',
    liveURL: 'https://valentin-carousel.vercel.app',
    githubApi: 'https://api.github.com/repos/phantomdev0826/valentin-carousel',
  },
  {
    id: 6,
    title: 'TheRealHotels',
    description: 'A Landing Website Inspired by awwarded website,therealhotels.com',
    techStacks: ['ReactJs', 'GSAP'],
    image: TheRealHotels,
    githubURL: 'https://github.com/phantomdev0826/therealhotels',
    liveURL: 'https://therealhotels.vercel.app',
    githubApi: 'https://api.github.com/repos/phantomdev0826/therealhotels',
  },
  {
    id: 7,
    title: 'Miro Clone',
    description: 'Enjoy a wide range of brushes, colors, and effects, along with layers, undo/redo functionality, and easy sharing options.',
    techStacks: ['NextJS', 'ShadnUI', 'Convex', 'Clerk', 'Liveblocks'],
    image: MiroClone,
    githubURL: 'https://github.com/phantomdev0826/realtime-miro-clone',
    liveURL: 'https://realtime-miro-clone.vercel.app',
    githubApi: 'https://api.github.com/repos/phantomdev0826/realtime-miro-clone',
  },
] as const; 