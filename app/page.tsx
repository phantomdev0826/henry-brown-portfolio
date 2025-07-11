import AboutSection from '@/components/sections/AboutSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import MouseSection from '@/components/sections/MouseSection';
import ProjectSection from '@/components/sections/ProjectSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <main id="main">
      <MouseSection />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
