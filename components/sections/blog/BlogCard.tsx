import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowRight, Edit } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Blog } from '@/types/blog';

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: `70% bottom`,
      },
    });
    tl.fromTo(
      cardRef.current,
      { y: '100%' },
      { y: 0, ease: 'power1.inOut' }
    );
  }, []);

  return (
    <Link
      href={blog.link}
      target="_blank"
      aria-label={blog.title}
      rel="noopener noreferrer"
      className="w-full overflow-hidden"
    >
      <div
        ref={cardRef}
        className="w-full group flex justify-between items-center hover:bg-gray-500 rounded-md hover:bg-opacity-5 transition-colors p-1 pr-0 md:pr-4"
      >
        <div className="w-full flex flex-col md:flex-row items-center gap-5">
          <Image
            priority
            width={140}
            height={120}
            className="h-full md:h-full bg-contain w-full md:w-[200px] transition-all group-hover:contrast-125 rounded-md"
            src={blog.image}
            alt={blog.title}
          />
          <div className="flex w-full md:w-3/5 flex-col items-start gap-2">
            <div className="dark:text-gray-300">{blog.title}</div>
            <div className="flex items-center gap-2">
              <Edit size={16} color="gray" />
              <div className="text-accentColor text-sm">{blog.publishAt}</div>
            </div>
            <div className="dark:text-gray-400 text-sm">{blog.description}</div>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-start gap-2">
          <div className="w-7 group-hover:scale-110 transition-transform -rotate-45 h-7 rounded-full bg-accentColor flex justify-center items-center">
            <ArrowRight color="white" size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
} 