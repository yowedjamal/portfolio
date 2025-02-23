import { HeroSlider } from '@/components/hero-slider';
import { AnimatedFeatures } from '@/components/animated-features';
import AboutSection from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { BlogSection } from '@/components/blog-section';
import { ContactSection } from '@/components/contact-section';
import { HeadBar } from '@/components/headBar';

export default function Home() {
  return (
    <div className="relative">
      <HeadBar/>
      <HeroSlider />
      <AnimatedFeatures />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}