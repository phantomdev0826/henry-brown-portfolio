'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useSectionStore } from '@/store/section';
import gsap from 'gsap';
import Link from 'next/link';

import navLinks from '@/lib/navConfig';
import ResumeBtn from '../ResumeBtn';
import ThemeSwitch from '../ThemeSwitch';
import MobileNav from './MobileNav';

export default function Header() {
  const headerRef = useRef(null);
  const { section } = useSectionStore();

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { top: -120 },
      { top: 0, duration: 0.7, delay: 2.2, ease: 'Power0.easeNone' }
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed z-[100] top-0 left-0 right-0 bg-transparent backdrop-blur-[6px]"
      aria-label="Site Header"
    >
      <div className="w-full h-auto bg-gray-50 shadow-sm dark:bg-transparent min-h-[4.5rem] flex items-center px-[5%]">
        <div className="w-full grid items-center grid-cols-8 md:grid-cols-12">
          {/* Branding Section */}
          <div className="col-span-4">
            <Link href="/" className="flex items-center text-xl font-medium">
              <span
                className={cn(
                  'dark:text-white hover:text-accentColor cursor-pointer',
                  section === '#project' && 'dark:text-black'
                )}
              >
                Henry Brown
              </span>
              <span className="ml-2 text-accentColor font-bold">.dev</span>
            </Link>
          </div>

          {/* Navigation Menu - Hidden on small screens */}
          <nav className="col-span-4 hidden md:flex justify-center">
            <ul className="flex gap-[2rem] lg:gap-[3rem] items-center">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    data-active={link.href === section}
                    className={cn('navlink', section === '#project' && 'dark:text-black')}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="col-span-4 flex items-center justify-end gap-2 md:gap-10">
            <ResumeBtn />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
