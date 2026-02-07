import Image from 'next/image';

import Section, { SectionHeader } from '@/components/layouts/section';
import { FadeUp } from '@/components/motion';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { EXPERIENCES, EXP_BULLETS } from '@/constants/experience-data';

export default function Experience() {
  return (
    <Section>
      <SectionHeader
        title='Years of Building, Learning, and Shipping'
        subtitle='Each role has sharpened my ability to build better digital experiences, faster.'
      />

      <div className='relative flex flex-col gap-4'>
        {/* Timeline line */}
        <div className='absolute top-0 bottom-0 left-3 w-px bg-neutral-800 lg:left-4' />

        {EXPERIENCES.map((exp, i) => (
          <FadeUp
            key={i}
            delay={0.15 * i}
            className='flex items-start gap-3 lg:gap-6'
          >
            {/* Timeline dot */}
            <div className='bg-primary-100 relative z-10 mt-6 size-6 shrink-0 rounded-full lg:size-8' />

            {/* Card */}
            <Card className='flex-1 gap-0 rounded-2xl border-neutral-800 bg-transparent p-0 shadow-none'>
              <CardContent className='flex flex-col gap-4 p-4 lg:flex-row lg:gap-6 lg:p-6'>
                {/* Left: Date + Logo */}
                <div className='flex shrink-0 flex-col gap-2'>
                  <span className='text-md-bold lg:text-lg-bold text-neutral-25'>
                    {exp.period}
                  </span>
                  <div className='relative h-8 w-21.25 lg:h-12 lg:w-32'>
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className='object-contain object-left'
                    />
                  </div>
                </div>

                {/* Divider */}

                {/* Right: Bullet points */}
                <div className='flex flex-1 flex-col gap-3 lg:gap-4'>
                  {EXP_BULLETS.map((bullet, j) => (
                    <div
                      key={j}
                      className='flex items-start gap-2 lg:items-center'
                    >
                      <Image
                        src='/images/logo.svg'
                        alt=''
                        width={30}
                        height={30}
                        className='size-6 shrink-0 lg:size-7.5'
                      />
                      <p className='text-sm-regular lg:text-md-regular text-neutral-25 tracking-[-0.03em]'>
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
