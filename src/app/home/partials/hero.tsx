import Image from 'next/image';

import { FadeUp, FadeIn, ScaleIn, MotionDiv } from '@/components/motion';
import { SOCIAL_LINKS } from '@/constants/social-links-data';

import Navbar from './navbar';

function CircularBadge() {
  const text = 'Expert for Frontend Developer \u00B7 ';
  const chars = text.split('');
  const degPerChar = 360 / chars.length;

  return (
    <div className='relative size-30 rounded-full bg-white'>
      <div className='absolute inset-0 animate-[spin_12s_linear_infinite]'>
        {chars.map((char, i) => (
          <span
            key={i}
            className='font-family-sans absolute top-0 left-1/2 text-[10px] text-neutral-950'
            style={{
              transform: `rotate(${i * degPerChar}deg)`,
              transformOrigin: '0 60px',
            }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <Image src='/icons/globe.svg' alt='Globe' width={40} height={40} />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className='relative min-h-screen overflow-hidden bg-[#3a0764]'>
      <div className='absolute inset-0'>
        <Image
          src='/images/gradient-bg.png'
          alt=''
          fill
          className='object-cover opacity-80'
          priority
        />
      </div>

      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='pointer-events-none absolute top-[12%] left-1/2 -translate-x-1/2 text-[55px] leading-17.5 font-bold tracking-[-0.05em] text-white/10 lg:text-[clamp(4rem,9.8vw,142px)] lg:leading-none'
      >
        PORTOFOLIO
      </MotionDiv>

      <Navbar />

      {/* Hero Content */}
      <div className='relative z-10 mx-auto mt-6 flex w-full max-w-360 flex-col items-center px-4 lg:mt-[40px] lg:flex-row lg:items-center lg:justify-between lg:px-30'>
        {/* Profile Image */}
        <ScaleIn delay={0.3} className='relative order-1 lg:order-2'>
          <div className='relative h-103.5 w-79.75 overflow-hidden rounded-t-full bg-white lg:h-124.25 lg:w-95.75'>
            <Image
              src='/images/profile1.png'
              alt='WILDERIK'
              fill
              className='object-cover object-top'
              priority
            />
          </div>
          <Image
            src='/images/sparkle.svg'
            alt=''
            width={126}
            height={126}
            className='absolute -top-2.5 -right-15 size-31.5'
          />
          <div className='absolute -right-30 -bottom-2.5'>
            <CircularBadge />
          </div>
        </ScaleIn>

        {/* Name */}
        <FadeUp
          delay={0.2}
          className='order-2 mt-6 flex flex-col text-center text-[40px] leading-14 font-bold tracking-[-0.02em] text-white lg:order-1 lg:mt-0 lg:text-left lg:text-[80px] lg:leading-22.75'
        >
          <span>WILDERIK</span>
          <span>MANGKUPATY</span>
        </FadeUp>

        {/* About */}
        <FadeUp
          delay={0.5}
          className='order-3 mt-8 flex w-full flex-col gap-10 px-0 lg:mt-0 lg:w-78.25'
        >
          <div className='flex flex-col gap-1'>
            <h2 className='text-[28px] leading-9.5 font-bold tracking-[-0.04em] text-white lg:text-[32px] lg:leading-10.5'>
              About me
            </h2>
            <p className='text-md-semibold text-neutral-25 leading-7.5 tracking-[-0.03em]'>
              Passionate about frontend development, I focus on crafting digital
              products.
            </p>
          </div>
          <div className='flex items-center gap-3'>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className='flex size-12 items-center justify-center transition-transform hover:scale-110'
              >
                <Image
                  src={s.icon}
                  alt={s.name}
                  width={24}
                  height={24}
                  className='size-6'
                />
              </a>
            ))}
          </div>
        </FadeUp>
      </div>

      <FadeIn
        delay={0.8}
        className='relative z-10 mx-auto mt-10 flex justify-center lg:mt-16'
      >
        <div className='flex size-18.75 items-center justify-center rounded-full border border-white/20 transition-transform hover:scale-110 lg:size-26.25'>
          <Image
            src='/icons/arrow-down.svg'
            alt='Scroll down'
            width={35}
            height={35}
            className='size-6 rotate-180 animate-bounce lg:size-8.75'
          />
        </div>
      </FadeIn>
    </section>
  );
}
