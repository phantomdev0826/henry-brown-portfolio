'use client';

import { useEffect, useRef } from 'react';
import useScrollActive from '@/hooks/useScrollActive';
import { useSectionStore } from '@/store/section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ContactSocialLinks from './contact/ContactSocialLinks';
import ContactInfo from './contact/ContactInfo';
import ContactEndTitle from './contact/ContactEndTitle';

export default function ContactSection() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q('.title-animation'),
            {
              y: '200%',
            },
            {
              y: 0,
            }
          );

          gsap.fromTo(q('.end-title'), { scale: 0 }, { scale: 1, ease: 'back.inOut' });
        },
      },
    });
  }, []);

  // Set Active Session

  const contactSectionOnView = useScrollActive(sectionRef);

  const { setSection } = useSectionStore();

  useEffect(() => {
    contactSectionOnView && setSection('#contact');
  }, [contactSectionOnView, setSection]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="max-h-max bg-gray-100 dark:bg-[#161D1F] py-[140px] px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col gap-40 items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="overflow-hidden">
            <div className="title-animation dark:text-white text-lg">Want to collaborate?</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-center title-animation text-5xl navlink text-accentColor">
              Contact me!
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <ContactSocialLinks />
          <ContactInfo />
          <div className="overflow-hidden flex justify-center items-center">
            <div className="title-animation w-full md:max-w-[80%] text-center dark:text-gray-400">
              I&apos;m always excited to connect with like-minded professionals and potential
              collaborators. Whether you have a project in mind, need assistance, or just want to
              say hello, feel free to reach out!
            </div>
          </div>
          <ContactEndTitle />
        </div>
      </div>
    </section>
  );
}
