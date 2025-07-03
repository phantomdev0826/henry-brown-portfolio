'use client';

import { useEffect, useRef } from 'react';
import useOnScreen from '@/hooks/useOnScreen';
import useScrollActive from '@/hooks/useScrollActive';
import { blogs } from '@/data/blogs';
import type { Blog } from '@/types/blog';
import { useSectionStore } from '@/store/section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowRight } from 'iconsax-react';
import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';
import BlogCard from './blog/BlogCard';

export default function BlogSection() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(q('.qoutes-animation'), { y: '-200%' }, { y: 0 });
        },
      },
    });
    return () => {
      // Kill the scrollTrigger when component unmounts
      tl.scrollTrigger?.kill();
    };
  }, []);

  // Set Active Session
  const aboutSectionOnView = useScrollActive(sectionRef);
  const { setSection } = useSectionStore();

  useEffect(() => {
    aboutSectionOnView && setSection('#blog');
  }, [aboutSectionOnView, setSection]);

  return (
    <section ref={sectionRef} id="blog" className="h-full bg-baseBackground py-14 px-10 lg:px-[5%]">
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Blog
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden flex flex-col gap-1">
            <div className="qoutes-animation mx-auto text-center text-sm dark:text-white flex flex-col items-center font-normal">
              I document my journey by writing blog posts about my projects and experiences.
            </div>
            <div className="qoutes-animation mx-auto text-center text-sm dark:text-white flex flex-col items-center font-normal">
              <div>Check out some of my latest entries below. 🚀</div>
            </div>
          </div>
        </div>

        <div className="md:w-full pt-4 pb-10 flex flex-col items-start gap-6">
          {blogs.map((blog: Blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <Link
          href={'https://medium.com/@shinthantequi'}
          target="_blank"
          aria-label="Follow up on my medium account"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <div className="text-accentColor navlink text-sm italic">Follow up on my medium</div>
          <ArrowRight color="white" size={15} />
        </Link>
      </div>
    </section>
  );
}
