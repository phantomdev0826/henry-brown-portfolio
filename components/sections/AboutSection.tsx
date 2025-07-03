'use client';

import { useEffect, useRef } from 'react';
import useScrollActive from '@/hooks/useScrollActive';
import Signs from '@/public/assets/about/signs.svg';
import { useSectionStore } from '@/store/section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import SplitType from 'split-type';
import clsx from 'clsx';
import TechStack from './about/TechStack';
import EducationBlock from './about/EducationBlock';
import StatsBlock from './about/StatsBlock';
import ProfileImage from './about/ProfileImage';

export default function AboutSection() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    new SplitType(q('.title'), {
      types: 'chars',
      tagName: 'span',
    });

    gsap.from(q('.title .char'), {
      opacity: 0.3,
      duration: 0.5,
      ease: 'power1.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: q('.title'),
        start: 'top center',
        scrub: true,
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          const tl = gsap.timeline({
            defaults: {
              stagger: 0.2,
              duration: 0.3,
            },
          });

          tl.fromTo(q('.image-animation'), { x: 200 }, { x: 0 });

          tl.fromTo(q('.text-animation'), { y: 100 }, { y: 0 });

          tl.to(q('.experience-count'), {
            innerText: 8,
            duration: 0.5,
            snap: { innerText: 1 },
          });

          tl.to(
            q('.project-count'),
            {
              innerText: 30,
              duration: 0.5,
              snap: { innerText: 1 },
            },
            '-=0.3'
          );

          tl.to(
            q('.user-count'),
            {
              innerText: 80,
              duration: 0.5,
              snap: { innerText: 1 },
            },
            '-=0.3'
          );
        },
      },
    });
  }, []);

  // Set Active Section
  const aboutSectionOnView = useScrollActive(sectionRef);
  const { setSection } = useSectionStore();

  useEffect(() => {
    aboutSectionOnView ? setSection('#about') : setSection('#home');
  }, [aboutSectionOnView, setSection]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-full bg-gray-100 dark:bg-[#161D1F] overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-24">
        {/* Section Title */}
        <div
          className={clsx(
            'relative title tracking-tight font-medium w-fit',
            'text-xl md:text-4xl',
            'dark:text-white'
          )}
        >
          <span className="font-semibold">Simplicity is the essence of efficiency.</span>
          <div className="absolute -right-[10px] top-2">
            <Image
              className="w-14 pointer-events-none select-none"
              src={Signs}
              alt="Decorative Signs"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col-reverse md:flex-row items-center gap-20 md:gap-2 lg:gap-10">
          {/* Information & Educational Background */}
          <div className="w-full flex flex-col items-start gap-7 md:gap-9">
            {/* Personal Introduction */}
            <div className="relative">
              <div className="overflow-hidden">
                <div className="text-animation dark:text-accentColor text-3xl md:text-4xl font-medium">
                  About Me
                </div>
              </div>
              <div className="absolute -top-6 -left-8">
                {/* Decorative SVGs */}
                <svg
                  width="45"
                  height="37"
                  viewBox="0 0 45 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG Path */}
                  <path
                    d="M25.807 19.086c-.485-.764-.744-1.319-1.136-1.76a815.404 815.404 0 00-7.627-8.56 4.462 4.462 0 00-1.429-1.06c-.352-.16-1.016-.182-1.22.033-.3.32-.508.962-.396 1.37.165.624.57 1.226.99 1.737 2.52 3.07 5.081 6.113 7.626 9.161.143.17.302.337.475.48.6.508 1.352.985 1.995.37.447-.429.524-1.245.722-1.771zM36.215 9.964c.25 1.018.476 2.041.759 3.053.232.816.832 1.255 1.674 1.21.847-.046 1.371-.582 1.568-1.378.105-.425.176-.914.07-1.328-.645-2.533-1.341-5.05-2.03-7.57-.056-.212-.147-.491-.309-.587-.54-.323-1.14-.827-1.688-.8-.86.045-1.203.871-1.13 1.67.104 1.114.322 2.221.534 3.322.155.806.384 1.601.577 2.404l-.027.009.002-.005zM7.28 28.081c-.22.298-.737.71-.825 1.2-.072.394.287.96.603 1.313.28.309.746.487 1.164.633 1.967.697 3.947 1.363 5.921 2.04.21.071.43.13.65.167.981.166 1.984.278 2.601-.72.457-.732-.07-1.93-1.239-2.553-2.395-1.274-4.98-1.97-7.69-2.171-.295-.021-.595.046-1.183.095l-.001-.004z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </div>

            <EducationBlock />

            <StatsBlock />
          </div>

          <ProfileImage />
        </div>

        {/* Tech Stack */}
        <TechStack />
      </div>
    </section>
  );
}