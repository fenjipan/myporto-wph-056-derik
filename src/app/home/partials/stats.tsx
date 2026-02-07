import Image from 'next/image';

import Section, { SectionHeader } from '@/components/layouts/section';
import { FadeUp } from '@/components/motion';
import { Separator } from '@/components/ui/separator';
import { STATS } from '@/constants/stats-data';

export default function Stats() {
  return (
    <Section id='about'>
      <SectionHeader
        title='Proven Numbers. Real Impact.'
        subtitle='From shipped products to years of experience'
        align='left'
      />

      <div className='flex flex-col gap-6'>
        {STATS.map((stat, i) => (
          <FadeUp key={i} delay={0.1 * i}>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/logo.svg'
                  alt=''
                  width={44}
                  height={44}
                  className='size-8 lg:size-11'
                />
                <span className='text-[40px] leading-10.75 font-bold tracking-[-0.02em] text-white lg:w-40 lg:text-[80px] lg:leading-21.5'>
                  {stat.value}
                </span>
              </div>
              <p className='text-neutral-25 w-37.5 text-[20px] leading-7 font-medium tracking-[-0.02em] whitespace-pre-line lg:w-68 lg:text-[32px] lg:leading-11'>
                {stat.label}
              </p>
              <div className='relative size-[80px] shrink-0 overflow-hidden rounded-lg lg:size-30 lg:rounded-2xl'>
                <Image src={stat.image} alt='' fill className='object-cover' />
              </div>
            </div>
            {i < STATS.length - 1 && (
              <Separator className='mt-6 bg-neutral-800' />
            )}
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
