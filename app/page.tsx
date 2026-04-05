import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { AboutSnapshot } from '@/components/sections/AboutSnapshot';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { CTABanner } from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSnapshot />
      <TestimonialsSection />
      <GalleryPreview />
      <CTABanner />
    </>
  );
}
