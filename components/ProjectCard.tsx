'use client';

import { useEffect, useRef, useState, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import type { Project } from '@/types/project';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { StarIcon } from '@/components/icons/StarIcon';

interface Props {
  project: Project;
}

/**
 * ProjectCard displays a single project with animation, description, tech stack, and GitHub link.
 * @param props - The project item to display.
 */
const ProjectCard = memo(function ProjectCard({ project }: Readonly<Props>): JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);
  const [starCount, setStarCount] = useState<number>(0);

  useEffect((): void => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: `70% bottom`,
      },
    });
    tl.fromTo(
      cardRef.current,
      { scale: 0 },
      { scale: 1, ease: 'power1.inOut' }
    );
  }, []);

  useEffect((): void | (() => void) => {
    let ignore = false;
    if (!project.githubApi) return;
    async function fetchData(): Promise<void> {
      const response = await fetch(project.githubApi);
      const data = await response.json();
      const stargazersCount = data.stargazers_count;
      const stargazersUrl = data.stargazers_url;
      if (stargazersCount && stargazersUrl && !ignore) {
        setStarCount(stargazersCount);
      }
    }
    fetchData();
    return () => {
      ignore = true;
    };
  }, [project.githubApi]);

  return (
    <article
      ref={cardRef}
      className="relative overflow-hidden col-span-1 w-full flex flex-col shadow-sm border rounded-[0.75rem] min-h-[380px] h-auto"
      aria-label={`Project card for ${project.title}`}
    >
      <Image priority alt={project.title} src={project.image} />
      <div className="flex-1 group relative overflow-hidden p-4 flex flex-col items-start justify-between after:content-[''] after:rounded-full after:absolute after:content after:z-[10] after:w-[32px] after:h-[32px] after:bg-accentColor after:scale-[1] after:bottom-[-24px] after:right-[-24px] after:origin-center after:transition-transform after:duration-500 after:ease-out hover:after:scale-[25]">
        <div className="absolute inset-0 z-10 transition-colors duration-500 pointer-events-none group-hover:bg-black/70 rounded-[0.75rem]" />
        <div className="relative z-20 w-full flex flex-col h-full flex-1">
          <div className="w-full flex flex-col gap-2 items-start mb-2">
            <div className="w-full flex justify-between items-center">
              <div className="text-accentColor group-hover:text-white font-medium">
                {project.title}
              </div>
              <div className="flex items-center group" aria-label="GitHub stars">
                <StarIcon />
                <div className="font-medium text-sm" aria-live="polite">{starCount}</div>
              </div>
            </div>
            <div className="text-black text-sm group-hover:text-white">{project.description}</div>
          </div>
          <div className="flex-1" />
          {/* Chips pinned above GitHub button */}
          <div className="w-full flex flex-wrap items-center gap-2 min-w-0 mb-2" aria-label="Tech stack">
            {project.techStacks.map((tech, index) => {
              return index % 2 === 0 ? (
                <div
                  key={tech}
                  className="px-2 py-[3px] shadow-sm border border-accentColor bg-white rounded-xl text-sm text-black flex justify-center items-center group-hover:bg-accentColor group-hover:text-white"
                  aria-label={tech}
                >
                  {tech}
                </div>
              ) : (
                <div
                  key={tech}
                  className="px-2 py-[3px] shadow-sm bg-accentColor group-hover:border-[0.01px] rounded-xl text-sm text-white flex justify-center items-center"
                  aria-label={tech}
                >
                  {tech}
                </div>
              );
            })}
          </div>
          {/* GitHub Button pinned to bottom */}
          {project.githubURL && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className={cn('flex items-center gap-2')}
              aria-label={`See '${project.title}' on Github`}
            >
              <a
                href={project.githubURL}
                title={`See '${project.title}' on Github`}
                target="_blank"
                rel="noreferrer"
              >
                Visit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="opacity-75fill-black"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  ></path>
                </svg>
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
});

export default ProjectCard;
