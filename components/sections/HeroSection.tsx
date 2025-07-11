'use client';

import HeroLines from '@/public/assets/hero/hero-lines.png';
import HeroPhoto from '@/public/assets/hero/hero-photo-trans.png';
import Image from 'next/image';
import SocialLinks from '../SocialLinks';
import HeroContent from './HeroContent';
import HeroTool from './HeroTool';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full relative z-[50] min-h-screen bg-baseBackground pt-[4.5rem]"
    >
      {/* Background Illustration */}
      <Image
        className="w-[38rem] absolute top-[6.5rem] md:top-[50%] left-[50%] -translate-x-1/2 md:-translate-y-1/2 select-none pointer-events-none"
        src={HeroLines}
        alt=""
        aria-hidden="true"
        priority
      />

      <HeroTool />
      <HeroContent />
      <SocialLinks />

      {/* Hero Photo */}
      <Image
        className="w-[35rem] absolute hidden xl:block top-[6.5rem] md:top-[50%] left-[80%] md:left-[80%] -translate-x-1/2 md:-translate-y-1/2 select-none pointer-events-none"
        src={HeroPhoto}
        alt=""
        aria-hidden="true"
        priority
      />
    </section>
  );
}
