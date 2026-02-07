import Image from 'next/image';
import { X } from 'lucide-react';

import Section, { SectionHeader } from '@/components/layouts/section';
import { SlideIn } from '@/components/motion';
import { Card, CardContent } from '@/components/ui/card';
import { SKILLS } from '@/constants/skills-data';

export default function Comparison() {
  return (
    <Section>
      <SectionHeader
        title='Choose Wisely, Get Quality Results'
        subtitle='Make the right choice for interfaces that are fast, reliable, and visually sharp.'
      />

      <div className='flex flex-col gap-4 lg:flex-row lg:gap-5'>
        {/* With Me */}
        <SlideIn
          direction='left'
          className='relative flex-1 overflow-hidden rounded-2xl'
        >
          <Card className='gap-0 rounded-2xl border-none bg-black p-0 shadow-none'>
            <Image
              src='/images/gradient-bg.png'
              alt=''
              fill
              className='object-cover'
            />
            <CardContent className='relative p-4 lg:p-6'>
              <h3 className='text-neutral-25 mb-3 text-[20px] leading-7.5 font-semibold tracking-[-0.04em] lg:mb-4 lg:text-[24px] lg:leading-9'>
                With Me
              </h3>
              <div className='flex flex-col gap-2'>
                {SKILLS.map((skill) => (
                  <div
                    key={skill}
                    className='flex h-14 items-center gap-2 rounded-lg bg-black/20 px-3 backdrop-blur-md lg:px-4'
                  >
                    <Image
                      src='/images/logo.svg'
                      alt=''
                      width={30}
                      height={30}
                      className='size-7.5'
                    />
                    <span className='text-sm-regular lg:text-md-regular text-neutral-25 tracking-[-0.03em]'>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </SlideIn>

        {/* Other */}
        <SlideIn direction='right' delay={0.15} className='flex-1'>
          <Card className='gap-0 rounded-2xl border-neutral-900 bg-black p-0 shadow-none'>
            <CardContent className='p-4 lg:p-6'>
              <h3 className='text-neutral-25 mb-3 text-[20px] leading-7.5 font-semibold tracking-[-0.04em] lg:mb-4 lg:text-[24px] lg:leading-9'>
                Other
              </h3>
              <div className='flex flex-col gap-2'>
                {SKILLS.map((skill) => (
                  <div
                    key={skill}
                    className='flex h-14 items-center gap-2 rounded-lg bg-neutral-900 px-3 lg:px-4'
                  >
                    <X className='size-6 shrink-0 text-[#EE1D52]' />
                    <span className='text-sm-regular lg:text-md-regular tracking-[-0.03em] text-neutral-500'>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </SlideIn>
      </div>
    </Section>
  );
}
