import Image from 'next/image';

import Section, { SectionHeader } from '@/components/layouts/section';
import { ScaleIn, FadeUp } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { TECH_STACK } from '@/constants/skills-data';

export default function Skills() {
  return (
    <Section id='skill'>
      <SectionHeader
        title='Experienced in Web & App Development'
        subtitle='I create user-focused websites that look good, work well, and feel right.'
      />

      <div className='flex flex-col gap-4 lg:flex-row lg:gap-4.25'>
        {/* Tech Grid */}
        <div className='grid w-full shrink-0 grid-cols-2 gap-4 lg:w-168.5 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4.25'>
          {TECH_STACK.map((tech, i) => (
            <ScaleIn key={tech.name} delay={0.08 * i}>
              <div className='hover:border-primary-200/50 flex h-43 flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-900 p-2 transition-colors lg:size-53.5'>
                <div className='flex size-22.5 items-center justify-center rounded-full border border-white'>
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={52}
                    height={52}
                    className='size-13 object-contain'
                  />
                </div>
                <span className='text-lg-medium text-white'>{tech.name}</span>
              </div>
            </ScaleIn>
          ))}
        </div>

        {/* Quote Card */}
        <FadeUp
          delay={0.3}
          className='relative h-75.75 overflow-hidden rounded-2xl bg-[#3a0764] lg:h-auto lg:flex-1'
        >
          <Image
            src='/images/gradient-bg.png'
            alt=''
            fill
            className='object-cover opacity-80'
          />
          <div className='relative flex h-full flex-col justify-between border border-neutral-900 p-4 lg:p-6'>
            <div className='flex flex-col gap-3'>
              <p className='display-md-bold tracking-[-0.04em] text-white'>
                &ldquo;Programming is the art of telling another human what you
                want the computer to do.&rdquo;
              </p>
              <p className='text-md-regular tracking-[-0.03em] text-white'>
                — Donald Knuth
              </p>
            </div>
            <Button variant='nav' className='h-12 w-full'>
              Let&apos;s Build Something
            </Button>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
