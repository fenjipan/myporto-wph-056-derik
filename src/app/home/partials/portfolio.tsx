import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import Section, { SectionHeader } from '@/components/layouts/section';
import { FadeUp } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { PORTFOLIOS } from '@/constants/portfolio-data';

export default function Portfolio() {
  return (
    <Section id='projects'>
      <SectionHeader
        title='Frontend in Action'
        subtitle='These are hands-on projects where I delivered clean, responsive user interfaces.'
      />

      <div className='flex flex-col items-center gap-5 lg:flex-row lg:justify-center'>
        {PORTFOLIOS.map((p, i) => (
          <FadeUp
            key={p.title}
            delay={0.12 * i}
            className='flex w-full flex-col gap-4 lg:w-93.25 lg:gap-6'
          >
            <div className='group relative aspect-square w-full overflow-hidden rounded-lg lg:size-93.25'>
              <Image
                src={p.image}
                alt={p.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-1'>
                <h3 className='text-xl-bold lg:display-sm-bold tracking-[-0.02em] text-white'>
                  {p.title}
                </h3>
                <p className='text-sm-regular lg:text-md-regular tracking-[-0.03em] text-neutral-400'>
                  {p.year}
                </p>
              </div>
              <Button variant='icon' size='icon-lg'>
                <ArrowRight className='text-neutral-25 size-6' />
              </Button>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
