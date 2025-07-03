export interface Skill {
  readonly name: string;
  readonly icon: string;
  readonly level: number;
  readonly description: string;
}

/**
 * List of skills and technologies for the portfolio.
 */
export const skills: readonly Skill[] = [
  {
    name: 'JavaScript',
    icon: '/assets/skills/javascript-programming-language-icon.svg',
    level: 90,
    description: 'A versatile programming language used for dynamic web development and scripting.',
  },
  {
    name: 'React',
    icon: '/assets/skills/react-js-icon.svg',
    level: 85,
    description: 'A popular JavaScript library for building user interfaces with component-based architecture.',
  },
  {
    name: 'Angular',
    icon: '/assets/skills/angular-icon.svg',
    level: 80,
    description: 'A TypeScript-based open-source web application framework led by Google.',
  },
  {
    name: 'Next.js',
    icon: '/assets/skills/nextjs-icon.svg',
    level: 80,
    description: 'A React framework for server-side rendering and static site generation, enhancing performance.',
  },
  {
    name: 'CSS3',
    icon: '/assets/skills/bootstrap-4-icon.svg',
    level: 90,
    description: 'Styling language for designing responsive and visually appealing web pages.',
  },
  {
    name: 'Tailwind CSS',
    icon: '/assets/skills/tailwind-css-icon.svg',
    level: 85,
    description: 'A utility-first CSS framework for rapid UI development with customizable design.',
  },
  {
    name: 'Node.js',
    icon: '/assets/skills/node-js-icon.svg',
    level: 75,
    description: 'JavaScript runtime environment for building scalable backend applications.',
  },
  {
    name: 'TypeScript',
    icon: '/assets/skills/typescript-programming-language-icon.svg',
    level: 80,
    description: 'A typed superset of JavaScript that adds static types for better code quality.',
  },
] as const; 