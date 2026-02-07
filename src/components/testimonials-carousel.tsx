'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  company: string;
  logo: string;
  quote: string;
  name: string;
  role: string;
}

const CARDS_PER_VIEW_DESKTOP = 3;
const GAP = 20;

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const total = testimonials.length;
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function check() {
      setIsMobile(window.innerWidth < 1024);
    }
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const maxIndex = isMobile
    ? total - 1
    : Math.max(0, total - CARDS_PER_VIEW_DESKTOP);

  function go(index: number) {
    setActive(Math.max(0, Math.min(index, maxIndex)));
  }

  /* Card width calculation */
  function getCardWidth() {
    const el = containerRef.current;
    if (!el) return 0;
    const containerW = el.offsetWidth;
    if (isMobile) return containerW;
    return (
      (containerW - GAP * (CARDS_PER_VIEW_DESKTOP - 1)) / CARDS_PER_VIEW_DESKTOP
    );
  }

  const offset = active * (getCardWidth() + GAP);

  /* Swipe support */
  const touchStartX = useRef(0);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      go(active + (diff > 0 ? 1 : -1));
    }
  }

  /* Dots: on desktop show pages, on mobile show per card */
  const dotCount = isMobile ? total : maxIndex + 1;

  return (
    <div className='flex flex-col gap-6'>
      {/* Carousel container */}
      <div className='relative'>
        {/* Prev / Next arrows (desktop) */}
        {!isMobile && active > 0 && (
          <Button
            variant='icon'
            size='icon-lg'
            onClick={() => go(active - 1)}
            className='absolute top-1/2 -left-5 z-10 -translate-y-1/2 bg-black/80 backdrop-blur-sm hover:border-white/30'
            aria-label='Previous'
          >
            <ChevronLeft className='size-5 text-white' />
          </Button>
        )}
        {!isMobile && active < maxIndex && (
          <Button
            variant='icon'
            size='icon-lg'
            onClick={() => go(active + 1)}
            className='absolute top-1/2 -right-5 z-10 -translate-y-1/2 bg-black/80 backdrop-blur-sm hover:border-white/30'
            aria-label='Next'
          >
            <ChevronRight className='size-5 text-white' />
          </Button>
        )}

        {/* Cards track */}
        <div
          ref={containerRef}
          className='overflow-hidden'
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            className='flex'
            style={{ gap: GAP }}
            animate={{ x: -offset }}
            transition={{ type: 'spring', damping: 26, stiffness: 180 }}
          >
            {testimonials.map((t, i) => (
              <Card
                key={i}
                className='shrink-0 justify-between gap-0 rounded-2xl border-neutral-900 bg-transparent p-0 shadow-none'
                style={{
                  width: isMobile
                    ? '100%'
                    : `calc((100% - ${GAP * (CARDS_PER_VIEW_DESKTOP - 1)}px) / ${CARDS_PER_VIEW_DESKTOP})`,
                  backgroundImage:
                    'radial-gradient(ellipse at top left, rgba(52,20,76,1) 0%, transparent 60%)',
                }}
              >
                <CardContent className='flex flex-col justify-between p-4 lg:p-5'>
                  <div className='flex flex-col gap-6 lg:gap-8'>
                    {/* Company Logo */}
                    <div className='relative h-8 w-24 lg:h-12 lg:w-32'>
                      <Image
                        src={t.logo}
                        alt={t.company}
                        fill
                        className='object-contain object-left'
                      />
                    </div>

                    {/* Stars */}
                    <div className='flex gap-1'>
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Image
                          key={j}
                          src='/icons/star.svg'
                          alt='Star'
                          width={24}
                          height={24}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className='text-md-medium lg:text-lg-medium text-neutral-25'>
                      {t.quote}
                    </p>
                  </div>

                  {/* Person */}
                  <div className='mt-10 flex flex-col gap-0.5 lg:mt-15.25'>
                    <span className='text-md-bold text-neutral-25 tracking-[-0.02em]'>
                      {t.name}
                    </span>
                    <span className='text-sm-regular lg:text-md-regular tracking-[-0.03em] text-neutral-500'>
                      {t.role}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className='flex items-center justify-center gap-1.5'>
        {Array.from({ length: dotCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all ${
              i === active
                ? 'h-2 w-6 bg-[#682d9b] lg:h-3 lg:w-12'
                : 'h-2 w-3 bg-neutral-800 lg:h-3 lg:w-6'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
