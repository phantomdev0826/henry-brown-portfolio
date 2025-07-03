"use client"

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useScrollActive from "@/hooks/useScrollActive";
import { useSectionStore } from "@/store/section";
import { RoughNotation } from "react-rough-notation";
import useOnScreen from "@/hooks/useOnScreen";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "JavaScript",
    icon: "/assets/skills/javascript-programming-language-icon.svg",
    level: 90,
    description: "A versatile programming language used for dynamic web development and scripting."
  },
  {
    name: "React",
    icon: "/assets/skills/react-js-icon.svg",
    level: 85,
    description: "A popular JavaScript library for building user interfaces with component-based architecture."
  },
  // Add Angular
  {
    name: "Angular",
    icon: "/assets/skills/angular-icon.svg",
    level: 80,
    description: "A TypeScript-based open-source web application framework led by Google.",
  },
  {
    name: "Next.js",
    icon: "/assets/skills/nextjs-icon.svg",
    level: 80,
    description: "A React framework for server-side rendering and static site generation, enhancing performance."
  },
  {
    name: "CSS3",
    icon: "/assets/skills/bootstrap-4-icon.svg",
    level: 90,
    description: "Styling language for designing responsive and visually appealing web pages."
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/skills/tailwind-css-icon.svg",
    level: 85,
    description: "A utility-first CSS framework for rapid UI development with customizable design."
  },
  {
    name: "Node.js",
    icon: "/assets/skills/node-js-icon.svg",
    level: 75,
    description: "JavaScript runtime environment for building scalable backend applications."
  },
  {
    name: "TypeScript",
    icon: "/assets/skills/typescript-programming-language-icon.svg",
    level: 80,
    description: "A typed superset of JavaScript that adds static types for better code quality."
  },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  
  const elementRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(elementRef)
  
  const aboutSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    aboutSectionOnView && setSection("#skills")
  }, [aboutSectionOnView, setSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full bg-gray-600 dark:bg-[#060D0F] text-white py-16 px-4"
    >
      {/* Header */}
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
                My Skills & Technologies
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="qoutes-animation  md:w-full text-center font-medium flex flex-col items-center">
              <div>I utilize these tools and technologies to build efficient, modern web applications:</div>
              <div>Design is not for philosophy, it&apos;s for life.</div>
            </div>
          </div>
        </div>
        </div>

      {/* Skills Grid */}
      
      <div className="grid break-words pt-40 grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 skills-grid">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 p-6 rounded-lg shadow hover:scale-105 transition-transform duration-300 hover:bg-opacity-20 skill-card"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-16 h-16"
              />
            </div>
            {/* Skill Name */}
            <h3 className="text-xl font-semibold text-center uppercase tracking-wide mb-2">
              {skill.name}
            </h3>
            {/* Description */}
            {/* <p className="text-gray-300 text-sm mb-2 text-center">{skill.description}</p> */}
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden mb-2">
              <div
                className="bg-green-400 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            {/* Percentage Text */}
            <p className="text-center text-gray-300 text-sm">{skill.level}% proficiency</p>
          </div>
        ))}
      </div>
    </section>
  );
}