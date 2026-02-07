import { type ReactNode } from 'react';

import { FadeUp } from '@/components/motion';
import { cn } from '@/lib/utils';

export default function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn('px-4 py-10 lg:px-30 lg:py-[80px]', className)}
    >
      <div className='mx-auto max-w-300'>{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  delay = 0,
}: {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  delay?: number;
}) {
  return (
    <FadeUp
      delay={delay}
      className={`mb-6 lg:mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      <h2 className='display-sm-bold lg:display-2xl-bold tracking-[-0.03em] text-white'>
        {title}
      </h2>
      <p className='text-md-regular lg:text-lg-regular mt-2 tracking-[-0.02em] text-neutral-400 lg:mt-4'>
        {subtitle}
      </p>
    </FadeUp>
  );
}
