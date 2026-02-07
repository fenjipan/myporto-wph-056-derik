import Section, { SectionHeader } from '@/components/layouts/section';
import { FadeIn } from '@/components/motion';
import TestimonialsCarousel from '@/components/testimonials-carousel';
import { TESTIMONIALS } from '@/constants/testimonials-data';

export default function Testimonials() {
  return (
    <Section>
      <SectionHeader
        title='Trusted by Teams, Valued by Clients'
        subtitle='A few kind words from the people behind the projects Edwin helped bring to life.'
      />

      <FadeIn delay={0.2}>
        <TestimonialsCarousel testimonials={TESTIMONIALS} />
      </FadeIn>
    </Section>
  );
}
